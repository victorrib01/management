import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import Address from "./Address";
//import Product from './Product';
import Client from './Client';
import Status from "./Status";

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

    @Column()
    created_at: String;
}