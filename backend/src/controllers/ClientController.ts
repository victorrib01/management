import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Client from '../models/Client'

export default {

    async index(req: Request, res: Response) {
        const clientsRepository = getRepository(Client);

        const clients = await clientsRepository.find({
            relations: [
                'orders',
                'addresses',
                'order_items'
            ]
        });

        return res.json(clients)
    },

    async show(req: Request, res: Response) {
        const { id } = req.params;

        const clientsRepository = getRepository(Client);

        const client = await clientsRepository.findOneOrFail(id);

        return res.json(client)
    },

    async create(req: Request, res: Response) {
        const {
            name,
            doc,
            phone,
            facebook,
            instagram
        } = req.body;

        const clientsRepository = getRepository(Client);

        const data = {
            name,
            doc,
            phone,
            facebook,
            instagram
        }

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            doc: Yup.string().required(),
            phone: Yup.string().required(),
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const client = clientsRepository.create(data);

        await clientsRepository.save(client);

        return res.status(201).json(client);
    }
}