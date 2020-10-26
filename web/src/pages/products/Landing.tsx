import React from 'react';
import Logo from '../../components/Logo';

import '../../styles/pages/products.css'
import CRUD from '../../components/CRUD';

function Products() {
    return (
        <div id="page-products">
            <Logo />
            <CRUD title="Produtos" route="products" />
        </div>
    )
}

export default Products;
