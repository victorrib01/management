import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Client from '../models/Client'

const PAGINATION = {
    per_page: 5
}

export default {

    async index(req: Request, res: Response) {
        const clientsRepository = getRepository(Client);
        const { page = 0 } = req.query;

        const clients = await clientsRepository.find({
            relations: [
                'orders',
                'addresses'
            ],
            take: PAGINATION.per_page,
            skip: PAGINATION.per_page * <number>page,
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
    },

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const clientsRepository = getRepository(Client);

        const client = await clientsRepository.delete(id);

        return res.status(204).json(client);
    },

    async update ( req: Request, res: Response ) {
        const { id } = req.params;

        const { name, doc, phone, facebook, instagram } = req.query;


        const clientsRepository = getRepository(Client);

        const client = await clientsRepository.update(id, {
            name:<string> name, 
            doc:<string> doc,
            phone:<string> phone,
            facebook:<string> facebook,
            instagram:<string> instagram,
        })

        return res.json(client);
    }
}