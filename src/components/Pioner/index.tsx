import axios from "axios"
import { useEffect } from "react"


export default function Pioner() {

    useEffect(() => {
        axios.get('https://randomuser.me/api/')
            .then(retorno => {
                console.log(retorno)
            })

    },[])

    return (
        <div>
            <h1>Consumindo APIs</h1>
        </div>
    )
}