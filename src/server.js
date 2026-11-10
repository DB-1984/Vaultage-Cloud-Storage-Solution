import express from "express";
import cors from "cors";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";

// Routes
import fileRoutes from "./routes/fileRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import storageRoutes from "./routes/storageRoutes.js";
import folderRoutes from "./routes/folderRoutes.js";
import { errorHandler } from "./utils/errorHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// 1. MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// 2. STATIC SERVING
app.use(express.static(process.cwd()));

// 3. PAGE ROUTES
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "ui/statusTemplate.html"));
});

// 4. API ROUTES
app.use("/auth", authRoutes);
app.use("/folders", folderRoutes);
app.use("/files", fileRoutes);
app.use("/storage", storageRoutes);

// 5. ERROR HANDLING (Must be last)
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🚀 Vaultage POC listening on ${port}`));
