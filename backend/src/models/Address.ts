import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import Client from "./Client";
import Order from "./Order";

@Entity('addresses')
export default class Address {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    street_name: String;

    @Column()
    street_number: String;

    @Column()
    zipcode: String;

    @Column()
    city: String;

    @Column()
    country: String;

    @Column()
    neighborhood: String;

    @ManyToOne(() => Client, client => client.addresses, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'client_id' })
    client: Client;

    @OneToMany(() => Order, order => order.address, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'address_id' })
    orders: Order[];
}