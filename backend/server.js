import express from "express";
import cors from "cors";
import "dotenv/config";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

if (!process.env.PORT) {
  console.error("Error: PORT environment variable is not set.");
  process.exit(1);
}

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
  res.json({
    app: "e-commerce-backend",
    port: PORT,
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Backend is healthy" });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
