import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import Category from './Category';

@Entity('products')
export default class Product {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @ManyToOne(()=> Category, category => category.products)
    @JoinColumn({name: 'category_id'})
    category: Category;

    @Column()
    stock: number
}