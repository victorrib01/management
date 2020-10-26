import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany} from "typeorm";
import Order from "./Order";

@Entity('status')
export default class Status {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    label: String;

    @Column()
    value: number;

    @OneToMany(() => Order, order => order.status, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'category_id' })
    orders: Order[];
}