import axios from "axios"
import { useEffect, useState } from "react"

interface ITIpos{
    projectId:number
    title:string
}

export default function ConsuAPI() {

    const [naza, setNaza] = useState<ITIpos[]>([])

    useEffect(() => {
        axios.get('https://api.nasa.gov/techport/api/projects/17792?api_key=rMVBJFjParA97UWJmMKxhiOR2WwUhollUEcnB4WH')
            .then((res) => {
                console.log(res.data.project)
                setNaza(res.data.project)
            })
    }, [])


    return (
        <div>
            <h1>API da Naza</h1>
            {naza.map(user => (
                <div key={user.projectId}>
                    {user.title}

                </div>
            ))}


        </div>




    )
}