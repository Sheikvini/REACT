import './index.scss';
import { useState } from 'react';
import axios from 'axios';





export default function Netflix() {

    const [filme, setFilme] = useState('');
    const [listafilme, setListafilme] = useState([]);



    async function buscar() {
        let url = `http://www.omdbapi.com?apikey=7619b256&s=${filme}`;
        let busca = await axios.get(url);
        setListafilme(busca.data.Search);
    }

    function teclaEnter(e) {
        if (e.key == 'Enter')
            buscar();
    }

    return (
        <div className='netflix'>
            <div className='sessao'>
                <header>
                    <div>
                        <img src="/assets/images/logo.png"></img>
                        <h1>Portifolio.me</h1>
                        <h2>Inicio</h2>
                        <h2>Séries</h2>
                        <h2>Filmes</h2>
                        <h2>Bombando</h2>
                        <h2>Minha Lista</h2>
                    </div>

                    <div>
                        <nav>
                            <div>
                                <input placeholder='  Pesquise pelo Título' type='text' value={filme} onKeyUp={teclaEnter} onChange={e => setFilme(e.target.value)}></input>
                                <button onClick={buscar}>
                                    <img src='/assets/images/icon-buscar.png'></img>
                                </button>
                            </div>
                            <h3>Bruno</h3>
                            <img src='/assets/images/umm.png'></img>
                            <img src='/assets/images/doiss.png'></img>
                            <img src='/assets/images/tress.png'></img>
                        </nav>

                    </div>

                </header>

                <aside>
                    <h1>Friends</h1>
                    <p>Seis jovens são unidos por laços familiares, românticos e, principalmente, de amizade, enquanto tentam vingar em Nova York.</p>
                    <button>Assistir</button>
                </aside>
            </div>

            <div className='filmes'>
                <table>
                    <thead>
                        <tr>
                            <th className='title'>Resultado da Busca</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listafilme.map(item =>
                            <tr>
                                <img className='filme' src={item.Poster}></img>
                            </tr>

                        )}
                    </tbody>
                </table>
            </div>

        </div>

    )


}

