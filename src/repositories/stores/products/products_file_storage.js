import fs from "fs";

export class ProductsFileStorage {
  constructor(path) {
    this.path = path;
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

  async update(id, field, newValue) {
    try {
      const products = await this.getProducts();
      const targetProduct = await this.getProductById(id);
      //buscar la key que se va a modificar (field) y asignarle el nuevo valor

      //nuevo producto actualizado
      const productUpdated = { ...targetProduct, ...content };

      if (targetProduct) {
        const updatedList = products.map((obj) => {
          if (obj.id === productUpdated.id) {
            return productUpdated;
          } else {
            return obj;
          }
        });
        await fs.promises.writeFile(
          `${this.path}`,
          JSON.stringify(updatedList)
        );
        return updatedList;
      }
    } catch (error) {
      console.log(error);
    }
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
      await fs.promises.writeFile(`${this.path}`, []);
    } catch (error) {
      console.log(error);
    }
  }
}
