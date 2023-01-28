import { CartsServices } from "../services/carts.js";

export const getCarts = async (req, res, next) => {
  console.log("ejecución caso de uso: listar carritos");
  try {
    const responseObject = await new CartsServices().getAll();
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const getCartById = async (req, res, next) => {
  console.log("ejecución caso de uso: buscar carrito por id ");

  const { cid } = req.params;

  try {
    const responseObject = await new CartsServices().getById(parseInt(cid));
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const getProductsCartId = async (req, res, next) => {
  console.log("ejecución caso de uso: listar productos de carrito");

  const { cid } = req.params;

  try {
    const responseObject = await new CartsServices().getProducts(parseInt(cid));
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const createCart = async (req, res, next) => {
  console.log("ejecución caso de uso: crear carrito");

  try {
    const responseObject = await new CartsServices().create();
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const addProductCartId = async (req, res, next) => {
  console.log("ejecución caso de uso: agregar producto a carrito");

  const { cid, pid } = req.params;

  try {
    const responseObject = await new CartsServices().addProduct(cid, pid);
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const deleteCartById = async (req, res, next) => {
  console.log("ejecución caso de uso: borrar carrito por id");

  const { cid } = req.params;

  try {
    const responseObject = await new CartsServices().deleteById(parseInt(cid));
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const deleteAllCarts = async (req, res, next) => {
  console.log("ejecución caso de uso: borrar todos los carritos");

  try {
    const responseObject = await new CartsServices().deleteAll();
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
