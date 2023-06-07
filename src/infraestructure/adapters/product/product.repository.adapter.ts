import { Product } from '@/core/domain/entities';
import { ProductRepository } from '@/core/domain/ports/outbound';
import { ProductEntity } from '@/infraestructure/northwind-database/entities/product/poduct.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductRepositoryAdapter implements ProductRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private repository: Repository<ProductEntity>,
  ) {}

  async save(product: Product) {
    return this.repository.save(product);
  }
}
