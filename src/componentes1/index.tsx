import { useState } from "react"
import Formulario147 from "./praticando/consumindo/Formulario"
import style from './index.module.scss'
 

export default function Laboratorio() {
    const [tarefas, setTarefas] = useState([{
        nome: 'Mensagens a baixo'
    }])
    const [tira, setTira] = useState('')


    function TiraFunc(event: any) {

    }
    
 

    return (
        <div className={style.module}  >
            <h1>Iniciando os testes</h1>
            <Formulario147 setTarefas={setTarefas} />

            {tarefas.map((est, index) => (
                <div>
                    <p key={index}>{est.nome}  </p>
                </div>
            ))}
 
        </div>
    )
}