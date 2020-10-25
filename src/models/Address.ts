import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany, ManyToOne} from "typeorm";
import Client from "./Client";

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
}