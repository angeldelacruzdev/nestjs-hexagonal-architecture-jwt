import { Category } from '../entities';
import { CategoryService } from '../ports/inbound';
import { CategoryRepository } from '../ports/outbound';

export class CategoryDomainService implements CategoryService {
  constructor(private repository: CategoryRepository) {}

  findById(id: number): Promise<Category> {
    return this.repository.findById(id);
  }

  findAll(): Promise<Category[]> {
    return this.repository.findAll();
  }
}
