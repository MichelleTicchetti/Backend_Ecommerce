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
router.get("/:pid", getProductById);
router.post("", createProduct);
router.put("/:pid", updateProduct);
router.delete("/:pid", deleteProductById);
router.delete("/", deleteAllProducts);

export default router;
