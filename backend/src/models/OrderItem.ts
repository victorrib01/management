import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany, OneToOne} from "typeorm";
import Product from './Product';
import Order from './Order';

@Entity('orders_items')
export default class OrderDetail {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @OneToOne(() => Order, order => order.id, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'order_id'})
    order : Order;

    @OneToMany(()=> Product, product => product.id)
    @JoinColumn({name: 'product_id'})
    product: Product;

    @Column()
    quantity: number;
}