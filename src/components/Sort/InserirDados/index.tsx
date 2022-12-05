import React, { useState } from "react"


export default function InserirDados() {

    const [nome, setNome] = useState<string>()
    const [exibir, setExibir] = useState<string>()
    
    

    function cadastrarUsuario(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setExibir(nome)
        
 
    }

    return (
        <div>
            <form onSubmit={cadastrarUsuario}  >

                <label htmlFor="nome" >Insetir Nome</label>
                <input id="nome" type="text" value={nome} onChange={(ev) => setNome(ev.target.value)} />

                <button type="submit"  >Adicionar</button>
            </form>
            <div> {exibir} </div>

        </div>
    )
}