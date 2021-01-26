import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import Order from '../models/Order';

import Item from '../models/Item'
import Product from '../models/Product';

export default {

    async index(req: Request, res: Response) {
        const itemRepository = getRepository(Item);

        const items = await itemRepository.find({
            relations: ['order','product']
        });

        return res.json(items)
    },

    async show(req: Request, res: Response) {
        const { id } = req.params;

        const itemRepository = getRepository(Item);

        const item = await itemRepository.findOneOrFail(id);

        return res.json(item)
    },

    async create(req: Request, res: Response) {
        const {
            order_id,
            product_id,
            quantity
        } = req.body;

        const itemRepository = getRepository(Item);
        
        const productsRepository = getRepository(Product);
        const ordersRepository = getRepository(Order);

        const product = await productsRepository.findOneOrFail(product_id);
        const order = await ordersRepository.findOneOrFail(order_id);

        console.log(product)
        console.log(order)

        const data = {
            order,
            product,
            quantity
        }

        const schema = Yup.object().shape({
            quantity: Yup.number().required(),
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const item = itemRepository.create(data);

        await itemRepository.save(item);

        return res.status(201).json(item);
    }
}