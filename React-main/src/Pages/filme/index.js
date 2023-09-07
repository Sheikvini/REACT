import { useState } from 'react';
import './index.scss';
import axios from 'axios';


function Filme() {
  const [filme,setFilme] = useState()
  const [filmes,setFilmes] = useState([])

  async function Buscar() {
    let url = 'https://www.omdbapi.com/?apikey=37e41b24&s=' + filme

    let response = await axios.get(url)
    setFilmes(response.data.Search)
  }

  return (
    <>
      <div className='mae'> 
      <header>
                <img src='/assets/images/logo.svg' />
                <h1>Portifolio.me</h1>
            </header>

        <section className='conteudo'>
          <div className='box'>
            <div className='box-top-side'>
              <h1>IMDB</h1>
            </div>

            <div className='box-bottom-side'>
              <h1>Consulta de Filmes</h1>
              <div className='label-input'>
                <label>Nome</label>
                <input type='text' placeholder='Rush Hour' value={filme} onChange={e => setFilme(e.target.value)}/>
                <img src='/icon-buscar.png' onClick={Buscar}/>
              </div>
             
              <div className='results-table'>
                <table>
                  <tr>
                    <th className='idh'>ID</th>
                    <th className='tituloh'>Titulo</th>
                    <th className='anoh'>Ano</th>
                  </tr>
                    {filmes.map(item => (
                      <tr>
                        <td className='id'> {item.imdbID} </td>
                        <td className='titulo'> {item.Title} </td>
                        <td className='ano'> {item.Year} </td>
                      </tr>
                    ))}
                    
                </table>
              </div>

              <div className='pages'>
                
              </div>
            </div>
          </div>
        </section>
      </div>
    
    </>
  );
}

export default Filme;
