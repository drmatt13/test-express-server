const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "*" }));

// GET route for the main page
app.get("/", (req, res) => {
  res.json({ success: true, message: "Hello World" });
});

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ success: true, message: "Health check passed" });
});

// Start the server
app.listen(80, () => {
  console.log("Server is running on port 80");
});
