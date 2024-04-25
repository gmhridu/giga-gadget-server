const MyProduct = require("../models/myProduct.model");


// Get single product details by user email
const getSingleProduct = async (req, res) => {
  try {
    const email = req.params.email;
    const result = await MyProduct.find({email: email})
    res.status(200).json(result)
  }
  catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {getSingleProduct}