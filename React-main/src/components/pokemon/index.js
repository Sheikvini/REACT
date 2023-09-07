import './index.scss';

export default function Pokemn(props){

    return(
        <div className='comp-pokemon'>
            <div>
                <img src={props.imagem}/>
                <h1> {props.nome}</h1>
                <h2>{props.tipo}</h2>
            </div>
        </div>
    )
}