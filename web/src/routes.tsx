import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

//Clients
import Clients from './pages/clients/Landing'
import ClientsCreate from './pages/clients/CreateClient'
import ClientsList from './pages/clients/List'
import ClientsSearch from './pages/clients/Search'

import Orders from './pages/orders/Landing';
import OrdersList from './pages/orders/List';

import Products from './pages/products/Landing';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                {/* CLIENTS ROUTES */}
                <Route path="/clients" exact component={Clients} />
                <Route path="/clients/create" exact component={ClientsCreate} />
                <Route path="/clients/list" exact component={ClientsList} />
                <Route path="/clients/search" exact component={ClientsSearch} />

                {/* ORDERS ROUTES */}
                <Route path="/orders" exact component={Orders} />
                {/* <Route path="/orders/create" exact component={OrdersCreate} /> */}
                <Route path="/orders/list" exact component={OrdersList} />
                {/* <Route path="/orders/search" exact component={OrdersSearch} /> */}
                {/* <Route path="/orders/delete" exact component={OrdersDelete} /> */}

                {/* PRODUCTS ROUTES */}
                <Route path="/products" exact component={Products} />
                {/* <Route path="/products/create" exact component={ProductsCreate} />
                <Route path="/products/list" exact component={ProductsList} />
                <Route path="/products/search" exact component={ProductsSearch} />
                <Route path="/products/delete" exact component={ProductsDelete} /> */}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;