import { IUsuarios } from "componentes2/IUsuarios";
import { useState } from "react";
import styles from './Formulario.module.scss'

export default function Formulario({ setAutentica }: { setAutentica: IUsuarios | any }) {

    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')



    const tudo = {
        nome,
        senha
    }

    function AdicionarFormulario(event: any) {
        event?.preventDefault()

        setAutentica((antigas: any) => [...antigas, { ...tudo }])
        if (nome) {
            setNome('')
        }
        if (senha) {
            setSenha('')
        }





    }

    return (
        <div className={styles.caixa}>
            <form onSubmit={AdicionarFormulario} >
                <label htmlFor="nome">Nome</label>
                <input type="text"
                    id="nome"
                    value={tudo.nome}
                    onChange={(e) => setNome(e.target.value)}



                />
                <label htmlFor="senha">Senha</label>
                <input type="password"
                    id="senha"
                    value={tudo.senha}
                    onChange={(e) => setSenha(e.target.value)}

                />
                <button>Autenticar</button>
            </form>


        </div>
    )
}