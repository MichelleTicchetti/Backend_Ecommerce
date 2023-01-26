import { ProductsStorageFactory } from "./stores/products/factory.js";

export class ProductRepository {
  constructor(storageType = "file") {
    this.storage = new ProductsStorageFactory(storageType).storage();
  }

  create(product) {
    this.storage.create(product);
  }

  update(id, field, newValue) {
    this.storage.update(id, field, newValue);
  }

  getAll(limit) {
    let products = this.storage.getAll();
    let result = products;

    if (limit) {
      result = products.slice(0, limit);
    }

    return this.storage.getAll();
  }

  getById(id) {
    return this.storage.getById(id);
  }

  deleteById(id) {
    return this.storage.deleteById(id);
  }

  deleteAll() {
    this.storage.deleteAll();
  }
}
