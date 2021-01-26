import React from 'react';

import '../../styles/pages/products/landing.css'
import CRUD from '../../components/CRUD';

function Products() {
    return (
        <div id="page-products">
            <CRUD title="Produtos" route="products" />
        </div>
    )
}

export default Products;
