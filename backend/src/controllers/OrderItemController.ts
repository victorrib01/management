import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import Order from '../models/Order';

import OrderItem from '../models/OrderItem'
import Product from '../models/Product';

export default {

    async index(req: Request, res: Response) {
        const order_itemRepository = getRepository(OrderItem);

        const order_items = await order_itemRepository.find();

        return res.json(order_items)
    },

    async show(req: Request, res: Response) {
        const { id } = req.params;

        const order_itemRepository = getRepository(OrderItem);

        const order_item = await order_itemRepository.findOneOrFail(id);

        return res.json(order_item)
    },

    async create(req: Request, res: Response) {
        const {
            order_id,
            product_id,
            quantity
        } = req.body;

        const order_itemRepository = getRepository(OrderItem);
        const productRepository = getRepository(Product);
        const orderRepository = getRepository(Order);

        const product = await productRepository.findOneOrFail(product_id);
        const order = await orderRepository.findOneOrFail(order_id);

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

        const order_item = order_itemRepository.create(data);

        await order_itemRepository.save(order_item);

        return res.status(201).json(order_item);
    }
}