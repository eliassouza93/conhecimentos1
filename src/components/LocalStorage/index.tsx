import { useState } from "react"

export default function LocalStorage() {

    const [nome, setNome] = useState('')

    const armazenar = (chave: any, valor: any) => {
        localStorage.setItem(chave, valor)
        if (!armazenar) {
            localStorage.setItem(chave, valor)
        }
    }
    const consultar = (chave: any) => {

        alert(localStorage.getItem(chave))

    }
    const apagar = (chave: any) => {
        localStorage.removeItem(chave)
    }
    return (
        <div>
            <label htmlFor="nome">Nome</label> <br />
            <input required type="text" value={nome} onChange={(e) => setNome(e.target.value)} /> <br />
            <button onClick={() => armazenar('ls_nome', nome)}> Gravar nome</button>
            <button onClick={() => consultar('ls_nome')}> Ver nome</button>
            <button onClick={() => apagar('ls_nome')}> Remover nome</button>

        </div>
    )
}