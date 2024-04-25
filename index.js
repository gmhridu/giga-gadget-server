const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const addProductRouter = require('./routes/addProduct.route');
const ConnectDB = require('./db/db');
const myProductRouter = require('./routes/myProduct.route');

dotenv.config();
const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGODB_URI;

const app = express();
ConnectDB(mongoUri);

// middleware
app.use(cors());
app.use(express.json());


// routes
app.use('/addProducts', addProductRouter);
app.use('/myproducts', myProductRouter);

app.use("*", (req, res) => {
  res.status(404).json({ error: "Not found" });
})


app.listen(port, () => {
  console.log(`SIMPLE CRUD IS RUNNING ON PORT, ${port}`);
});

process.on("unhandledRejection", (error, promise) => {
  console.log(`Error: ${error.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});

