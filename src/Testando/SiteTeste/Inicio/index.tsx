import { useEffect, useState } from "react"
import style from './site.module.scss'

export default function SiteInicio() {

    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    function Adicionar() {
        console.log(nome)
        console.log(senha)

    }
 


    return (
        <div className={style.module}>
            <label htmlFor="">Nome</label>
            <input onChange={(e) => setNome(e.target.value)} type="text" />

            <label htmlFor="">Senha</label>
            <input type="text" onChange={(e) => setSenha(e.target.value)} />

            <button onClick={Adicionar}>Adicionar</button>

        </div>
    )
}