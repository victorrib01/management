import React, { useEffect, useState } from 'react';
import { FaTrash, FaEdit, FaShoppingCart, FaMap } from 'react-icons/fa'
import BackButton from '../../components/BackButton';
// import ClientList from '../../components/ClientList';

import api from '../../services/api'

import '../../styles/pages/clients/list.css'

interface Client {
    id: number
    name: String;
    doc: String;
    phone: String;
    facebook: String;
    instagram: String;
}

function List() {
    const [clients, setClients] = useState<Client[]>([])
    const [open, setOpen] = useState(Boolean);

    useEffect(() => {
        async function loadClients() {
            const response = await api.get('clients');
            setClients(response.data);
        }
        loadClients();
        setOpen(false)
    }, [])

    async function handleDeleteClient(id:any) {
        try{
            await api.delete(`clients/${id}`)

            setClients(clients.filter(client => client.id !== id));
            alert('Cliente deletado com sucesso')
        } catch (err) {
            alert('Erro ao deletar o cliente, tente novamente');
        }
    }
    async function handleEditClient(id:number) {
        setOpen(true)
        try{ 
            // await api.put(`clients/${id}`, { 
            //     params: {
            //         name: name,
            //         doc: doc,
            //         phone: phone,
            //         facebook: facebook,
            //         instagram: instagram
            // }})
            alert(open)
        }catch (err) {
            alert('Erro ao editar o cliente, tente novamente');
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
                                <th>ID:</th>
                                <th>Nome:</th>
                                <th>CPF:</th>
                                <th>Telefone:</th>
                                <th>Facebook:</th>
                                <th>Instagram:</th>
                                <th>Pedidos:</th>
                                <th>Endereços:</th>
                                <th>Editar:</th>
                                <th>Deletar:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map(client => {
                                return (
                                    <tr key={client.id}>
                                        <th>{client.id}</th>
                                        <th>{client.name}</th>
                                        <th>{client.doc}</th>
                                        <th>{client.phone}</th>
                                        <th>{client.facebook}</th>
                                        <th>{client.instagram}</th>
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
                                            <button onClick={()=>handleEditClient(client.id)} type="button">
                                                <FaEdit size={20} color="#1A4A76" />
                                            </button>
                                        </th>
                                        <th>
                                            <button onClick={() => handleDeleteClient(client.id)} type="button">
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