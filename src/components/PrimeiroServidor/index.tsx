
import axios from "axios"
import { useEffect, useState } from "react"

export default function PrimeiroServidor() {

    const [dados, setDados] = useState([])

    const lista = [{
        "id": 1,
        "titulo": "Senhor dos Aneis"
    },
        {
            "id": 2,
            "titulo": "O Hobbit"
    }]

    useEffect(() => {
        axios.get('http://localhost:3000/livros')
            .then((resposta) => {
                console.log(resposta.data)
            })
    }, [])


    return (
        <div>
            <h1>Primeiro servidor</h1>
            {lista.map((user) =>(
                <div>
                   <h1> {user.id} - {user.titulo} </h1>
                </div>
            ))}



        </div>
    )
}





