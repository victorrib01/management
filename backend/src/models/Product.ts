import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, OneToOne, ManyToMany } from "typeorm";
import Category from './Category';
import Item from './Item';

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

    @OneToMany(() => Item, item => item.product, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'product_id' })
    items: Item[];


    @Column()
    stock: number
}