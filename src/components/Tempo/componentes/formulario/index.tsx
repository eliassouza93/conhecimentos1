import React, { useState } from "react";
import Botao from "../botao";


  interface ITarefa {
    tarefa: string
    hora: string
}

export default function Formulario1({ setTarefas }: { setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>> }) {


    const [tarefa, setTarefa] = useState('')
    const [hora, setHora] = useState('00:00')

    const tudo: any = {
        tarefa,
        hora
    }

    function adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setTarefas(tarefasAntigas => [...tarefasAntigas, { ...tudo }])

    }

    return (
        <div>
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

                <Botao type="submit" texto="Adicionar" />


            </form>


        </div>
    )
}