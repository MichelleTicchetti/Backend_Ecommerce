import fs from "fs";
import { ProductRepository } from "../../product_repository.js";

export class CartsFileStorage {
  constructor(path) {
    this.path = path;
  }

  async getAll() {
    try {
      const data = await fs.promises.readFile(`${this.path}`, "utf-8");
      const carts = JSON.parse(data);
      return carts;
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id) {
    try {
      const data = await fs.promises.readFile(`${this.path}`, "utf-8");
      const carts = JSON.parse(data);
      const cart = carts.find((cart) => cart.id === id);

      if (cart) {
        return cart;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getAllProducts(id) {
    try {
      const cart = await this.getById(id);
      if (cart) {
        return cart.products;
      } else {
        return "Cart wasn't found";
      }
    } catch (error) {
      console.log(error);
    }
  }

  async create(cart) {
    try {
      const data = await fs.promises.readFile(`${this.path}`, "utf-8");
      const carts = JSON.parse(data);
      carts.push(cart);
      await fs.promises.writeFile(`${this.path}`, JSON.stringify(carts));
      return carts;
    } catch (error) {
      console.log(error);
    }
  }

  async addProduct(cid, pid) {
    try {
      const cart = await this.getById(parseInt(cid));
      const productToAdd = await new ProductRepository().getById(parseInt(pid));

      if (cart.products.length > 0) {
        const productInCart = cart.products.find(
          (product) => product.idProduct === parseInt(pid)
        );

        if (productInCart) {
          const index = cart.products.findIndex(
            (product) => product.idProduct === productToAdd.id
          );
          cart.products[index] = {
            idProduct: productToAdd.id,
            quantity: (cart.products[index].quantity += 1),
          };
        } else {
          const newProduct = {
            idProduct: productToAdd.id,
            quantity: 1,
          };
          cart.products.push(newProduct);
        }
      } else {
        const newProduct = {
          idProduct: productToAdd.id,
          quantity: 1,
        };
        cart.products.push(newProduct);
      }
      const updatedCart = {
        subtotal: cart.subtotal + productToAdd.price,
        total: cart.total,
        fechaCreacion: cart.fechaCreacion,
        fechaModificacion: Date(),
        products: cart.products,
      };

      this.update(cart.id, updatedCart);
      return updatedCart;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id, newContent) {
    try {
      const carts = await this.getAll();
      const index = carts.findIndex((obj) => obj.id === parseInt(id));

      if (index >= 0) {
        const updatedCart = { ...carts[index], ...newContent };
        carts[index] = updatedCart;
        await fs.promises.writeFile(`./${this.path}`, JSON.stringify(carts));
        return updatedCart;
      } else {
        return "Cart to update wasn't found";
      }
    } catch (error) {
      console.log(error);
    }
  }
}
