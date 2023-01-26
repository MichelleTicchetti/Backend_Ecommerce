import { Product } from "../models/product.js";

export class ProductFactory {
  constructor() {}

  create(
    id,
    title,
    descripton,
    code,
    price,
    status,
    stock,
    category,
    thumbnail
  ) {
    if (
      !id ||
      !title ||
      !descripton ||
      !code ||
      !price ||
      !status ||
      !stock ||
      !category
    ) {
      throw new Error("Faltan atributos para la creación de un producto");
    } else {
      return new Product(
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
    }
  }
}
