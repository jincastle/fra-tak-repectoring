import { ProductsService } from './products.service';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
  private readonly productsService: ProductsService;
  @ApiOperation({ summary: '서브카테고리목록' })
  @Get('subcategory')
  async subcategoryAll() {
    return await this.productsService.SubcategoryAll();
  }

  @ApiOperation({ summary: '카테고리별 제품 목록' })
  @Get('')
  async productcategory() {
    return await this.productsService.ProductcategoryAll();
  }

  @ApiOperation({ summary: '제품 정보' })
  @Get(':id')
  async product(@Param() productId: number) {
    return await this.productsService.Product(productId);
  }
}
