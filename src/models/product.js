export class Product {
  constructor(
    id,
    title,
    descripton,
    code,
    price,
    status,
    stock,
    category,
    thumbnail
  ) {
    if (
      !id ||
      !title ||
      !descripton ||
      !code ||
      !price ||
      !status ||
      !stock ||
      !category
    ) {
      throw new Error();
    }
    this.id = id;
    this.title = title;
    this.descripton = descripton;
    this.code = code;
    this.price = price;
    this.status = status;
    this.stock = stock;
    this.category = category;
    this.thumbnail = thumbnail;
  }
}
