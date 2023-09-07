import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import App from './Pages/home';
import Tarefas from './Pages/tarefas';
import Media from './Pages/media';
import AulaComp from './Pages/aula-comp';
import Correio from './Pages/correio';
import Aluno from './Pages/aluno';
import Sorvete from './Pages/sorvetinho';
import Juros from './Pages/juros';
import Insta from './Pages/instagram';
import Filme from './Pages/filme';
import Pokemon from './Pages/pokemon';
import Marvel from './Pages/marvel';
import Netflix from './Pages/netflix';


import {BrowserRouter,Routes,Route} from 'react-router-dom'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path ='/' element={<App />} />
      <Route path ='/instagram' element={<Insta />} />
      <Route path ='/tarefas' element={<Tarefas />} />
      <Route path ='/media' element={<Media />} />
      <Route path ='/Aulacomp' element={<AulaComp/>} />
      <Route path ='/correio' element={<Correio />} />
      <Route path ='/aluno' element={<Aluno />} />
      <Route path ='/sorvetinho' element={<Sorvete/>} />
      <Route path ='/juros' element={<Juros />} />
      <Route path ='/marvel' element={<Marvel/>} />
      <Route path ='/filme' element={<Filme />} />
      <Route path='/pokemon' element={<Pokemon />} />
      <Route path='/netflix' element={<Netflix />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);


