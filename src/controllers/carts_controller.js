import { CartsUseCases } from "../use_cases/carts.js";

export const getCarts = async (req, res, next) => {
  console.log("ejecución caso de uso: listar carritos");
  try {
    const responseObject = await new CartsUseCases().getAll();
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const getProductsCartId = async (req, res, next) => {
  console.log("ejecución caso de uso: listar productos de carrito");

  const { cid } = req.params;

  try {
    const responseObject = await new CartsUseCases().getProducts(parseInt(cid));
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const createCart = async (req, res, next) => {
  console.log("ejecución caso de uso: crear carrito");

  try {
    const responseObject = await new CartsUseCases().create();
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const addProductCartId = async (req, res, next) => {
  console.log("ejecución caso de uso: agregar producto a carrito");

  const { cid, pid } = req.params;

  try {
    const responseObject = await new CartsUseCases().addProduct(cid, pid);
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
