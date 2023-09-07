import './index.scss';

export default function Post(props) {

    return (

        <div className='comp-post'>

            <div className='info-avat'>
                <div className='avatar'>
                    <img src={props.avatar} />
                </div>

                <div>
                    <div className='nm'>
                        <h1>{props.usuario}</h1>
                        <h2> • {props.tempo} </h2>
                    </div>
                    <img src='/assets/images/verificado.png' />
                </div>
            </div>

            <div className='img'>
                <img src={props.imagem} />
            </div>

            <div className='info2'>
                <div className='curt'>
                    <img src='/assets/images/im1.png' />
                    <img src='/assets/images/im2.png' />
                </div>
                
                <div className='curtidas'>
                    <h1>{props.curtidas} Curtidas</h1>
                </div>
                
                <div className='descricao'>
                    <h1> {props.usuario}</h1>
                    <h2>{props.descricao} </h2>
                </div>
            </div>
        </div>
    )
}