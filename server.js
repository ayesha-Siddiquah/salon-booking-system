import dotenv from "dotenv";
dotenv.config();

// dotenv.config(); // Load environment variables

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authentication from "./middleware/authentication.js";



// Import Models
import Appointment from "./models/Appointment.js";
import Stylist from "./models/Stylist.js";
import Customer from "./models/Customer.js";





const app = express();
app.set("case sensitive routing", true); ///// For case senitive dealing with postman API .(Windows are case-insensitive so keep uniformity in URLS we are enforcing case sensitivty)
app.use(cors({ origin: "*" })); // Allow all origins (Update if needed)
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/salon_booking")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  });


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
  

app.post("/appointments", async (req, res) => {
  try {
    console.log("📥 Received Data:", req.body);

    const { customer_id, stylist_id, service, date, time, status } = req.body;

    // Validate required fields
    if (!customer_id || !stylist_id || !service || !date || !time) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(customer_id) || !mongoose.Types.ObjectId.isValid(stylist_id)) {
      return res.status(400).json({ message: "Invalid customer_id or stylist_id format" });
    }

    const formattedDate = new Date(date);
    if (isNaN(formattedDate)) {
      return res.status(400).json({ message: "Invalid date format" });
    }

    // Create and save appointment
    const appointment = new Appointment({
      customer_id: new mongoose.Types.ObjectId(customer_id),
      stylist_id: new mongoose.Types.ObjectId(stylist_id),
      service,
      date: formattedDate, // Store as Date object
      time,
      status: status || "Pending",
    });

    console.log("💾 Saving Appointment:", appointment);
    await appointment.save();
    
    res.status(201).json({ message: "✅ Appointment created successfully", appointment });

  } catch (error) {
    console.error("❌ Error creating appointment:", error);
    res.status(500).json({ message: "Error creating appointment", error: error.message });
  }
});

/** 
 * GET /appointments
 * Fetch appointments (Filter by customer_id or stylist_id)
 */
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

/** 
 * GET /stylists
 * Fetch all stylists
 */
app.get("/stylists", async (req, res) => {
  try {
    const stylists = await Stylist.find({});
    res.status(200).json(stylists);
  } catch (error) {
    console.error("❌ Error fetching stylists:", error);
    res.status(500).json({ message: "Error fetching stylists", error: error.message });
  }
});

/** 
 * GET /customers
 * Fetch all customers
 */
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
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🌍 Visit: http://localhost:${PORT}`);
});
