import Formulario from "./Formulario"
import { useState } from "react"
import Lista from "./Lista"



export default function Dados() {

    const [info, setInfo] = useState([{
        nome: 'JavaScript',
        tempo: '02:00'
    }, {
        nome: 'TypeScript',
        tempo: '03:00'
    }, {
        nome: 'ReactJs',
        tempo: '03:00'
    }])



    return (
        <div>
            <div><h3>Linguagens de Programação</h3></div>
            <Formulario  setTarefa={setInfo} />
            <Lista tarefa={info} />
         

        </div>
    )
}