import style from './estilo.module.scss'
import Formulario from "./componentes/Formulario/index";
import Lista from './componentes/lista';
import Cronometro from './componentes/Cronometro';
import { useState } from 'react';

export default function Temporizador() {
    const [tarefas, setTarefas] = useState([{
        tarefa: 'React',
        hora: '02:00:00'

    }, {
        tarefa: 'JavaScript',
        hora: '01:30:00'

    }, {
        tarefa: 'TypeScript',
        hora: '03:15:00'

    }, {
        tarefa: 'JavaScript',
        hora: '01:30:00'

    }, {
        tarefa: 'TypeScript',
        hora: '03:15:00'

    } ])
    return (
        <div className={style.estilo}>
            <Formulario setTarefas={setTarefas} />
            <Lista tarefas={tarefas} />
            <Cronometro />
        </div>
    )
}