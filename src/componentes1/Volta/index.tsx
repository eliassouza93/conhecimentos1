
import { useState } from "react"
import Lista from "./Lista"


export default function VoltaInicio() {

    const [conta, setConta] = useState(0)

    function contador() {
        setConta(conta + 1)
    }

    const Pessoas = [
        {
            nome: 'Elias',
            endereco: 'Rua altamiro guimaraes',
            numero: 2223

        }, {
            nome: 'Ana',
            endereco: 'Rua Meira gomes',
            numero: 7623

        }, {
            nome: 'Belas',
            endereco: 'Rua Dourados buzios',
            numero: 76553

        }
    ]

    const [nome, setNome] = useState('')
    const [guarda, setGuarda] = useState('')

    function mostrar() {
        setGuarda(nome)


    }


    return (
        <div>
            <h1>Voltando depois da temporada!</h1>

            <button onClick={contador}>Adicionar</button>

            <Lista setPessoas={Pessoas} />

            <h2> {conta} </h2>
            <label htmlFor="Nome">Nome</label>
            <input type="text" onChange={(e) => setNome(e.target.value)} />

            <button onClick={mostrar}>mostrar nome</button>
            <h1>{guarda}</h1>
        </div>
    )
}