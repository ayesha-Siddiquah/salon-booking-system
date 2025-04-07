import jwt from "jsonwebtoken";

const authentication = (req, res, next) => {
    console.log("🔎 Authorization Header:", req.header("Authorization")); // Debugging line

    const token = req.header("Authorization")?.split(" ")[1]; // Extract token

    if (!token) {
        console.log("❌ No token found!");
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        console.log("🔑 Verifying token...");
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        console.log("✅ Token Verified:", decoded);
        req.user = decoded; // Attach user info to request
        next(); // Proceed to next middleware/route
    } catch (error) {
        console.error("❌ Invalid token:", error.message); // Fixed typo here
        return res.status(403).json({ message: "Invalid token." });
    }
};

export default authentication;
