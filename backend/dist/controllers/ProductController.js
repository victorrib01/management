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
const Product_1 = __importDefault(require("../models/Product"));
const Category_1 = __importDefault(require("../models/Category"));
exports.default = {
    async index(req, res) {
        const productsRepository = typeorm_1.getRepository(Product_1.default);
        const products = await productsRepository.find({
            relations: ['orders']
        });
        return res.json(products);
    },
    async show(req, res) {
        const { id } = req.params;
        const productsRepository = typeorm_1.getRepository(Product_1.default);
        const product = await productsRepository.findOneOrFail(id);
        return res.json(product);
    },
    async create(req, res) {
        const { name, price, category_id, stock } = req.body;
        const productsRepository = typeorm_1.getRepository(Product_1.default);
        const categoryRepository = typeorm_1.getRepository(Category_1.default);
        const category = await categoryRepository.findOneOrFail(category_id);
        const data = {
            name,
            price,
            category,
            stock
        };
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            price: Yup.number().min(0).required(),
            stock: Yup.number().required(),
        });
        await schema.validate(data, {
            abortEarly: false,
        });
        const product = productsRepository.create(data);
        await productsRepository.save(product);
        return res.status(201).json(product);
    }
};
