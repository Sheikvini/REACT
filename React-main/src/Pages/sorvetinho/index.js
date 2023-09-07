import './index.scss';
import { useState } from 'react';


export default function Sorvete(){

    const [produto, setProduto] = useState('');
    const [valor, setValor] = useState(0);
    const [produtos, setProdutos] = useState([]);
    const [valores, setValores] = useState([]);
    const[total,setTotal] = useState(0);

    function adicionarProduto(){
        let x = {
            nome: produto,
            preco: valor
        }

        setProdutos([...produtos,x]);
        setValores([...valores,valor]);

        let y= valor;
        for(let item of valores){
            y = y + item
        }
        setTotal(y);
    }


   
    return (
        <div className='pagina-carro'>
            <header>
                <img src='/assets/images/logo.svg' />
                <h1>Portifolio.me</h1>
            </header>
            <aside>
                <section>
                    <div className='logo'>
                        <img src='/assets/images/sorvete.png' />
                        <h3>Sorveteria</h3>
                    </div>

                    <div className='compras'>

                        <div className='novo-item'>
                            <h2>Novo item</h2>

                            <div className='inp1'>
                                <input type='text' value={produto} onChange={e => setProduto(e.target.value)} ></input>

                                <h3>R$</h3><input type='number' value={valor} onChange={e => setValor(Number(e.target.value))}></input>
                                <button onClick={adicionarProduto }> Adicionar </button>
                            </div>


                        </div>

                        <div className='tabela'>
                            <div className='compras'>
                                <h2>Lista de Compras</h2>
                                <h3>Total: R${total}</h3>
                            </div>

                            <div className='produtos'>
                                <table>
                                    <tbody>
                                        {produtos.map(item =>
                                            <tr>
                                                <div>
                                                <td>{item.nome}</td>
                                                <td> R$     {item.preco}</td>
                                                </div>
                                            </tr>
                                        )}

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </section>
            </aside>
        </div>
    )}

