import { useState } from "react"


export default function Inicio222() {

    const [elemento, setElemento] = useState(0)

    const clicar = () => {
        setElemento(elemento + 1)
    }

    return (
        <div>
            <h1>Inicio 222</h1>


            <button onClick={clicar}   >clicar</button>

            <h1> {elemento} </h1>
        </div>
    )
}