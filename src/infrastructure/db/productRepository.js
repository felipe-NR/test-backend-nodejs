const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  price: { type: Number, required: true }, // saving as cents.
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
    trim: true,
  },
});

const Product = mongoose.model("Product", productSchema);

class ProductRepository {
  async create(newProduct, category) {
    let productCreated = new Product({
      title: newProduct.title,
      description: newProduct.description,
      price: newProduct.price,
      category: category,
    });
    return await productCreated.save();
  }

  async findAll() {
    return await Product.find({});
  }
}

module.exports = new ProductRepository();
