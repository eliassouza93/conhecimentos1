import { Link } from "react-router-dom"
import style from './menu.module.scss'
export default function () {
    const rotas = [{
        label: 'Inicio',
        to: '/'
    }, {
        label: 'Suporte',
        to: './suporte'
    }, {
        label: 'Contato',
        to: './contato'
    }, {
        label: 'Outros',
        to: './outros'
    }]
    return (
        <div className={style.tema} >
            {rotas.map((rota, index) => (
                <div key={index} >

                    <Link to={rota.to}> {rota.label} </Link>

                </div>
            ))}


        </div>
    )
}