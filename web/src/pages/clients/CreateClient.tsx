import React, { useState } from 'react';
import BackButton from '../../components/BackButton';

import api from '../../services/api'

import '../../styles/pages/clients/create.css'

interface Client {
    id: number
    name: Name;
    doc: String;
    phone: String;
    facebook: String;
    instagram: String;
}
interface Name {
    name: string
}


function Create() {
    const [clients, setClients] = useState<Client[]>([]);
    const [name, setName] = useState<string>('');
    const [doc, setDoc] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [facebook, setFacebook] = useState<string>('');
    const [instagram, setInstagram] = useState<string>('');

    async function handleAddClient(e: any) {
        //console.log(clie
        e.preventDefault();
        const data = {
            name,
            doc,
            phone,
            facebook,
            instagram
        }
        const response = await api.post('/clients', data)
        setClients([...clients, response.data])
    }
    return (
        <div id="page-create-clients">
            <div id="create-card">
                <div id="title">
                    <h1>Criar cliente</h1>
                </div>
                <div id="create-form">
                    <form onSubmit={handleAddClient}>
                        <div className="input-block">
                            <label htmlFor="name">Nome</label>
                            <input 
                                id="name"
                                name="name"
                                required
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className="input-block">
                            <label htmlFor="doc">CPF</label>
                            <input 
                                id="doc"
                                name="doc"
                                required
                                value={doc}
                                onChange={e => setDoc(e.target.value)}
                            />
                        </div>
                        <div className="input-block">
                            <label htmlFor="phone">Telefone</label>
                            <input 
                                id="phone" 
                                name="phone"
                                required
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="input-block">
                            <label htmlFor="facebook">Facebook link</label>
                            <input 
                                id="facebook"
                                name="facebook"
                                required
                                value={facebook}
                                onChange={e => setFacebook(e.target.value)}
                            />
                        </div>
                        <div className="input-block">
                            <label htmlFor="instagram">Instagram link</label>
                            <input 
                                id="instagram"
                                name="instagram"
                                required
                                value={instagram}
                                onChange={e => setInstagram(e.target.value)}
                            />
                        </div>
                        <div className="confirm-button">
                            <button type="submit">Confirmar</button>
                        </div>
                    </form>
                </div>
                <BackButton to="clients"/>
            </div>
        </div >
    )
}

export default Create;