import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import Address from '../models/Address';
import Client from '../models/Client';

import Order from '../models/Order'
import Status from '../models/Status';
import StatusController from './StatusController';

export default {

    async index(req: Request, res: Response) {
        const ordersRepository = getRepository(Order);

        const orders = await ordersRepository.find({
            relations: [
                'address',
                'client',
                'status',
                'items'
            ]
        });

        return res.json(orders)
    },

    async show(req: Request, res: Response) {
        const { id } = req.params;

        const ordersRepository = getRepository(Order);

        const order = await ordersRepository.findOneOrFail(id, {
            relations: [
                'address',
                'client',
                'status'
            ]
        });

        return res.json(order)
    },

    async create(req: Request, res: Response) {
        const {
            amount,
            status_id,
            client_id,
            address_id,
            created_at
        } = req.body;

        console.log(req.body)

        const ordersRepository = getRepository(Order);

        const statusRepository = getRepository(Status);
        const clientsRepository = getRepository(Client);
        const addressRepository = getRepository(Address);

        const status = await statusRepository.findOneOrFail(status_id);
        const client = await clientsRepository.findOneOrFail(client_id);
        const address = await addressRepository.findOneOrFail(address_id);

        const data = {
            amount,
            status,
            client,
            address,
            created_at,
        }

        // console.log("status",status);
        console.log("client", client);
        console.log("address", address);


        const schema = Yup.object().shape({
            amount: Yup.number().required(),
            created_at: Yup.string().required(),
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const order = ordersRepository.create(data);

        await ordersRepository.save(order);

        return res.status(201).json(order);
    }
}