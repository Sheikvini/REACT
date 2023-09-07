import { useState } from 'react';
import './index.scss';
import { Link} from 'react-router-dom';

export default function Tarefas(){

    const [tarefa, setTarefa] = useState('');
    const [tarefas, setTarefas] = useState([]);

    function adicionar (){
      setTarefas([...tarefas,tarefa])
      setTarefa('')
    }

    function teclaPressionada(e){
      if(e.key == 'Enter')
      adicionar();
    }
    return(
      <section>
        <div className="pagina-lista-tarefa">
        <div className='container'>
          <h1> Lista de Tarefas </h1>
          <div>
            Adicionar tarefa:  <input type='text' onKeyUp={teclaPressionada} value={tarefa} onChange={e =>setTarefa(e.target.value)}/>
            <button onClick={adicionar}> Adicionar </button>
          </div>
          <div>
            <ul>
              {tarefas.map(item => <li> {item} </li>)}
            </ul>
            
          </div>
          
        </div>
  
        <Link className='voltar' to='/'> Voltar para Menu </Link>
      </div>
      </section>
    )
}