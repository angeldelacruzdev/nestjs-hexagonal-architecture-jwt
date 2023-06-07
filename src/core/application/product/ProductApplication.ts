export interface ProductApplication {
  createProduct(newProduct: any): Promise<number>;
}
