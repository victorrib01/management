import React from 'react';
import Logo from '../../components/Logo';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'


function Delete() {
    return (
        <div id="page-clients">
            <Logo />
            <div id="title">
                <h1>Delete</h1>
            </div>
            <div id="clients-dashboard">
                Working in progress...
            </div>
            <div id='back-button'>
                <Link to="/clients" className="orders-button">
                    <FaArrowLeft size={90} color="#FFF" />
                </Link>
            </div>
        </div>
    )
}

export default Delete;