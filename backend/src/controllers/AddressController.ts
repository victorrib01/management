import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Address from '../models/Address'
import Client from '../models/Client'

export default {

    async index(req: Request, res: Response) {
        const addressRepository = getRepository(Address);

        const addresses = await addressRepository.find({
            relations: ['client']
        });

        return res.json(addresses)
    },

    async show(req: Request, res: Response) {
        const { id } = req.params;

        const addressRepository = getRepository(Address);

        const address = await addressRepository.findOneOrFail(id);

        return res.json(address)
    },

    async create(req: Request, res: Response) {
        const {
            street_name,
            street_number,
            zipcode,
            city,
            country,
            neighborhood,
            client_id
        } = req.body;

        const addressRepository = getRepository(Address);

        const clientRepository = getRepository(Client);

        const client = await clientRepository.findOneOrFail(client_id);

        const data = {
            street_name,
            street_number,
            zipcode,
            city,
            country,
            neighborhood,
            client
        }

        const schema = Yup.object().shape({
            street_name: Yup.string().required(),
            street_number: Yup.string().required(),
            zipcode: Yup.string().required(),
            city: Yup.string().required(),
            country: Yup.string().required(),
            neighborhood: Yup.string().required(),
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const address = addressRepository.create(data);

        await addressRepository.save(address);

        return res.status(201).json(address);
    }
}