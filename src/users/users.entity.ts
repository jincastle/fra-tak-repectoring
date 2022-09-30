import { Product } from 'src/products/products.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 32 })
  name: string;

  @Column('varchar', { unique: true })
  email: string;

  @Column('varchar')
  password: string;

  @Column('varchar')
  address: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Review, (review) => review.user)
  review: Review[];
}

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('varchar')
  content: string;

  @ManyToOne(() => User, (user) => user)
  @JoinColumn([{ name: 'user' }])
  user: User;

  @ManyToOne(() => Product, (product) => product)
  @JoinColumn([{ name: 'product' }])
  product: Product;
}
