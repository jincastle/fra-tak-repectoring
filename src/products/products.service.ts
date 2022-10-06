import { MainCategory, SubCategory } from './products.entity';
import { Product } from 'src/products/products.entity';
import { Injectable, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  @InjectRepository(Product)
  private productsRepository: Repository<Product>;
  private maincategoryRepository: Repository<MainCategory>;
  private subcategoryRepository: Repository<SubCategory>;

  async SubcategoryAll() {
    const result = await this.subcategoryRepository.find({
      relations: ['maincategory'],
    });
    return result;
  }

  async ProductcategoryAll() {
    const result = await this.productsRepository.find({
      relations: ['subcategory', 'maincategory'],
    });
    return result;
  }

  async Product(productId: number) {
    const result = await this.productsRepository.find({
      relations: ['subcategory'],
      where: { id: productId },
    });
    return result;
  }
}
