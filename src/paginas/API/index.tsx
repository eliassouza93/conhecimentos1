import axios from "axios"
import { useEffect, useState } from "react"


export default function ConsuAPI() {

    const [naza, setNaza] = useState<[]>([])

    useEffect(() => {
        axios.get(' ')
            .then((res) => {
                console.log(res)

                
            })
    }, [])


    return (
        <div>
            <h1>API da Nazsa</h1>



        </div>




    )
}