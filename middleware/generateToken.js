import jwt from "jsonwebtoken";

const user = {
    id: "65f22a9c91e4e8b34a6d7b12",
    email: "test@example.com",
    role: "customer",
};

const secretKey = process.env.JWT_SECRET;

const token = jwt.sign(user, secretKey, { expiresIn: "1h" });

console.log("Generated Token:", token);
