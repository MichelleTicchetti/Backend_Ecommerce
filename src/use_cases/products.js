import { ProductFactory } from "../factories/product_factory.js";
import { ProductRepository } from "../repositories/product_repository.js";

export class ProductsUseCases {
  getAll() {
    return new ProductRepository().getAll();
  }

  getById(id) {
    return new ProductRepository().getById(id);
  }

  async create(
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
    const product = new ProductFactory().create(
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
    const responseRepo = new ProductRepository();
    await responseRepo.create(product);
  }

  async update(id, field, newValue) {
    return new ProductRepository().update(id, field, newValue);
  }

  async deleteById(id) {
    const responseRepo = new ProductRepository();
    await responseRepo.deleteById(id);
  }

  async deleteAll() {
    const responseRepo = new ProductRepository();
    await responseRepo.deleteAll();
  }
}
