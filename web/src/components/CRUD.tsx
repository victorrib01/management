import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaListAlt, FaSearch } from 'react-icons/fa'

import '../styles/components/crud.css'
import BackButton from './BackButton';


interface CRUDProps {
    title: String
    route: String
    //items: CRUDItem[]
}

// interface CRUDItem {
//     label: string
//     action: String
//     icon: String
// }

const CRUD: FunctionComponent<CRUDProps> = ({ title, route }) => {
    return (
        <div id="component-crud">
            <div id="title">
                <h1>{title}</h1>
            </div>
            <div id="crud-dashboard">
                <div id="button">
                    <Link to={`/${route}/create`}>
                        <FaPlus size={90} color="#1A4A76" />
                    </Link>
                        Adicionar
                    </div>
                <div id="button">
                    <Link to={`/${route}/list`} >
                        <FaListAlt size={90} color="#1A4A76" />
                    </Link>
                        Ver todos
                    </div>
                <div id="button">
                    <Link to={`/${route}/search`} >
                        <FaSearch size={90} color="#1A4A76" />
                    </Link>
                        Pesquisar
                    </div>
            </div>
            <BackButton to="" />
        </div>
    )
}

export default CRUD;
