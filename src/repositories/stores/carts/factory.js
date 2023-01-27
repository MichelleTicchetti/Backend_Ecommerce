import { CartsDBStorage } from "./carts_db_storage.js";
import { CartsFileStorage } from "./carts_file_storage.js";

export class CartsStorageFactory {
  constructor(storageType) {
    this.storageType = storageType;
  }

  storage() {
    if (this.storageType == "db") return new CartsDBStorage();
    if (this.storageType == "file")
      return new CartsFileStorage("assets/carts.json");
    throw new Error("el tipo no existe: " + this.storageType);
  }
}
