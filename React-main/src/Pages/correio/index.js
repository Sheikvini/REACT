import { useState } from 'react';
import './index.scss';
import { Link} from 'react-router-dom';
import axios from 'axios';

export default function Correio(){

    const[cep,setCEP] = useState('');
    const [info,setInfo] = useState('');

    async function buscar(){
      let url='https://viacep.com.br/ws/' + cep + '/json/';
      let resposta = await axios.get(url);

      setInfo(` ${resposta.data.logradouro}, ${resposta.data.bairro}`);
      setCEP('');
    }

   
    function teclaPressionada(e){
      if(e.key == 'Enter')
      buscar();
    }

    return(
      
        <div className="pagina-correio">
        <div className='container'>
          <h1> Correio </h1>
          <div>
            CEP: <input type='text' value={cep} onKeyUp={teclaPressionada} onChange={e => setCEP(e.target.value)} />
            <button onClick={buscar}  > Adicionar </button>
          </div>
          <div>
            <ul>
             {info}
            </ul>
            
          </div>
          
        </div>
  
        <Link className='voltar' to='/'> Voltar para Menu </Link>
      </div>
    )
}