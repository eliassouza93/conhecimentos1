import axios from "axios"
import { Fragment, useEffect, useState } from "react"

interface INaza {
    projectId: number
    title: string
    project: any
}
export default function ConsuAPI() {

    const [dados, setDados] = useState<INaza[]>([])


    useEffect(() => {

        axios.get('https://api.nasa.gov/techport/api/projects/17792?api_key=rMVBJFjParA97UWJmMKxhiOR2WwUhollUEcnB4WH')
            .then(resposta => {
                setDados(resposta.data)
            }).catch((erro) => {
                console.log(erro)

            })
    }, [])
    return (
        <div>
            <h1>API da Naza</h1>

            {dados.map((user, index) => (
                <div key={index}>
                    {user.project.title}
                </div>
            ))}

        </div>




    )
}