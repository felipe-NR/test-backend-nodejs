require("dotenv").config();
require("./src/config");
const express = require("express");
const bodyParser = require("body-parser");
const createProductService = require("./src/application/createProductService");
const createCategoryService = require("./src/application/createCategoriesService");
const ProductRepository = require("./src/infrastructure/db/productRepository");

const app = express();
app.use(bodyParser.json());

app
  .route("/api/products")

  .get(async (req, res) => {
    try {
      res.send(await ProductRepository.findAll());
    } catch (error) {
      res.status(500).send(error);
    }
  })

  .post(async (req, res) => {
    try {
      const createdProduct = await createProductService.saveProduct({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
      });
      res.send(createdProduct);
    } catch (error) {
      res.status(500).send(error);
    }
  });

app
  .route("/api/categories")

  .post(async (req, res) => {
    try {
      const createdCategory = await createCategoryService.saveCategory({
        name: req.body.name,
      });
      res.send(createdCategory);
    } catch (error) {
      res.status(500).send(error);
    }
  });

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
