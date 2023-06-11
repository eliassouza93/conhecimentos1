import { useState } from "react"
import Formulario from "./Formulario"
import Lista from "./Lista"


export default function Inicio222() {

    const [autentica, setAutentica] = useState([])

    return (
        <div>
            <Formulario setAutentica={setAutentica}  />
            <Lista Autentica={autentica} />
        </div>
    )
}