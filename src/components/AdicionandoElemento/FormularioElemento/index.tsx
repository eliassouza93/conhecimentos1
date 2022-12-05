import { useState } from "react"

interface Inome {
    nome: string
}
export default function FormularioElemento({ setTarefa }: { setTarefa: Inome[] }) {

    const [nome, setNome] = useState('')

    return (
        <div>

            <form >
                <input type="text" />

                <button>Adicionar</button>
            </form>



        </div>
    )
}