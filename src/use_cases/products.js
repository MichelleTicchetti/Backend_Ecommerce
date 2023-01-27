import { ProductFactory } from "../factories/product_factory.js";
import { ProductRepository } from "../repositories/product_repository.js";

export class ProductsUseCases {
  getAll() {
    return new ProductRepository().getAll();
  }

  getById(id) {
    return new ProductRepository().getById(id);
  }

  async create(title, description, code, price, stock, category, thumbnail) {
    const products = await this.getAll();

    let idNewProduct = 1;

    if (products.length >= 1) {
      let indexLastProduct = products.length - 1;
      let idLastProduct = products[indexLastProduct].id;
      idNewProduct = idLastProduct + 1;
    }

    const newProduct = {
      id: idNewProduct,
      title: title,
      description: description,
      code: code,
      price: price,
      stock: stock,
      category: category,
      thumbnail: thumbnail,
    };

    const product = new ProductFactory().create(
      newProduct.id,
      newProduct.title,
      newProduct.description,
      newProduct.code,
      newProduct.price,
      newProduct.stock,
      newProduct.category,
      newProduct.thumbnail
    );
    const responseRepo = new ProductRepository();
    await responseRepo.create(product);
    return product;
  }

  async update(id, newContent) {
    const responseRepo = new ProductRepository().update(id, newContent);
    return responseRepo;
  }

  async deleteById(id) {
    const responseRepo = new ProductRepository();
    return await responseRepo.deleteById(id);
  }

  async deleteAll() {
    const responseRepo = new ProductRepository();
    await responseRepo.deleteAll();
  }
}
