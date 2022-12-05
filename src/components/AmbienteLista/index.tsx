import Formulario from "./Formulario"
import { useState } from "react"
import Lista from "./Lista"


interface IPessoa {
    nome: string
    idade: number
}


export default function AmbienteLista() {

    const [lista, setLista] = useState([{
        nome: 'Elias',
        idade: 28
    }, {
        nome: 'Ana Carolina',
        idade: 22

    }, {
        nome: 'Joao Paulo',
        idade: 35
    }, {
        nome: 'Ana Carolina',
        idade: 22

    }, {
        nome: 'Ana Carolina',
        idade: 22

    }, {
        nome: 'Ana Carolina',
        idade: 22

    }, {
        nome: 'Ana Carolina',
        idade: 22

    }, {
        nome: 'Ana Carolina',
        idade: 22

    }, {
        nome: 'Ana Carolina',
        idade: 22

    }, {
        nome: 'Ana Carolina',
        idade: 22

    }, {
        nome: 'Ana Carolina',
        idade: 22

    }, {
        nome: 'Ana Carolina',
        idade: 22

    }, {
        nome: 'Ana Carolina',
        idade: 22

    }, {
        nome: 'Ana Carolina',
        idade: 22

    }, {
        nome: 'Ana Carolina',
        idade: 22

    }, {
        nome: 'Ana Carolina',
        idade: 22

    }, {
        nome: 'Ana Carolina',
        idade: 22

    }, {
        nome: 'Ana Carolina',
        idade: 22

    }, {
        nome: 'Ana Carolina',
        idade: 22

    }, {
        nome: 'Ana Carolina',
        idade: 22

    }, {
        nome: 'Ana Carolina',
        idade: 22

    }, {
        nome: 'Ana Carolina',
        idade: 22

    }])

    return (
        <div>
            <Formulario setLista={setLista} />
            <Lista humano={lista} />
            


        </div>
    )
}