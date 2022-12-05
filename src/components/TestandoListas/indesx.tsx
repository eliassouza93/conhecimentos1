import { Fragment, useState } from 'react'
import Lista from './Lista'

export default function TestandoListas() {
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

    function Teste () {
        console.log(tarefas)
        setTarefas(tarefas)

    }


    return (
        <div >
            <Lista tarefas={tarefas} />

            <button onClick={Teste}>clciar</button>
        </div>
        
    )
}