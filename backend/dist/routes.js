"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AddressController_1 = __importDefault(require("./controllers/AddressController"));
const CategoryController_1 = __importDefault(require("./controllers/CategoryController"));
const ClientController_1 = __importDefault(require("./controllers/ClientController"));
const OrderController_1 = __importDefault(require("./controllers/OrderController"));
const ProductController_1 = __importDefault(require("./controllers/ProductController"));
const StatusController_1 = __importDefault(require("./controllers/StatusController"));
const routes = express_1.Router();
//ADDRESS ROUTES
routes.get('/address', AddressController_1.default.index);
routes.get('/address/:id', AddressController_1.default.show);
routes.post('/address', AddressController_1.default.create);
// routes.put('/sale/:id', AddressController.update)
// routes.delete('/sale/:id', AddressController.delete)
//CATEGORY ROUTES
routes.get('/category', CategoryController_1.default.index);
routes.get('/category/:id', CategoryController_1.default.show);
routes.post('/category', CategoryController_1.default.create);
// routes.put('/category/:id', CategoryController.update)
// routes.delete('/category/:id', CategoryController.delete)
//CLIENT ROUTES
routes.get('/client', ClientController_1.default.index);
routes.get('/client/:id', ClientController_1.default.show);
routes.post('/client', ClientController_1.default.create);
// routes.put('/client/:id', ClientController.update)
// routes.delete('/client/:id', ClientController.delete)
//ORDER ROUTES
routes.get('/order', OrderController_1.default.index);
routes.get('/order/:id', OrderController_1.default.show);
routes.post('/order', OrderController_1.default.create);
// routes.put('/order/:id', OrderController.update)
// routes.delete('/order/:id', OrderController.delete)
//ORDERITEM ROUTES
routes.get('/item', OrderController_1.default.index);
routes.get('/item/:id', OrderController_1.default.show);
routes.post('/item', OrderController_1.default.create);
// routes.put('/orderitem/:id', OrderController.update)
// routes.delete('/orderitem/:id', OrderController.delete)
//PRODUCT ROUTES
routes.get('/product', ProductController_1.default.index);
routes.get('/product/:id', ProductController_1.default.show);
routes.post('/product', ProductController_1.default.create);
// routes.put('/product/:id', ProductController.update)
// routes.delete('/product/:id', ProductController.delete)
//STATUS ROUTES
routes.get('/status', StatusController_1.default.index);
routes.get('/status/:id', StatusController_1.default.show);
routes.post('/status', StatusController_1.default.create);
// routes.put('/status/:id', StatusController.update)
// routes.delete('/status/:id', StatusController.delete)
exports.default = routes;
