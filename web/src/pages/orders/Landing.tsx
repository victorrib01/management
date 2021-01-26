import React from 'react';

import '../../styles/pages/orders/landing.css'
import CRUD from '../../components/CRUD';

function Orders() {
    return (
        <div id="page-orders">
            <CRUD title="Pedidos" route="orders" />
        </div>
    )
}

export default Orders;
