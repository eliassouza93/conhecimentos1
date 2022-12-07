import axios from "axios"
import { Fragment, useEffect, useState } from "react"

interface INaza{
    title:string
}
export default function ConsuAPI() {

    const [data, setData] = useState<INaza[]>([])
    const [carregando, setCarregando] = useState(false)

    useEffect(() => {
        setCarregando(true)
        axios.get('  https://api.nasa.gov/techport/api/projects/17792?api_key=rMVBJFjParA97UWJmMKxhiOR2WwUhollUEcnB4WH')
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
                        <Fragment key={index}>
                            <h1> {user.title} </h1>


                        </Fragment>
                    ))}

                </div>

            )}

        </div>
    )
}