import { CartsStorageFactory } from "./stores/carts/factory.js";

export class CartRepository {
  constructor(storageType = "file") {
    this.storage = new CartsStorageFactory(storageType).storage();
  }

  getAll() {
    return this.storage.getAll();
  }

  getById(id) {
    return this.storage.getById(id);
  }

  getAllProducts(id) {
    return this.storage.getProducts(id);
  }

  create(cart) {
    return this.storage.create(cart);
  }

  addProduct(cid, pid) {
    return this.storage.addProduct(cid, pid);
  }

  deleteAll() {
    return this.storage.deleteAll();
  }

  deleteById(id) {
    return this.storage.deleteById(id);
  }
}
