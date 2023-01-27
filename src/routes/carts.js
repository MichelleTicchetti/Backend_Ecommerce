import express from "express";
import {
  getCarts,
  createCart,
  getProductsCartId,
  addProductCartId,
} from "../controllers/carts_controller.js";

const router = express.Router();

router.get("", getCarts);
router.post("", createCart);
router.get("/:cid", getProductsCartId);
router.post("/:cid/product/:pid", addProductCartId);

export default router;
