const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ success: true, message: "Task Management API is running" });
});

app.use("/api/tasks", taskRoutes);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
