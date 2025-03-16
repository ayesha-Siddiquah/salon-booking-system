import jwt from "jsonwebtoken";

const authentication = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Extract token

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    req.user = decoded; // Attach user info to request
    next(); // Proceed to next middleware/route
  } catch (error) {
    res.status(403).json({ message: "Invalid token." });
  }
};

export default authentication;
