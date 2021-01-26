import React from 'react';
import CRUD from '../../components/CRUD';

import '../../styles/pages/clients/landing.css'

function Landing() {
    return (
        <div id="page-clients">
            <CRUD title="Clientes" route="clients" />
        </div>
    )
}

export default Landing;
