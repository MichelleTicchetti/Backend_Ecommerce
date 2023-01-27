import { Cart } from "../models/cart.js";

export class CartFactory {
  constructor() {}

  create(id) {
    if (!id) {
      throw new Error("Faltan atributos para la creación de un producto");
    } else {
      return new Cart(id);
    }
  }
}
