import axios from "axios";
import { useEffect, useState } from "react";
import FormularioElemento from "./FormularioElemento";
import Lista from "./Lista";

export default function ElementoInicial() {

    useEffect(() => {
        axios.get('http://localhost:3000/pessoas/')
            .then((res) => {
                console.log(res)
            })
    })

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