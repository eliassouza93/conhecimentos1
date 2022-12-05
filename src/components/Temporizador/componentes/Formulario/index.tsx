import { useState } from "react";
import Botao from "../Botao";
import { Itarefa } from "../Interfaces/tarefa";


export default function Formulario({ setTarefas }: {setTarefas: React.Dispatch<React.SetStateAction<
        Itarefa[]>>

}) {
    const [tarefa, setTarefa] = useState('')
    const [hora, setHora] = useState('00:00')
    
    const tudo:any = {
        tarefa,
        hora
    }


    function adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setTarefas(tarefasAntigas => [...tarefasAntigas, {...tudo}] )
 
    }
    return (
        <form onSubmit={adicionarTarefa}>
            <div>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input
                    required
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    value={tudo.tarefa}
                    placeholder="O que você quer estudar"
                    onChange={evento => setTarefa(evento.target.value)}

                />
            </div>
            <div>
                <label htmlFor="hora">Tempo</label>
                <input type="time"
                    step='1'
                    name="hora"
                    value={tudo.hora}
                    onChange={evento => setHora(evento.target.value)}
                    id="hora"
                    min='00:00:00'
                    max='01:130:00'
                    required
                />
            </div>

            <Botao type='submit' texto={"Adicionar"} />


        </form>
    )
}