import express from "express";
import cors from "cors";
import alertRoutes from "./routes/alertRoutes.js";
import { logger } from "./middleware/logger.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/alerts", alertRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message || "Something went wrong"
  });
});

export default app;
