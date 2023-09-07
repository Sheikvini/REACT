import './index.scss';

export default function Herois(props){

    return(
        <div className='comp-marvel'>
            <div>
                <img src={props.imagem}/>
                <h1> {props.nome}</h1>
                <h2>{props.desc}</h2>
            </div>
        </div>
    )
}