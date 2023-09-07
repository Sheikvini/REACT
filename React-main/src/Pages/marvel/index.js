import './index.scss';
import React, { useState } from 'react';
import axios from 'axios';
import Herois from '../../components/herois';

export default function Marvel() {
    const [nome, setNome] = useState('');
    const [personagens, setPersonagens] = useState([]);
    const [url, setUrl] = useState(`https://gateway.marvel.com/v1/public/characters?apikey=535828891c55a880303abb2e03d43138&ts=1&hash=957dea90f2a427c187c3625d8ebc055f&name=`)

    async function buscar() {

        let response = await axios.get(url + nome);
        let personagem = response.data.data.results[0]
        let listaPersonagens = {
            nome: personagem.name,
            imagem: `${personagem.thumbnail.path}.jpg`,
            desc: personagem.description
        };
        setPersonagens([...personagens, listaPersonagens])
        setNome('')

    }

    function teclaEnter(e) {
        if (e.key === 'Enter') {
            buscar();
        }
    }

    return (
        <div className='marvel'>
            <header>
                <div>
                    <img src='/assets/images/logo-marvel.png' alt='Marvel Logo' />
                </div>
                <div>
                    <p>Home</p>
                    <p>Personagens</p>
                    <p>Quadrinhos</p>
                    <p>Eventos</p>
                    <p>Contato</p>
                    <img src='/assets/images/m.png' alt='M' />
                </div>
            </header>
            <nav>
                <div>
                    <h1>Personagens da MARVEL</h1>
                </div>
                <div className='aside'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum augue ut ligula
                        malesuada blandit. Quisque tempor ex quis congue malesuada. Pellentesque est eros, aliquam non
                        malesuada et, molestie ut purus.
                    </p>
                    <div>
                        <button onClick={buscar}>
                            <img src='/assets/images/icon-buscar.png' alt='Buscar' />
                        </button>
                        <input
                            placeholder='Nome do Personagem'
                            type='text'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            onKeyUp={teclaEnter}
                        />
                    </div>
                </div>
            </nav>
            <footer>
                <div className='herois'>
                    {personagens.map((personagem, index) => (
                        <Herois key={index}
                            nome={personagem.nome}
                            imagem={personagem.imagem}
                            desc={personagem.desc} />
                    ))}
                </div>
            </footer>
        </div>
    );
}
