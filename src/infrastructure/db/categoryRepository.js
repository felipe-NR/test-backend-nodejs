const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, index: { unique: true } },
});

const Category = mongoose.model("Category", categorySchema);

class CategoryRepository {
  async create(newCategory) {
    let categoryCreated = new Category({
      name: newCategory.name,
    });
    return await categoryCreated.save();
  }

  async findCategory(filterValues) {
    return await Category.findOne(filterValues).exec();
  }
}

module.exports = new CategoryRepository();
