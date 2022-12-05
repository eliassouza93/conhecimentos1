
import { useState } from "react"
interface IPessoa {
    nome: string
    idade: number
}

export default function Formulario({ setLista }: { setLista: React.Dispatch<React.SetStateAction<IPessoa[]>> }) {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')

    const tudo: any = {
        nome,
        idade
    }

    function Adicionar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLista(antigas => [...antigas, { ...tudo }])


        if (Adicionar == Adicionar) {
            setNome('')
        }

    }
 

    return (
        <form onSubmit={Adicionar}>
            <input placeholder="digite seu nome" onChange={(e) => setNome(e.target.value)} type="text" name="nome" value={tudo.nome} autoFocus />

            <button type="submit"  >Adicionar</button>

        </form>
    )
}