require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const servicerRoute = require("./routes/servicer_route.js");
const userRoute = require("./routes/user_route.js");
const issueRoute = require("./controllers/issue_controller.js");

const app = express();
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

const PORT = process.env.PORT || 3000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", (error) => console.error("Connection error:", error));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Connect routes
app.use("/servicer", servicerRoute);
app.use("/user", userRoute);
app.use("/issue", issueRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
