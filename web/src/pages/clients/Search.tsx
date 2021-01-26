import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'


function Search() {
    return (
        <div id="page-clients">
            <div id="title">
                <h1>Search</h1>
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

export default Search;