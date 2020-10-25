import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import Address from "./Address";
import Order from './Order';


@Entity('clients')
export default class Client {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: String;

    @Column()
    doc: String;

    @Column()
    phone: string;

    @Column()
    facebook: string

    @Column()
    instagram: string

    @OneToMany(() => Order, order => order.client, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'client_id' })
    orders: Order[];

    @OneToMany(() => Address, address => address.client, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'client_id'})
    addresses: Address[];
}