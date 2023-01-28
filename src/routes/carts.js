import express from "express";
import {
  getCarts,
  createCart,
  getProductsCartId,
  addProductCartId,
  deleteCartById,
  deleteAllCarts,
  getCartById,
} from "../controllers/carts_controller.js";

const router = express.Router();

router.get("", getCarts);
router.get("/:cid", getCartById);
router.post("", createCart);
router.get("/:cid", getProductsCartId);
router.post("/:cid/product/:pid", addProductCartId);
router.delete("/:cid", deleteCartById);
router.delete("/", deleteAllCarts);

export default router;
