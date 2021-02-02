const categoryRepository = require("../infrastructure/db/categoryRepository");

const saveCategory = async (categoryRequest) => {
  const category = await categoryRepository.create(categoryRequest);
  return category;
};

module.exports = { saveCategory };
