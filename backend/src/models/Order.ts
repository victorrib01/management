import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import Address from './Address';
import Client from './Client';
import Status from './Status';
import Item from './Item'

@Entity('orders')
export default class Order {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    amount: number;

    @ManyToOne(() => Status, status => status.orders)
    @JoinColumn({name: 'status_id'})
    status: Status;
    
    @ManyToOne(()=> Client, client => client.orders)
    @JoinColumn({name: 'client_id'})
    client : Client;

    @ManyToOne(() => Address, address => address.orders)
    @JoinColumn({name: 'address_id'})
    address: Address;

    @OneToMany(() => Item, item => item.order, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'order_id' })
    items: Item[];

    @Column()
    created_at: String;
}