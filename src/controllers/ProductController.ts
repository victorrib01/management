import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Product from '../models/Product'
import Category from '../models/Category'

export default {

    async index(req: Request, res: Response) {
        const productsRepository = getRepository(Product);

        const products = await productsRepository.find({
            relations: ['orders']
        });

        return res.json(products)
    },

    async show(req: Request, res: Response) {
        const { id } = req.params;

        const productsRepository = getRepository(Product);

        const product = await productsRepository.findOneOrFail(id);

        return res.json(product)
    },

    async create(req: Request, res: Response) {
        const {
            name,
            price,
            category_id,
            stock
        } = req.body;

        const productsRepository = getRepository(Product);

        const categoryRepository = getRepository(Category);

        const category = await categoryRepository.findOneOrFail(category_id)

        const data = {
            name,
            price,
            category,
            stock
        }

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            price: Yup.number().min(0).required(),
            stock: Yup.number().required(),
        });

        await schema.validate(data, {
            abortEarly:false,
        });

        const product = productsRepository.create(data);

        await productsRepository.save(product);

        return res.status(201).json(product);
    }
}