import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaShoppingCart, FaListAlt } from 'react-icons/fa'

import '../styles/pages/home.css'

function Home() {
    return (
        <div id="page-home">
            <div id="home-dashboard">
                <div id="button">
                    <Link to="/clients" className="clients-button">
                        <FaUsers size={90} color="#1A4A76" />
                    </Link>
                    Clientes
                </div>
                <div id="button">
                    <Link to="/orders" className="orders-button">
                        <FaShoppingCart size={90} color="#1A4A76" />
                    </Link>
                    Pedidos
                </div>
                <div id="button">
                    <Link to="/products" className="products-button">
                        <FaListAlt size={90} color="#1A4A76" />
                    </Link>
                    Produtos
                </div>
            </div>
        </div>
    )
}

export default Home;