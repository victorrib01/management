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
const Client_1 = __importDefault(require("../models/Client"));
exports.default = {
    async index(req, res) {
        const clientsRepository = typeorm_1.getRepository(Client_1.default);
        const clients = await clientsRepository.find();
        return res.json(clients);
    },
    async show(req, res) {
        const { id } = req.params;
        const clientsRepository = typeorm_1.getRepository(Client_1.default);
        const client = await clientsRepository.findOneOrFail(id);
        return res.json(client);
    },
    async create(req, res) {
        const { name, doc, phone, facebook, instagram } = req.body;
        const clientsRepository = typeorm_1.getRepository(Client_1.default);
        const data = {
            name,
            doc,
            phone,
            facebook,
            instagram
        };
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
};
