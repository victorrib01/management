import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToOne, OneToMany } from "typeorm";
import Address from "./Address";
//import Product from './Product';
import Client from './Client';
import OrderItem from './OrderItem'
import Status from "./Status";

@Entity('orders')
export default class Order {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    amount: number;

    @OneToMany(() => Status, status => status.order)
    @JoinColumn({name: 'status_id'})
    status: Status;
    
    @ManyToOne(()=> Client, client => client.orders)
    @JoinColumn({name: 'client_id'})
    client : Client;

    @OneToMany(() => Address, address => address.id)
    @JoinColumn({name: 'address_id'})
    address: Address;

    @Column()
    created_at: String;

}