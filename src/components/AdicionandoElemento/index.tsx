 
import {   useState } from "react";
import FormularioElemento from "./FormularioElemento";
import Lista from "./Lista";

export default function ElementoInicial() {
 
    const [nomes, setNomes] = useState([{
        nome: ' ',

    }])
    return (
        <div>

            <FormularioElemento setNomes={setNomes} />
            <Lista nomes={nomes} />



        </div>
    )
}