import axios from "axios"
import { useEffect, useState } from "react"
 

export default function ConsuAPI() {

    const [naza, setNaza] = useState< []>([])

    useEffect(() => {
        axios.get('https://api.nasa.gov/techport/api/projects/17792?api_key=rMVBJFjParA97UWJmMKxhiOR2WwUhollUEcnB4WH')
            .then((res) => {
                console.log(res.data.project.primaryTaxonomyNodes)
                setNaza(res.data.project.primaryTaxonomyNodes)
              
            })
    }, [])


    return (
        <div>
            <h1>API da Naza</h1>    
           


        </div>




    )
}