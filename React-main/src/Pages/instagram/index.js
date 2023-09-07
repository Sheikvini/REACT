import './index.scss';
import { useState } from 'react';
import Post from '../../components/post';

export default function Insta() {
    const [usuario, setUsuario] = useState('');
    const [tempo, setTempo] = useState('');
    const [avatar, setAvatar] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState('');
    const [curtidas, setCurtidas] = useState(0);
    const [post, setPost] = useState([]);

    function adicionarPost() {
        let novoPost = {
            usuario: usuario,
            tempo: tempo,
            avatar: avatar,
            descricao: descricao,
            imagem: imagem,
            curtidas: curtidas,
        };

        setPost([...post, novoPost])

        setUsuario('');
        setTempo('');
        setAvatar('');
        setDescricao('');
        setImagem('');
        setCurtidas(0);

    }





    return (
        <section className='pagina-instagran'>
            <aside>

                <div className='logo'>
                    <img src='/assets/images/logo2.png' />
                    <h1>Portifolio.me</h1>
                </div>

                <div className='caminhos'>
                    <div>
                        <img src='/assets/images/img1.png' />
                        <h1>Página Inicial</h1>
                    </div>

                    <div>
                        <img src='/assets/images/img2.png' />
                        <h1>Pesquisa</h1>
                    </div>

                    <div>
                        <img src='/assets/images/img3.png' />
                        <h1>Reels</h1></div>

                    <div>
                        <img src='/assets/images/img4.png' />
                        <h1>Mensagens</h1>
                    </div>

                    <div>
                        <img src='/assets/images/img5.png' />
                        <h1>Notificações</h1>
                    </div>

                    <div>
                        <img src='/assets/images/img6.png' />
                        <h1>Criar</h1>
                    </div>
                </div>
            </aside>

            <nav>
                <div className='novaspubli'>
                    <button> Novas Publicações </button>
                </div>


                <div className='users'>
                    <h1>
                        <img src='/assets/images/1.png'></img>
                        <img src='/assets/images/2.png'></img>
                        <img src='/assets/images/3.png'></img>
                        <img src='/assets/images/4.png'></img>
                        <img src='/assets/images/5.png'></img>
                        <img src='/assets/images/6.png'></img>
                        <img src='/assets/images/7.png'></img>
                        <img src='/assets/images/8.png'></img>
                    </h1>
                </div>

                <article>
                    <div className='informacoes'>
                        <div className='inp1'>
                            <p>Usuário:</p><input value={usuario} onChange={e => setUsuario(e.target.value)} ></input>

                            <p>Tempo:</p><input id='inp3' value={tempo} onChange={e => setTempo(e.target.value)} ></input>
                        </div>

                        <div className='inp2'>
                            <p>Avatar:</p><input value={avatar} onChange={e => setAvatar(e.target.value)} ></input>
                        </div>

                        <div className='inp2'>
                            <p>Descrição:</p><input id='inp4' value={descricao} onChange={e => setDescricao(e.target.value)} ></input>
                        </div>

                        <div className='inp1'>
                            <p>Post:</p><input value={imagem} onChange={e => setImagem(e.target.value)} ></input>

                            <p>Curtidas:</p> <input id='inp3' value={curtidas} onChange={e => setCurtidas(Number(e.target.value))}></input>

                        </div>

                        <button onClick={adicionarPost}>Postar</button>
                    </div>
                </article >

                {post.map((post, index) => (
                    <Post
                        key={index}
                        avatar={post.avatar}
                        usuario={post.usuario}
                        tempo={post.tempo}
                        imagem={post.imagem}
                        curtidas={post.curtidas}
                        descricao={post.descricao}
                    />
                ))}
            </nav>


        </section >
    )
}