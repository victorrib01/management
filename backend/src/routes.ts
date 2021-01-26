import { Router } from 'express';

import AddressController from './controllers/AddressController';
import CategoryController from './controllers/CategoryController';
import ClientController from './controllers/ClientController';
import OrderController from './controllers/OrderController';
import ItemController from './controllers/ItemController';
import ProductController from './controllers/ProductController';
import StatusController from './controllers/StatusController';


const routes = Router();

//ADDRESS ROUTES
routes.get('/addresses', AddressController.index);
routes.get('/addresses/:id', AddressController.show);
routes.post('/addresses', AddressController.create);
// routes.put('/addresses/:id', AddressController.update)
// routes.delete('/addresses/:id', AddressController.delete)

//CATEGORY ROUTES
routes.get('/categories', CategoryController.index);
routes.get('/categories/:id', CategoryController.show);
routes.post('/categories', CategoryController.create);
// routes.put('/categories/:id', CategoryController.update)
// routes.delete('/categories/:id', CategoryController.delete)

//CLIENT ROUTES
routes.get('/clients', ClientController.index);
routes.get('/clients/:id', ClientController.show);
routes.post('/clients', ClientController.create);
routes.put('/clients/:id', ClientController.update)
routes.delete('/clients/:id', ClientController.delete)

//ORDER ROUTES
routes.get('/orders', OrderController.index);
routes.get('/orders/:id', OrderController.show);
routes.post('/orders', OrderController.create);
// routes.put('/orders/:id', OrderController.update)
// routes.delete('/orders/:id', OrderController.delete)

//ORDERITEM ROUTES
routes.get('/items', ItemController.index);
routes.get('/items/:id', ItemController.show);
routes.post('/items', ItemController.create);
// routes.put('/items/:id', ItemController.update)
// routes.delete('/items/:id', ItemController.delete)

//PRODUCT ROUTES
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.create);
// routes.put('/products/:id', ProductController.update)
// routes.delete('/products/:id', ProductController.delete)

//STATUS ROUTES
routes.get('/status', StatusController.index);
routes.get('/status/:id', StatusController.show);
routes.post('/status', StatusController.create);
// routes.put('/status/:id', StatusController.update)
// routes.delete('/status/:id', StatusController.delete)

export default routes;