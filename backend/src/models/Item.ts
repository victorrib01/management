import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany, OneToOne, ManyToOne, ManyToMany} from "typeorm";
import Product from './Product';
import Order from './Order';

@Entity('items')
export default class Item {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @ManyToOne(() => Order, order => order.items)
    @JoinColumn({name: 'order_id'})
    order: Order;

    @ManyToOne(() => Product, product => product.items)
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @Column()
    quantity: number;
}