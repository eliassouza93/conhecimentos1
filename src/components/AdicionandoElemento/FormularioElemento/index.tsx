import React, { useState } from "react"


interface Inomes {
    nome: string
}
export default function FormularioElemento({ setNomes }: {
    setNomes: React.Dispatch<React.SetStateAction<
        Inomes[]>>
}) {

    const [nome, setNome] = useState('')

 


    function Adicionar(e: React.FormEvent<HTMLFormElement>) {
        e?.preventDefault()
        setNomes(antigas => [...antigas, { nome }])

    }

    return (
        <div>

            <form onSubmit={Adicionar} >
                <input type="text" name="nome" value={nome} onChange={e => setNome(e.target.value)} />

                <button>Adicionar</button>
            </form>




        </div>
    )
}