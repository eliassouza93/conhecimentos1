import { useState } from "react";
import BuscadorAlura from "../cardapio/buscador"
import ItemAlura from "../cardapio/buscador/lista/item";
import PesquisadorAlura from "../cardapio/pesquisador"

export default function InicioAlura() {
    const [busca, setBusca] = useState('');
    return (
        <div>
            Aluroni

            <BuscadorAlura />
            <PesquisadorAlura busca={busca} setBusca={setBusca} />
          
        </div>
    )
}