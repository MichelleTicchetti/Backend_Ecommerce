import { ProductsUseCases } from "../use_cases/products.js";

export const getProducts = async (req, res, next) => {
  console.log("ejecución caso de uso: listar productos");

  try {
    const responseRepo = await new ProductsUseCases().getAll();
    res.status(200).json(responseRepo);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const getProductById = async (req, res, next) => {
  console.log("ejecución caso de uso: buscar producto por id ");

  const { id } = req.params;

  try {
    const responseObject = await new ProductsUseCases().getById(parseInt(id));
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const createProduct = async (req, res, next) => {
  console.log("ejecución caso de uso: crear producto");

  const {
    id,
    title,
    descripton,
    code,
    price,
    status,
    stock,
    category,
    thumbnail,
  } = req.body;

  try {
    const responseObject = await new ProductsUseCases().create(
      id,
      title,
      descripton,
      code,
      price,
      status,
      stock,
      category,
      thumbnail
    );
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const updateProduct = async (req, res, next) => {
  console.log("ejecución caso de uso: actualizar producto");

  const { id, field, newValue } = req.body;

  try {
    const responseObject = await new ProductsUseCases().update(
      id,
      field,
      newValue
    );
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const deleteProductById = async (req, res, next) => {
  console.log("ejecución caso de uso: borrar producto por id");

  const { id } = req.body;

  try {
    const responseObject = await new ProductsUseCases().deleteById(id);
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const deleteAllProducts = async (req, res, next) => {
  console.log("ejecución caso de uso: borrar todos los productos");

  try {
    const responseObject = await new ProductsUseCases().deleteAll();
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
