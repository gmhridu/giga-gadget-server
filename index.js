const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const addProductRouter = require('./routes/addProduct.route');
const ConnectDB = require('./db/db');

dotenv.config();
const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGODB_URI;

const app = express();
ConnectDB(mongoUri);

// middleware
app.use(cors());
app.use(express.json());


// routes
app.use('/addProducts', addProductRouter)

app.use("*", (req, res) => {
  res.status(404).json({ error: "Not found" });
})


app.listen(port, () => {
  console.log(`SIMPLE CRUD IS RUNNING ON PORT, ${port}`);
});

