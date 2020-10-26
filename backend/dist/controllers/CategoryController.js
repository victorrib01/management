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
const Category_1 = __importDefault(require("../models/Category"));
exports.default = {
    async index(req, res) {
        const categoryRepository = typeorm_1.getRepository(Category_1.default);
        const categories = await categoryRepository.find({
            relations: ['products']
        });
        return res.json(categories);
    },
    async show(req, res) {
        const { id } = req.params;
        const categoryRepository = typeorm_1.getRepository(Category_1.default);
        const category = await categoryRepository.findOneOrFail(id);
        return res.json(category);
    },
    async create(req, res) {
        const { name } = req.body;
        const categoryRepository = typeorm_1.getRepository(Category_1.default);
        const data = {
            name
        };
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
};
