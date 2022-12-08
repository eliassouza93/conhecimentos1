import { Link } from "react-router-dom"


export default function () {
    const rotas = [{
        label: 'Produtos',
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
        <div>
            {rotas.map((rota, index) => (
                <ul key={index}>
                    <Link to={rota.to}> {rota.label} </Link>
                </ul>
            ))}


        </div>
    )
}