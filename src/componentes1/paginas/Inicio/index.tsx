import { useEffect, useState } from "react"


export default function Inicio() {
    const [conta, setConta] = useState(0)
    useEffect(() => {

        console.log('página recarregada!')
        for (let i = 0; i < 300; i++) {
            console.log("Block statement execution no." + i);
            localStorage.setItem('key', 'Nome: ' + conta * 2)


        }




    })


    return (
        <div>
            <h1>Inicio</h1>
            <button onClick={() => setConta(conta + 1)}>Adicionar</button>
            <h2> {conta} </h2>


        </div>
    )
}