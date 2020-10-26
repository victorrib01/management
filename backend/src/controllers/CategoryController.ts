import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Category from '../models/Category'

export default {

    async index(req: Request, res: Response) {
        const categoryRepository = getRepository(Category);

        const categories = await categoryRepository.find({
            relations: ['products']
        });

        return res.json(categories)
    },

    async show(req: Request, res: Response) {
        const { id } = req.params;

        const categoryRepository = getRepository(Category);

        const category = await categoryRepository.findOneOrFail(id);

        return res.json(category)
    },

    async create(req: Request, res: Response) {
        const {
            name
        } = req.body;

        const categoryRepository = getRepository(Category);

        const data = {
            name
        }

        const schema = Yup.object().shape({
            name: Yup.string().required(),
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const category = categoryRepository.create(data);

        await categoryRepository.save(category);

        return res.status(201).json(category);
    }
}