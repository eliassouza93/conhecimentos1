import axios from "axios"
import { Fragment, useEffect, useState } from "react"


export default function InicioApi() {
    const [carregando, setCarregando] = useState(false)
    
    const [usuario, setUsuario] = useState([])


    useEffect(() => {
        setCarregando(true)
        const time = setTimeout(() => {
 
            axios.get('https://api.themoviedb.org/3/movie/popular?api_key=aed2ce3dba886fed0e5f20d0e13feac5&language=pt-br-US&page=1')
                .then((resposta) => {
                    setUsuario(resposta.data.results)
                }).catch((error) => {
                    console.log('Essa é uma mensagem de erro: ' + error)
                    setCarregando(true)
                }).finally(() => {
                    setCarregando(false)
                    console.log('Final')
                })


        }, 2200);




    }, [])


    return (
        <div>
            {carregando ? (<h1>Carregando Página...</h1>) : (
                <div>
                    {usuario.map((user: any) => (
                        <Fragment>
                            <div>
                                <div>API carregada!</div>
                                <h1> {user.title} </h1>
                            </div>
                        </Fragment>
                    ))}

                </div>
            )}







        </div>
    )
}