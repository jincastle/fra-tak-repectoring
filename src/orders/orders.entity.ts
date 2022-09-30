import { Product } from 'src/products/products.entity';
import { User } from 'src/users/users.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  count: number;

  @ManyToOne(() => Product, (product) => product)
  @JoinColumn([{ name: 'product' }])
  product: Product;

  @ManyToOne(() => User, (user) => user)
  @JoinColumn([{ name: 'user' }])
  user: User;
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

@Entity()
export class OrderStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  count: number;

  @Column()
  tracking_number: string;

  @Column()
  address: string;
}

@Entity()
export class OrderItemStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: number;
}
