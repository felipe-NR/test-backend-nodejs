const sinon = require("sinon");
const createProductService = require("../../src/application/createProductService");
const categoryRepository = require("../../src/infrastructure/db/categoryRepository");
const productRepository = require("../../src/infrastructure/db/productRepository");
const assert = require("assert").strict;
describe("createProductService", function () {
  describe("saveProduct", function () {
    afterEach(function () {
      sinon.restore();
    });
    it("should return 'category not found error' when 'category is null' ", function () {
      const findCategoryStub = sinon.stub(categoryRepository, "findCategory");

      findCategoryStub.returns(Promise.resolve(null));

      try {
        createProductService.saveProduct({
          title: "Computer",
          description: "A nice Computer",
          price: 10.9,
          category: "CategoryNull",
        });
      } catch (error) {
        assert.deepStrictEqual({ error: "Category not found" }, error);
      }
    });

    // it("should return created produt when category is found  ", async function () {
    //   const category = { name: "Category" };
    //   const findCategoryStub = sinon.stub(categoryRepository, "findCategory");

    //   findCategoryStub.returns(Promise.resolve(category));

    //   const productRequest = {
    //     title: "Computer",
    //     description: "A nice Computer",
    //     price: 10.9,
    //     category: "Category",
    //   };

    //   const createProductStub = sinon.stub(productRepository, "create");
    //   createProductStub
    //     .withArgs(productRequest, category)
    //     .returns(Promise.resolve(productRequest));

    //   const createdProduct = await createProductService.saveProduct();

    //   assert.deepStrictEqual(productRequest, createdProduct);
    // });
  });
});
