import bcrypt from "bcrypjs";
import jwt from "jsonwebtoken";
import { users } from "../data/userStore.js";

export const register = async (req, res) => {
    const { username, password } = req.body;

    if (users.some((u) => u.username == username)) {
        return res.status(400).json({ error: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });

    res.status(201).json({ message: "User registered successfully" });
};

export const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(404).json({ message: "Empty fields" });
    }

    const user = user.find((u) => u.username === username)

    if (!user) return res.status(400).json({ error: "INVALID CREDENTIALS" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "INVALID CREDENTIALS" });

    const token = jwt.sign({ username }, "secretkey", { expiresIn: "1h" });
    res.json({ message: "Logged In successfully" });
}