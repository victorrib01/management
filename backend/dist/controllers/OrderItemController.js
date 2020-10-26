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
const OrderItem_1 = __importDefault(require("../models/OrderItem"));
exports.default = {
    async index(req, res) {
        const order_itemRepository = typeorm_1.getRepository(OrderItem_1.default);
        const order_items = await order_itemRepository.find();
        return res.json(order_items);
    },
    async show(req, res) {
        const { id } = req.params;
        const order_itemRepository = typeorm_1.getRepository(OrderItem_1.default);
        const order_item = await order_itemRepository.findOneOrFail(id);
        return res.json(order_item);
    },
    async create(req, res) {
        const { order_id, product_id, quantity } = req.body;
        const order_itemRepository = typeorm_1.getRepository(OrderItem_1.default);
        const data = {
            order_id,
            product_id,
            quantity
        };
        const schema = Yup.object().shape({
            order_id: Yup.number().required(),
            product_id: Yup.number().required(),
            quantity: Yup.number().required(),
        });
        await schema.validate(data, {
            abortEarly: false,
        });
        const order_item = order_itemRepository.create(data);
        await order_itemRepository.save(order_item);
        return res.status(201).json(order_item);
    }
};
