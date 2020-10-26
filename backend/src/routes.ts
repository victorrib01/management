import { Router } from 'express';

import AddressController from './controllers/AddressController';
import CategoryController from './controllers/CategoryController';
import ClientController from './controllers/ClientController';
import OrderController from './controllers/OrderController';
import OrderItemController from './controllers/OrderItemController';
import ProductController from './controllers/ProductController';
import StatusController from './controllers/StatusController';


const routes = Router();

//ADDRESS ROUTES
routes.get('/address', AddressController.index);
routes.get('/address/:id', AddressController.show);
routes.post('/address', AddressController.create);
// routes.put('/sale/:id', AddressController.update)
// routes.delete('/sale/:id', AddressController.delete)

//CATEGORY ROUTES
routes.get('/category', CategoryController.index);
routes.get('/category/:id', CategoryController.show);
routes.post('/category', CategoryController.create);
// routes.put('/category/:id', CategoryController.update)
// routes.delete('/category/:id', CategoryController.delete)

//CLIENT ROUTES
routes.get('/client', ClientController.index);
routes.get('/client/:id', ClientController.show);
routes.post('/client', ClientController.create);
// routes.put('/client/:id', ClientController.update)
// routes.delete('/client/:id', ClientController.delete)

//ORDER ROUTES
routes.get('/order', OrderController.index);
routes.get('/order/:id', OrderController.show);
routes.post('/order', OrderController.create);
// routes.put('/order/:id', OrderController.update)
// routes.delete('/order/:id', OrderController.delete)

//ORDERITEM ROUTES
routes.get('/item', OrderItemController.index);
routes.get('/item/:id', OrderItemController.show);
routes.post('/item', OrderItemController.create);
// routes.put('/orderitem/:id', OrderController.update)
// routes.delete('/orderitem/:id', OrderController.delete)

//PRODUCT ROUTES
routes.get('/product', ProductController.index);
routes.get('/product/:id', ProductController.show);
routes.post('/product', ProductController.create);
// routes.put('/product/:id', ProductController.update)
// routes.delete('/product/:id', ProductController.delete)

//STATUS ROUTES
routes.get('/status', StatusController.index);
routes.get('/status/:id', StatusController.show);
routes.post('/status', StatusController.create);
// routes.put('/status/:id', StatusController.update)
// routes.delete('/status/:id', StatusController.delete)

export default routes;