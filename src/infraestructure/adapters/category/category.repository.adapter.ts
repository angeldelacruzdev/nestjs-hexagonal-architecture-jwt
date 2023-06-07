import { Category } from '@/core/domain/entities';
import { CategoryRepository } from '@/core/domain/ports/outbound';
import { CategoryEntity } from '@/infraestructure/northwind-database/entities/category/category.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryRepositoryAdapter implements CategoryRepository {
  constructor(
    @InjectRepository(CategoryEntity)
    private repository: Repository<CategoryEntity>,
  ) {}

  async findById(id: number): Promise<Category> {
    return this.repository.findOneBy({ categoryId: id });
  }

  async findAll(): Promise<Category[]> {
    return this.repository.find();
  }
}
