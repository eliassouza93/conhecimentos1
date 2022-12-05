import { useState } from "react"


interface ITare {
    nome: string
    tempo: string
}
export default function Formulario({ setTarefa }: { setTarefa: React.Dispatch<React.SetStateAction<ITare[]>> }) {
    const [nome, setNome] = useState('')
    const [tempo, setTempo] = useState('00:00')


    const tudo: any = {
        nome,
        tempo
    }

    function Adicionar(e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault()
        console.log(nome)
        setTarefa(tarefasAntigas => [...tarefasAntigas, { ...tudo }])

    }

    return (
        <div>
            <form >
                <input required onChange={(e) => setNome(e.target.value)} value={tudo.nome} name='nome' type="text" />

                <input type="time"
                    step='1'
                    name="tempo"
                    value={tudo.tempo}
                    onChange={evento => setTempo(evento.target.value)}
                    min='00:00:00'
                    max='01:130:00'
                    required
                />

                <button onClick={Adicionar}>Adicionar</button>


            </form>

        </div>
    )
}