const categoryRepository = require("../infrastructure/db/categoryRepository");
const productRepository = require("../infrastructure/db/productRepository");

const saveProduct = async (productRequest) => {
  const category = await categoryRepository.findCategory({
    name: productRequest.category,
  });

  if (category === null) {
    throw { error: "Category not found" };
  }

  const product = await productRepository.create(productRequest, category);
  return product;
};

module.exports = { saveProduct };
