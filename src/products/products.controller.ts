import { ProductsService } from './products.service';
import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
  private readonly productsService: ProductsService;
  @ApiOperation({ summary: '서브카테고리목록' })
  @Get('subcategory')
  async subcategoryAll() {
    return await this.productsService.SubcategoryAll();
  }
}
