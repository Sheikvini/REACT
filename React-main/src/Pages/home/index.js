
import Header from '../../components/header';
import './index.scss';
import { Link } from 'react-router-dom';



function App() {
  return (
    <section>

    

    <div className='pagina-home'>

      

      <header className="home-secao1">
      <h1> Home</h1>
    </header>
      <nav className='home-secao2'>
        <div>
        <Link  to='/tarefas'> Tarefas</Link>
        <Link  to='/instagram'> Instagram</Link>
        <Link  to='/media'> Media</Link>
        <Link  to='/aulacomp'> Componentes</Link>
        </div>
        <div>
        <Link  to='/correio'> Correio</Link>
        <Link  to='/aluno'> Aluno</Link>
        <Link  to='/sorvetinho'> Sorvete</Link>
        <Link  to='/juros'> Juros</Link>
        </div>
        <div>
        <Link  to='/marvel'> Marvel</Link>
        <Link  to='/pokemon'> Pokemon</Link>
        <Link  to='/filme'> Filme</Link>
        <Link  to='/netflix'> Netflix</Link>
        </div>
      </nav>
      
    </div>
    </section>
  );
} 

export default App;
