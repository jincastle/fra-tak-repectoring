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
export class MainCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;
}

@Entity()
export class SubCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  kr_name: string;

  @Column('varchar')
  en_name: string;

  @Column('varchar')
  thumbnail_url: string;

  @ManyToOne(() => MainCategory, (maincategory) => maincategory)
  @JoinColumn([{ name: 'maincategory' }])
  maincategory: MainCategory;
}

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  kr_name: string;

  @Column('varchar')
  en_name: string;

  @Column('varchar')
  price: string;

  @Column('varchar')
  sub_category: string;

  @Column('varchar')
  title: string;

  @Column('varchar')
  rating: string;

  @Column('varchar')
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => SubCategory, (subcategory) => subcategory)
  @JoinColumn([{ name: 'subcategory' }])
  subcategory: SubCategory;
}

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  url: string;

  @ManyToOne(() => Product, (product) => product)
  @JoinColumn([{ name: 'product' }])
  product: Product;
}

@Entity()
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product)
  @JoinColumn([{ name: 'product' }])
  product: Product;

  @ManyToOne(() => User, (user) => user)
  @JoinColumn([{ name: 'user' }])
  user: User;
}
