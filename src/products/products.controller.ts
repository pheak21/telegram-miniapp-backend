import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  findAll() {
    return [
      { id: 1, name: 'T-shirt', price: 20 },
      { id: 2, name: 'Sneakers', price: 50 },
      { id: 3, name: 'Cap', price: 10 },
    ];
  }
}
