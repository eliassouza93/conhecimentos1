
import Lista from "components/TestandoListas/Lista";
import { useState } from "react";
import Formulario1 from "./componentes/formulario";



export default function Relogio() {
    const [tarefas, setTarefas] = useState([{
        tarefa: 'React',
        hora: '02:00:00'

    }, {
        tarefa: 'JavaScript',
        hora: '01:30:00'

    }, {
        tarefa: 'TypeScript',
        hora: '03:15:00'

    }])
    return (
        <div>
            <Formulario1 setTarefas={setTarefas} />
        
        </div>
    )
}