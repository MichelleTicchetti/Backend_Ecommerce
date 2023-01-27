import { CartsStorageFactory } from "./stores/carts/factory.js";

export class CartRepository {
  constructor(storageType = "file") {
    this.storage = new CartsStorageFactory(storageType).storage();
  }

  getAll() {
    return this.storage.getAll();
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
}
