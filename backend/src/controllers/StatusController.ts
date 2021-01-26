import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Status from '../models/Status'

export default {

    async index(req: Request, res: Response) {
        const statusRepository = getRepository(Status);

        const status = await statusRepository.find({
            relations: ['orders']
        });

        return res.json(status)
    },

    async show(req: Request, res: Response) {
        const { id } = req.params;

        const statusRepository = getRepository(Status);

        const status = await statusRepository.findOneOrFail(id);

        return res.json(status)
    },

    async create(req: Request, res: Response) {
        const {
            label,
            value,
        } = req.body;

        const statusRepository = getRepository(Status);

        const data = {
            label,
            value,
        }

        const schema = Yup.object().shape({
            label: Yup.string().required(),
            value: Yup.number().min(0).required(),
        });

        await schema.validate(data, {
            abortEarly:false,
        });

        const status = statusRepository.create(data);

        await statusRepository.save(status);

        return res.status(201).json(status);
    }
}