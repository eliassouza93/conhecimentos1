import axios from "axios"
import { Fragment, useEffect, useState } from "react"

interface IBGE {

    nome: string
    freq: number
}

export default function ConsuAPI() {

    const [data, setData] = useState<IBGE[]>([])
    const [carregando, setCarregando] = useState(false)

    useEffect(() => {
        setCarregando(true)
        axios.get('https://servicodados.ibge.gov.br/api/v2/censos/nomes/  ')
            .then(resposta => {
                setData(resposta.data)
            }).catch((erro) => {
                console.log(erro)
                setCarregando(true)
            }).finally(() => {
                setCarregando(false)
            })

    }, [])

    return (
        <div  >
            {carregando ? (<h1>Carregando</h1>) : (
                <div>
                    {data.map((user, index) => (
                        <div>
                            <h2>{user.nome}</h2>
                            <h3> {user.freq} </h3>

                        </div>
                    ))}

                </div>


            )}


        </div>
    )
}