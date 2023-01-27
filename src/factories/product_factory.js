import { Product } from "../models/product.js";

export class ProductFactory {
  constructor() {}

  create(id, title, description, code, price, stock, category, thumbnail) {
    if (
      !id ||
      !title ||
      !description ||
      !code ||
      !price ||
      !stock ||
      !category
    ) {
      throw new Error("Faltan atributos para la creación de un producto");
    } else {
      return new Product(
        id,
        title,
        description,
        code,
        price,
        stock,
        category,
        thumbnail
      );
    }
  }
}
