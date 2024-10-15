const express = require("express");
const app = express();
const port = 8000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Hello, Node.js Backend!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
