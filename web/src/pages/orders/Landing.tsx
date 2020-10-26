import React from 'react';
import Logo from '../../components/Logo';

import '../../styles/pages/orders.css'
import CRUD from '../../components/CRUD';

function Orders() {
    return (
        <div id="page-orders">
            <Logo />
            <CRUD title="Pedidos" route="orders" />
        </div>
    )
}

export default Orders;
