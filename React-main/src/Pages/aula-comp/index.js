import './index.scss';

import Header from '../../components/header';
import Usuario from '../../components/usuario';
import { useState } from 'react';

export default function AulaComp() {

    const [tema, setTema] = useState('');
    const [tema2, setTema2] = useState('');

    function dark() {
        setTema('dark')
    }

    function light() {
        setTema('light')
    }

    function op1() {
        setTema2('alt1')
    }

    function op2() {
        setTema2('alt2')
    }


    return (
        <body className='pagina-comp'>

            <Header />


            <aside>
                <h1> Aula - Componentes </h1>

                <div className={tema2}>
                    <div>
                        <Usuario tema={tema} nome="Bruno" curso="Técnico em Informática" num={5} conhecimentos={['HTML', 'CSS', 'C#']} />

                        <Usuario tema={tema} nome="Vini" curso="Técnico em Informática" num={47} conhecimentos={['REACT', 'MYSQL']} />

                    </div>
                    <div>
                        <Usuario tema={tema} nome="Nathan" curso="Comunicação visual" num={12} conhecimentos={['Figma']} />

                        <Usuario tema={tema} nome="Plinio" curso="Técnico em Informática" num={14} conhecimentos={['HTML', 'CSS', 'Java']} />
                    </div>

                </div>
            </aside>

            <nav>
                <button onClick={dark} > Dark </button>
                <button onClick={light}> Light</button>
            </nav>
            <nav>
                <button onClick={op1} > Opção1 </button>
                <button onClick={op2}> Opção2 </button>
            </nav>
        </body>
    )
}
