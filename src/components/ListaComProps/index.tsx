import { useState } from "react"
import Lista from "./Lista"



export default function InicioLista() {
    const [tarefas, setTarefas] = useState([{
        id: 1,
        nome: 'Roberto',
        idade: 19
    }, {
        id: 2,
        nome: 'Maria',
        idade: 22
    }, {
        id: 3,
        nome: 'Amanda',
        idade: 21
    }, {
        id: 4,
        nome: 'Renata',
        idade: 20
    }, {
        id: 5,
        nome: 'Pedro',
        idade: 25
    }])
    return (
        <div>
           <Lista tarefas={tarefas} />
           

        </div>
    )
}