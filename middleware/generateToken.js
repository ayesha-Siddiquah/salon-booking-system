import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); // Load .env variables

const secretKey = process.env.JWT_SECRET; // Get secret key from .env
console.log("🛠️ JWT Secret Used for Signing:", secretKey); // Debugging line

const user = {
    id: "65f22a9c91e4e8b34a6d7b12",
    email: "test@example.com",
    role: "customer",
};
if (!secretKey) {
    console.error("❌ JWT_SECRET is missing in .env");
    process.exit(1);
  }

const token = jwt.sign(user, secretKey, { expiresIn: "24h" });

console.log("Generated Token:", token);
