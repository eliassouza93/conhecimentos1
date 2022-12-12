import axios from "axios"
import { useEffect, useState } from "react"


export default function ConsuAPI() {

 
    const [clicar, setClicar] = useState(0)

    setTimeout(() => {
        setClicar(clicar + 1099999999000500)
    }, 0);
 
    return (
        <div>
            <h1>API da Nazsa</h1>

            <button >Click + </button>

            <h2>O botão foi clicado {clicar} vezes! </h2>

        </div>




    )
}