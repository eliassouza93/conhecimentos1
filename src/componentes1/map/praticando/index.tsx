import { useState } from "react"

interface Itarefa {
    nome: string
}
export default function Formulario147({ setTarefas }: {
    setTarefas: React.Dispatch<React.SetStateAction<
        Itarefa[]>>
}) {
    const [nome, setNome] = useState('')

    function AdicionarTarefa(e: any) {
        e.preventDefault()
        setTarefas(tarefasAntigas => [...tarefasAntigas, { nome }])
    }
    const tudo: any = {
        nome
    }
    return (
        <div>
        
            <h1>Formulário</h1>
            <form onSubmit={AdicionarTarefa}>
                <input onChange={(e) => setNome(e.target.value)} value={tudo.nome} required type="text" name="nome" />
                <button>adicionar nome</button>

            </form>



        </div>
    )
}