import { ProductsDBStorage } from "./products_db_storage.js";
import { ProductsFileStorage } from "./products_file_storage.js";

export class ProductsStorageFactory {
  constructor(storageType) {
    this.storageType = storageType;
  }

  storage() {
    if (this.storageType == "db") return new ProductsDBStorage();
    if (this.storageType == "file")
      return new ProductsFileStorage("assets/products.json");
    throw new Error("el tipo no existe: " + this.storageType);
  }
}
