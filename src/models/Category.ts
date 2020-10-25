import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany} from "typeorm";
import Product from "./Product";

@Entity('categories')
export default class Category {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: String;

    @OneToMany(() => Product, product => product.category, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'category_id' })
    products: Product[];
}