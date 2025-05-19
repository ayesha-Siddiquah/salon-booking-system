import dotenv from "dotenv";
dotenv.config();
console.log("🔑 Loaded JWT Secret:", process.env.JWT_SECRET ? "Exists ✅" : "Missing ❌"); // Debugging


// dotenv.config(); // Load environment variables

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authentication from "./middleware/authentication.js";
import { sendSMS } from "./utils/sendSMS.js"; // Twilio SMS function
import { sendEmail } from "./utils/sendEmail.js"; // Nodemailer email function

// Import Models
import Appointment from "./models/Appointment.js";
import Stylist from "./models/Stylist.js";
import Customer from "./models/Customer.js";
import Hairservice from "./models/Hairservice.js"
const app = express();
app.set("case sensitive routing", true); ///// For case senitive dealing with postman API .(Windows are case-insensitive so keep uniformity in URLS we are enforcing case sensitivty)
app.use(cors()); 

//app.use(cors({ origin: "*" })); // Allow all origins (Update if needed)
app.use(express.json());   // this enables json parsing 

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (err) {
    console.error("Database connection error:", err);
    setTimeout(connectDB, 5002); // Retry after 5 seconds
  }
};

connectDB();


// Test API
app.get("/", (req, res) => {
  res.send("API is running...");
});

/* ==========================
   ✅ API Endpoints
============================= */

/** 
 * POST /appointments
 * Create a new appointment
 */


/// This is for authenticating the user 
app.get("/api/protected", authentication, (req, res) => {
    res.json({ message: "Access granted to protected route!", user: req.user });

  });


  /// Post Appointments 

  app.post("/appointments", async (req, res) => {
    try {
        // 🛠️ Log the incoming request data
        console.log("📥 Received Data:", JSON.stringify(req.body, null, 2));

        const { 
            customer = {}, 
            stylist_id = null, 
            service = "", 
            date = "", 
            time = "", 
            status = "Pending" 
        } = req.body;

        // ✅ Log extracted values to verify correctness
        console.log("🛠️ Extracted Data:");
        console.log("   - Customer Name:", customer.name);
        console.log("   - Customer Email:", customer.email);
        console.log("   - Customer Phone:", customer.phone);
        console.log("   - Stylist ID:", stylist_id);
        console.log("   - Service:", service);
        console.log("   - Date:", date);
        console.log("   - Time:", time);

        const validationErrors = [];
        if (!customer.name?.trim()) validationErrors.push("Customer name is required");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email)) validationErrors.push("Valid email is required");

        if (!customer.phone) {
          validationErrors.push("Phone number is required");
      } else if (!/^\d{10}$/.test(customer.phone)) {
          validationErrors.push("10-digit phone number is required");
      }
      

       
        if (!stylist_id) validationErrors.push("Stylist selection is required");
        if (!mongoose.Types.ObjectId.isValid(stylist_id)) validationErrors.push("Invalid stylist format");
        if (!service.trim()) validationErrors.push("Service selection is required");

        const appointmentDate = new Date(date);
        if (isNaN(appointmentDate)) validationErrors.push("Invalid date format");
        else if (appointmentDate < new Date()) validationErrors.push("Date cannot be in the past");

        const timeRegex = /^(0[9]|1[0-8]):00$/;
        if (!timeRegex.test(time)) validationErrors.push("Invalid time slot (9:00-18:00 in HH:00 format)");

        if (validationErrors.length > 0) {
            console.warn("❌ Validation errors:", validationErrors);
            return res.status(400).json({ message: "Validation failed", errors: validationErrors });
        }

        // 🔍 Check if the customer already exists in the database
        let existingCustomer = await Customer.findOne({ email: customer.email });

        if (!existingCustomer) {
            console.log("🆕 Creating new customer record...");
            existingCustomer = new Customer({
                name: customer.name,
                email: customer.email,
                phone_number: customer.phone,
            });
            await existingCustomer.save();
            console.log("✅ New customer saved:", existingCustomer._id);
        }

        // 🔍 Check if the service exists in the database
        const hairService = await Hairservice.findOne({ name: service.trim() });
        if (!hairService) {
            console.error("❌ Invalid service selected:", service);
            return res.status(400).json({ message: "Invalid service selected" });
        }

        // ✅ Log service details
        console.log("✅ Found Service:", hairService._id);

        // 📅 Creating the appointment
        const appointment = new Appointment({
            customer_id: existingCustomer._id,
            name: customer.name,
            email: customer.email,
            phone_number: customer.phone,
            stylist_id: new mongoose.Types.ObjectId(stylist_id),
            service: hairService._id,
            date: appointmentDate,
            time,
            status,
        });

        await appointment.save();
        console.log("✅ Appointment created successfully:", JSON.stringify(appointment, null, 2));

        // 📩 Sending notification (log before sending)
        console.log("📩 Preparing to send email and SMS notifications...");

        // 🔍 Log the actual values being passed to sendEmail & sendSMS
        console.log("📧 Email Notification:");
        console.log("   - To:", customer.email);
        console.log("   - Subject: Appointment Confirmation");
        console.log("   - Text:", `Your appointment for ${service} on ${date} at ${time} is confirmed.`);

        console.log("📞 SMS Notification:");
        console.log("   - To:", customer.phone);
        console.log("   - Message:", `BEAUTYMARK: Your ${service} appointment on ${date} at ${time} is confirmed.`);

        await Promise.all([
            sendEmail({
                to: customer.email,
                subject: "Appointment Confirmation",
                text: `Your appointment for ${service} on ${date} at ${time} is confirmed.`,
            }),
            sendSMS({
                to: customer.phone,
                body: `BEAUTYMARK: Your ${service} appointment on ${date} at ${time} is confirmed.`,
            }),
        ]);

        console.log("✅ Notifications sent successfully!");

        return res.status(201).json({
            success: true,
            message: "Appointment created successfully",
            data: {
                appointment: {
                    id: appointment._id,
                    date: appointmentDate.toISOString().split('T')[0],
                    time,
                    service,
                    stylist_id,
                },
            },
        });
    } catch (error) {
        console.error("❌ Server Error:", error);
        res.status(500).json({
            success: false,
            message: error.message || "Internal server error",
            errorCode: error.code || "SERVER_ERROR",
        });
    }
});

  

  

  
  
app.get("/appointments", async (req, res) => {
  try {
    const filter = {};
    if (req.query.customer_id && mongoose.Types.ObjectId.isValid(req.query.customer_id)) {
      filter.customer_id = new mongoose.Types.ObjectId(req.query.customer_id);
    }
    if (req.query.stylist_id && mongoose.Types.ObjectId.isValid(req.query.stylist_id)) {
      filter.stylist_id = new mongoose.Types.ObjectId(req.query.stylist_id);
    }

    const appointments = await Appointment.find(filter)
      .populate("customer_id", "name email") // Show customer name & email
      .populate("stylist_id", "name specialization"); // Show stylist name & specialization

    res.status(200).json(appointments);
  } catch (error) {
    console.error("❌ Error fetching appointments:", error);
    res.status(500).json({ message: "Error fetching appointments", error: error.message });
  }
});


// GET /services
app.get("/hairservices", async (req, res) => {
  try {
    const hairservices = await Hairservice.find({});
    console.log("MongoDB Response:", hairservices);
    res.status(200).json(hairservices);
  } catch (error) {
    console.error("❌ Error fetching services:", error);
    res.status(500).json({ message: "Error fetching services", error: error.message });
  }
});



/* GET /stylists */
app.get("/stylists", async (req, res) => {
  try {
    const stylists = await Stylist.find({});
    res.status(200).json(stylists);
  } catch (error) {
    console.error("❌ Error fetching stylists:", error);
    res.status(500).json({ message: "Error fetching stylists", error: error.message });
  }
});

/*GET /customers*/
app.get("/customers", async (req, res) => {
  try {
    const customers = await Customer.find({});
    res.status(200).json(customers);
  } catch (error) {
    console.error("❌ Error fetching customers:", error);
    res.status(500).json({ message: "Error fetching customers", error: error.message });
  }
});

/* ==========================
   ✅ Server Start
============================= */
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🌍 Visit: http://localhost:${PORT}`);
});
