const express = require("express");
const productController = require("../controller/productController");
const router = express.Router();

// Api Routing end point
// CREATE
router.post("/CreateProduct", productController.CreateProduct);

// READ
router.get("/ReadProduct", productController.ReadProduct);

// Update
router.get("/UpdateProduct", productController.UpdateProduct);

// DELETE
router.get("/DeleteProduct", productController.DeleteProduct);

module.exports=router;