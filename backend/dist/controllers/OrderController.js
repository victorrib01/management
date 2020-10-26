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
const Order_1 = __importDefault(require("../models/Order"));
const Status_1 = __importDefault(require("../models/Status"));
exports.default = {
    async index(req, res) {
        const ordersRepository = typeorm_1.getRepository(Order_1.default);
        const orders = await ordersRepository.find();
        return res.json(orders);
    },
    async show(req, res) {
        const { id } = req.params;
        const ordersRepository = typeorm_1.getRepository(Order_1.default);
        const order = await ordersRepository.findOneOrFail(id);
        return res.json(order);
    },
    async create(req, res) {
        const { amount, status_id, client_id, address_id, created_at } = req.body;
        console.log(req.body);
        const ordersRepository = typeorm_1.getRepository(Order_1.default);
        const statusRepository = typeorm_1.getRepository(Status_1.default);
        const clientsRepository = typeorm_1.getRepository(Client_1.default);
        const addressRepository = typeorm_1.getRepository(Address_1.default);
        const status = await statusRepository.findOneOrFail(status_id);
        const client = await clientsRepository.findOneOrFail(client_id);
        const address = await addressRepository.findOneOrFail(address_id);
        const data = {
            amount,
            status,
            client,
            address,
            created_at,
        };
        const schema = Yup.object().shape({
            amount: Yup.number().required(),
            created_at: Yup.string().required(),
        });
        await schema.validate(data, {
            abortEarly: false,
        });
        const order = ordersRepository.create(data);
        await ordersRepository.save(order);
        return res.status(201).json(order);
    }
};
