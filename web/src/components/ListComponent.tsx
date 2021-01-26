import React, { useEffect, useState } from 'react';
import { FaTrash, FaEdit, FaShoppingCart, FaMap } from 'react-icons/fa'
import BackButton from './BackButton';

import api from '../services/api'


interface Content {
    id: number
}

function List(props: { route: any; columns: any[] }) {
    const [content, setContent] = useState<Content[]>([])

    useEffect(() => {
        async function loadContent() {
            const response = await api.get(`${props.route}`);
            setContent(response.data);
            console.log(content)
        }
        loadContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function handleDelete(id: any) {
        try {
            await api.delete(`${props.route}/${id}`)

            setContent(content.filter(content => content.id !== id));
            alert('Cliente deletado com sucesso')
        } catch (err) {
            alert('Erro ao deletar o cliente, tente novamente');
        }
    }
    async function handleEdit(id: number) {
        try {
            // await api.put(`clients/${id}`, { 
            //     params: {
            //         name: name,
            //         doc: doc,
            //         phone: phone,
            //         facebook: facebook,
            //         instagram: instagram
            // }})
            alert('open')
        } catch (err) {
            alert(`Erro ao editar o ${props.route}, tente novamente`);
        }
    }

    return (
        <div id="page-list-clients">
            <div id="list-card">
                <div id="title">
                    <h1>Listar todos</h1>
                </div>
                <div id="search-box">
                    <form action="">
                        <input type="text" id="search" name="search"></input>
                        <button>procurar</button>
                    </form>
                </div>
                <div id="list-box">
                    <table>
                        <thead>
                            <tr>
                                {props.columns.map(column => {
                                    return (
                                        <th key={column.name}>{column.name}:</th>
                                    )
                                })
                                }
                                <th>Pedidos:</th>
                                <th>Endereços:</th>
                                <th>Editar:</th>
                                <th>Deletar:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {content.map(content => {
                                return (
                                    <tr key={content.id}>
                                        {props.columns.map(column => {
                                            return (
                                                <th key={column.name}>
                                                    
                                                </th>
                                            )
                                        })
                                        }
                                        <th>
                                            <button>
                                                <FaShoppingCart size={20} color="#1A4A76" />
                                            </button>
                                        </th>
                                        <th>
                                            <button>
                                                <FaMap size={20} color="#1A4A76" />
                                            </button>
                                        </th>
                                        <th>
                                            <button onClick={() => handleEdit(content.id)} type="button">
                                                <FaEdit size={20} color="#1A4A76" />
                                            </button>
                                        </th>
                                        <th>
                                            <button onClick={() => handleDelete(content.id)} type="button">
                                                <FaTrash size={20} color="red" />
                                            </button>
                                        </th>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <BackButton to="clients" />
            </div>
        </div >
    )
}

export default List;