
import { useState } from "react"

interface ITarefas {
    nome: string
    hora: string
}

export default function Inicio02({ setTodasTarefas }: { setTodasTarefas: ITarefas[] | any }) {
    const [nome, setNome] = useState('')
    const [hora, setHora] = useState('')

    const [nomeErro, setNomeErro] = useState('')
    const [senhaErro, setSenhaErro] = useState('')
    const [logando, setLogando] = useState('')

    const tudo = {
        nome,
        hora

    }
    function adicionar(event: any) {
        event?.preventDefault()
        setTodasTarefas((tarefasAntigas: any) => [...tarefasAntigas, { ...tudo }])


        if (nome.length < 4) {
            setNomeErro('Digite uma palavra maior')
        }
        if (hora.length < 4) {
            setSenhaErro('digite uma senha maior')
        }
        else {
            setLogando('logando no sistema...')
           
        }
         
    }


    return (
        <div>

            {logando ? (<h1>Logando...</h1>) : (
                <>

                    <h1>Formulário</h1><h2> {nomeErro} </h2><h2> {senhaErro} </h2><h1>{logando}</h1><div>
                        <form onSubmit={adicionar}>
                            <label htmlFor="nome">nome</label>
                            <input
                                type="text"
                                id="nome"
                            
                                onChange={(e) => setNome(e.target.value)} />
                            <hr />
                            <label htmlFor="hora">hora</label>
                            <input
                                type="password"
                                id="hora"
                                
                                onChange={(e) => setHora(e.target.value)} />
                            <hr />
                            <button>adicionar</button>
                        </form>

                    </div>

                </>

            )}


        </div>
    )
}