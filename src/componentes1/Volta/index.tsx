import { useState } from "react"


export default function VoltaInicio() {

    const [conta, setConta] = useState(0)

    function contador() {
        setConta(conta + 1)
    }
    return (
        <div>
            <h1>Voltando depois da temporada!</h1>

            <button onClick={contador}>Adicionar</button>


            <h2> {conta} </h2>
        </div>
    )
}