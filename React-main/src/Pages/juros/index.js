import './index.scss'
import { useState } from 'react'

export default function Juros() {

    const [valor, setValor] = useState(0);
    const [parcela, setParcela] = useState(0);
    const [juros, setJuros] = useState(0);
    const [valorf, setValorf] = useState(0);
    const [vparcelas, setVparcelas] = useState(0);

    function calcularParcela() {

        let tj = 1 + (juros / 100);
        let m = valor * Math.pow(tj, parcela);
        setValorf(m.toFixed(2))

        let x = m / parcela;
        setVparcelas(x.toFixed(2))
    }

    return (
        <div className="pagina-juros">
            <header className="container">
                <img src='/assets/images/logo.svg' alt='' />
                <p>Portifolio.me</p>
            </header>

            <div className='titulo'>
                <h1>Simulador de compra de veiculo</h1>
            </div>

            <div className='container2'>
                <div className='carro'>
                    <img src='/assets/images/carro2.png' alt='' />
                </div>

                <div className='pc'>

                    <div className='vl'>
                        <p>Valor Total</p>
                        <input  value={valor} onChange={e => setValor(e.target.value)} />
                    </div>

                    <div className='pj'>

                        <div>
                            <p>Parcelas</p>
                            <input value={parcela} onChange={e => setParcela(e.target.value)} />
                        </div>

                        <div>
                            <p>Juros Mensal (%)</p>
                            <input id='p1' value={juros} onChange={e => setJuros(e.target.value)} />
                        </div>
                    </div>

                    <div className='botao'>
                        <button onClick={calcularParcela}> Calcular </button>
                    </div>

                    <div className='r'>

                        <div className='footer'>
                            <p>Parcela:</p>
                            R${vparcelas}
                        </div>

                        <div className='footer'>
                            <p>Valor total:</p>
                            R${valorf}
                        </div>

                    </div>
                </div>



            </div>

        </div>


    );
}