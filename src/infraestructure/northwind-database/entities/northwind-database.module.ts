import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product/poduct.entity';
import { CategoryEntity } from './category/category.entity';
import { SupplierEntity } from './suplier/supplier.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'northwind',
      password: 'northwind',
      database: 'northwind',
      entities: [ProductEntity, CategoryEntity, SupplierEntity],
      synchronize: false,
      logging: ['query'],
    }),
  ],
})
export class NorthwindDatabaseModule {}
