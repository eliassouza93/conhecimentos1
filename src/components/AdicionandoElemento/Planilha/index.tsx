import { useState } from "react"
import Caixa from "./Caixa"


interface ITodos {
    cpf: string
    numero: number
}
export default function Planilha() {
    const [dado, setDado] = useState([])

    return (
        <div>
            <h1>Planilha</h1>

            

            <Caixa dados={dado} />

        </div>
    )
}