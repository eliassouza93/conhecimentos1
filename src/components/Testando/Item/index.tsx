import logo from 'assets/agua.jpg'
import style from './Inter.module.scss'
import cardapio from '../itens.json'

type Props = typeof cardapio [0]

export default function Item(props:Props) {
    
    const {title, description} = props

    return (
        <div className={style.titulo} >
            <div>
                <img src={logo} alt="imagem" />
            </div>
            <div>
                <div>
                    <h2> {title} </h2>
                    <p> {description} </p>
                </div>
                <div>
                    <div>
                        Massa
                    </div>
                    <div>
                        400g
                    </div>
                    <div>
                        Serve 2 pessoas
                    </div>
                    <div>
                        R$ 50
                    </div>
                </div>
            </div>
        </div>
    )
}