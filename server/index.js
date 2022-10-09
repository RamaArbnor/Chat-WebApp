const express = require("express");
const cors = require("cors");
require('dotenv').config

const app = express();
app.use((express.json()))
app.use(cors())

app.get("/", (req, res) => {
   res.send("This is home page.");
});

app.post("/", (req, res) => {
   res.send("This is home page with post request.");
});

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});