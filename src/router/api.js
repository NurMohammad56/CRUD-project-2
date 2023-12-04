const express = require("express");
const productController = require("../controller/productController");
const router = express.Router();

// Api Routing end point
// CREATE
router.post("/CreateProduct", productController.CreateProduct);

// READ
router.get("/ReadProduct", productController.ReadProduct);

// Update
router.post("/UpdateProduct/:id", productController.UpdateProduct);

// DELETE
router.get("/DeleteProduct/:id", productController.DeleteProduct);

module.exports=router;