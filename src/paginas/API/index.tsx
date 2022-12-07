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
        axios.get('  https://api.nasa.gov/techport/api/projects/17792?api_key=rMVBJFjParA97UWJmMKxhiOR2WwUhollUEcnB4WH')
            .then(resposta => {
                console.log(resposta)
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
                         
                        </div>
                    ))}

                </div>


            )}


        </div>
    )
}