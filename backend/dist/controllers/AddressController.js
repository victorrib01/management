"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Yup = __importStar(require("yup"));
const Address_1 = __importDefault(require("../models/Address"));
const Client_1 = __importDefault(require("../models/Client"));
exports.default = {
    async index(req, res) {
        const addressRepository = typeorm_1.getRepository(Address_1.default);
        const addresses = await addressRepository.find({
            relations: ['client']
        });
        return res.json(addresses);
    },
    async show(req, res) {
        const { id } = req.params;
        const addressRepository = typeorm_1.getRepository(Address_1.default);
        const address = await addressRepository.findOneOrFail(id);
        return res.json(address);
    },
    async create(req, res) {
        const { street_name, street_number, zipcode, city, country, neighborhood, client_id } = req.body;
        const addressRepository = typeorm_1.getRepository(Address_1.default);
        const clientRepository = typeorm_1.getRepository(Client_1.default);
        const client = await clientRepository.findOneOrFail(client_id);
        const data = {
            street_name,
            street_number,
            zipcode,
            city,
            country,
            neighborhood,
            client
        };
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
};
