import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from './orders.controller';
import {
  Cart,
  Order,
  OrderItem,
  OrderItemStatus,
  OrderStatus,
} from './orders.entity';
import { OrdersService } from './orders.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Cart,
      Order,
      OrderStatus,
      OrderItem,
      OrderItemStatus,
    ]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
