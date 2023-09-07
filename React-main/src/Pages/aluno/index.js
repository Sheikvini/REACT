import { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Alun from '../../components/alunos';


export default function Aluno() {
  const [mostrar, setMostrar] = useState(false)
  const [mostrarTabela, setMostrarTabela] = useState(false)
  const [nomeAluno, setNome] = useState('');
  const [chamadaAluno, setChamada] = useState(1);
  const [alunos, setAlunos] = useState([]);

  function adicionarAluno() {
    let aluno = {
      nome: nomeAluno,
      chamada: chamadaAluno
    }
    setAlunos([...alunos, aluno])
    setMostrarTabela(true)
    setNome('')
    let x = chamadaAluno + 1;
    setChamada(x)


  }

  function mostrarInfo() {
    setMostrar(!mostrar)
    setMostrarTabela(!mostrarTabela)
  }

  function excluirAluno(chamada) {
   
    setAlunos(alunos.filter(aluno => aluno.chamada !== chamada))
    let y= chamadaAluno - 1
    setChamada(y)

  }

  return (
    <div className="pagina-lista-tarefa">
      <div className='container'>
        <div className='mostrar'>
          <h1> Lista de Alunos </h1>
          <button onClick={mostrarInfo}>
            {mostrar == true ? '-' : '+'}
          </button>
        </div>
        {mostrar == true &&
          <>
            <div>
              Nome: <input type='text' value={nomeAluno} onChange={e => setNome(e.target.value)} />
              Chamada: {chamadaAluno}
              <button onClick={adicionarAluno}> Adicionar </button>
            </div>
          </>
        }
        {mostrarTabela == true &&
          <>
            <div>
              <section>
              <table>
        <thead>
          <tr>
            <th>Chamada</th>
            <th>Nome</th>
            <th id='b3'></th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr>
              <td>{aluno.chamada}</td>
              <td>
                <Alun nome={aluno.nome} 
                chamada={aluno.chamada} />
              </td>
              <td>
                <button onClick={() => excluirAluno(aluno.chamada)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

              </section>
            </div>
          </>
        }
      </div>

      <Link className='voltar' to='/'> Voltar para Menu </Link>
    </div>
  )
}