import { ProductApplication } from "@/core/application/product/ProductApplication";
import { Controller, UseFilters, Inject, Post, Body } from "@nestjs/common";
import { ProductCreatorFilter } from "../exception-filters";
import { CreateProductRequest, AppResponse } from "../model";

@Controller('/product')
@UseFilters(ProductCreatorFilter)
export class ProductController {
  constructor(
    @Inject(PRODUCT_APPLICATION) private application: ProductApplication,
  ) {}

  @Post()
  async createProduct(
    @Body() request: CreateProductRequest,
  ): Promise<AppResponse> {
    AppLogger.log(`(POST) Create product`, request);
    const productId = await this.application.createProduct(request);

    return {
      status: 201,
      message: `Product(id=${productId}) created OK`,
    };
  }
}
