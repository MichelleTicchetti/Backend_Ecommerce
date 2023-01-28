export class Cart {
  constructor(id) {
    if (!id) {
      throw new Error();
    }
    this.id = id;
    this.subtotal = 0;
    this.total = this.subtotal;
    this.fechaCreacion = Date();
    this.fechaModificacion = null;
    this.products = [];
  }
}
