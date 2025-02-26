import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";

// Load variabel lingkungan dari .env
dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Mengizinkan akses dari semua domain
app.use(express.json()); // Agar bisa menerima request body JSON
app.use(cookieParser()); //allows us to parse incoming cookies

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.status(200).send(`Selamat pagi. ✅ Server berjalan di http://localhost:${PORT}`);
});

app.use("/api/auth", authRoutes)

// Menjalankan server
app.listen(PORT, () => {
    connectDB()
    console.log(`✅ Server berjalan di http://localhost:${PORT}`);
});

