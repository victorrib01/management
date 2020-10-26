import React from 'react';
import CRUD from '../../components/CRUD';
import Logo from '../../components/Logo';

import '../../styles/pages/clients/landing.css'

function Clients() {
    return (
        <div id="page-clients">
            <Logo />
            <CRUD title="Clientes" route="clients" />
        </div>
    )
}

export default Clients;
