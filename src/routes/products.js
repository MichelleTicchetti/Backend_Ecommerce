import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProductById,
  deleteAllProducts,
} from "../controllers/products_controller.js";

const router = express.Router();

router.get("", getProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProductById);
router.delete("/", deleteAllProducts);

export default router;
