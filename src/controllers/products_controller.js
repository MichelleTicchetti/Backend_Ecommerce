import { ProductsUseCases } from "../use_cases/products.js";

// http://localhost:8080/api/products?limit=1
export const getProducts = async (req, res, next) => {
  console.log("ejecución caso de uso: listar productos");

  const limit = req.query.limit;

  try {
    const responseRepo = await new ProductsUseCases().getAll();
    let result = responseRepo;

    if (limit) {
      result = responseRepo.slice(0, limit);
    }

    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const getProductById = async (req, res, next) => {
  console.log("ejecución caso de uso: buscar producto por id ");

  const { pid } = req.params;

  try {
    const responseObject = await new ProductsUseCases().getById(parseInt(pid));
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const createProduct = async (req, res, next) => {
  console.log("ejecución caso de uso: crear producto");

  const { title, description, code, price, stock, category, thumbnail } =
    req.body;

  try {
    const responseObject = await new ProductsUseCases().create(
      title,
      description,
      code,
      price,
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

  const { pid } = req.params;
  const { title, description, code, price, stock, category, thumbnail } =
    req.body;
  try {
    const newContent = {
      title,
      description,
      code,
      price,
      stock,
      category,
      thumbnail,
    };
    const responseObject = await new ProductsUseCases().update(pid, newContent);
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const deleteProductById = async (req, res, next) => {
  console.log("ejecución caso de uso: borrar producto por id");

  const { pid } = req.params;

  try {
    const responseObject = await new ProductsUseCases().deleteById(
      parseInt(pid)
    );
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
