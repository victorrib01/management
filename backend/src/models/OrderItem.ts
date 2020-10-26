import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany, OneToOne, ManyToOne} from "typeorm";
import Product from './Product';
import Order from './Order';

@Entity('orders_items')
export default class OrderDetail {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @ManyToOne(() => Order, order => order.order_items, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'order_item_id'})
    order : Order;

    @OneToMany(()=> Product, product => product.id)
    @JoinColumn({name: 'product_id'})
    product: Product;

    @Column()
    quantity: number;
}