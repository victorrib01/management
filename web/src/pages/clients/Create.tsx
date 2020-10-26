import React from 'react';
import Logo from '../../components/Logo';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'

import '../../styles/pages/clients/create.css'

function Create() {
    return (
        <div id="page-create-clients">
            <Logo />
            <div id="title">
                <h1>Create</h1>
            </div>
            <div id="create-client">
                <div id="card">
                    <form>
                        <fieldset>
                            <legend>Cliente</legend>
                            <div className="input-block">
                                <label htmlFor="name">Nome</label>
                                <input id="name" />
                            </div>
                            <div className="input-block">
                                <label htmlFor="doc">CPF</label>
                                <input id="doc" />
                            </div>
                            <div className="input-block">
                                <label htmlFor="phone">Telefone</label>
                                <input id="phone" />
                            </div>
                            <div className="input-block">
                                <label htmlFor="facebook">Facebook link</label>
                                <input id="facebook" />
                            </div>
                            <div className="input-block">
                                <label htmlFor="instagram">Instagram link</label>
                                <input id="instagram" />
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            <div id='back-button'>
                <Link to="/clients" className="orders-button">
                    <FaArrowLeft size={90} color="#FFF" />
                </Link>
            </div>
        </div>
    )
}

export default Create;