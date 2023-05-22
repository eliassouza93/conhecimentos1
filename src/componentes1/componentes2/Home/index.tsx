import { useState } from "react";
import Inicio02 from "../Formulario";
import Lista from "../Lista";


export default function HomeTarefas() {

    const [todasTarefas, setTodasTarefas] = useState([])

    return (
        <div>
            <Inicio02 setTodasTarefas={setTodasTarefas}  />
            <Lista dados={todasTarefas} />
        </div>
    )
}