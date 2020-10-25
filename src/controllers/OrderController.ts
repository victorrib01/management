import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Order from '../models/Order'

export default {

    async index(req: Request, res: Response) {
        const productsRepository = getRepository(Order);

        const orders = await productsRepository.find({
            relations: ['orders']
        });

        return res.json(orders)
    },

    async show(req: Request, res: Response) {
        const { id } = req.params;

        const productsRepository = getRepository(Order);

        const order = await productsRepository.findOneOrFail(id);

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

        const productsRepository = getRepository(Order);

        const data = {
            amount,
            status_id,
            client_id,
            address_id,
            created_at
        }

        const schema = Yup.object().shape({
            amount: Yup.number().required(),
            status_id: Yup.number().required(),
            client_id: Yup.number().required(),
            address_id: Yup.number().required(),
            created_at: Yup.string().required(),
        });

        await schema.validate(data, {
            abortEarly:false,
        });

        const order = productsRepository.create(data);

        await productsRepository.save(order);

        return res.status(201).json(order);
    }
}