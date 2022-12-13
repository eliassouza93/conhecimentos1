import React from "react"



interface IPesquisa {
    busca: string
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default function PesquisadorAlura({ busca, setBusca }: IPesquisa) {
    return (
        <div>
            <input value={busca} onChange={(evento) => setBusca(evento.target.value)} placeholder='Buscador' />
            

        </div>
    )
}