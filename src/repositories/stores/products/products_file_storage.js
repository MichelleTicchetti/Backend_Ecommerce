import fs from "fs";

export class ProductsFileStorage {
  constructor(path) {
    this.path = path;
  }

  async getAll() {
    try {
      const data = await fs.promises.readFile(`${this.path}`, "utf-8");
      const products = JSON.parse(data);
      return products;
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id) {
    try {
      const data = await fs.promises.readFile(`${this.path}`, "utf-8");
      const products = JSON.parse(data);
      const product = products.find((product) => product.id === id);

      if (product) {
        return product;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async create(product) {
    try {
      const data = await fs.promises.readFile(`${this.path}`, "utf-8");
      const products = JSON.parse(data);
      products.push(product);
      await fs.promises.writeFile(`${this.path}`, JSON.stringify(products));
      return products;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id, newContent) {
    try {
      const products = await this.getAll();
      const index = products.findIndex((obj) => obj.id === parseInt(id));

      if (index >= 0) {
        const updatedProduct = { ...products[index], ...newContent };
        products[index] = updatedProduct;
        await fs.promises.writeFile(`./${this.path}`, JSON.stringify(products));
        return updatedProduct;
      } else {
        return "Product to update wasn't found";
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deleteById(id) {
    try {
      const data = await fs.promises.readFile(`${this.path}`, "utf-8");
      const products = JSON.parse(data);
      const newProductsList = products.filter((product) => product.id !== id);
      await fs.promises.writeFile(
        `./${this.path}`,
        JSON.stringify(newProductsList)
      );
      return newProductsList;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteAll() {
    try {
      await fs.promises.writeFile(`${this.path}`, "[]");
    } catch (error) {
      console.log(error);
    }
  }
}
