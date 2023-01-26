export class Product {
  constructor(id, title, description, code, price, stock, category, thumbnail) {
    if (
      !id ||
      !title ||
      !description ||
      !code ||
      !price ||
      !stock ||
      !category
    ) {
      throw new Error();
    }
    this.id = id;
    this.title = title;
    this.description = description;
    this.code = code;
    this.price = price;
    this.status = true;
    this.stock = stock;
    this.category = category;
    this.thumbnail = thumbnail;
  }
}
