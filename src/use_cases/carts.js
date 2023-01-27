import { CartFactory } from "../factories/cart_factory.js";
import { CartRepository } from "../repositories/cart_repository.js";

export class CartsUseCases {
  getAll() {
    return new CartRepository().getAll();
  }

  getProducts(id) {
    return new CartRepository().getAllProducts(id);
  }

  async create() {
    const carts = await this.getAll();

    let idNewCart = 1;

    if (carts.length >= 1) {
      let indexLastCart = carts.length - 1;
      let idLastCart = carts[indexLastCart].id;
      idNewCart = idLastCart + 1;
    }

    const newCart = {
      id: idNewCart,
    };

    const cart = new CartFactory().create(newCart.id);
    const responseRepo = new CartRepository();
    await responseRepo.create(cart);
    return cart;
  }

  async addProduct(cid, pid) {
    const responseRepo = new CartRepository().addProduct(cid, pid);
    return responseRepo;
  }
}
