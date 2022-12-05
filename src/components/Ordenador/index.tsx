import { useEffect } from 'react';
import { useState } from 'react';
import style from './ordenador.module.scss'

type Repositorio = {
    full_name:string;
    description:string
    name:string
}

export default function Ordenador () {

const [reporitorios, setRepositorios] = useState<Repositorio[]>([])

useEffect(() =>{
    fetch('http://api.github.com/users/eliassouza93/repos')
    .then(response => response.json())
    .then(data => {
        setRepositorios(data)
    })
}, [])

    return (
        <div className= {style.pagina}>
            {reporitorios.map(repo => {
                return(
                    <li key={repo.full_name}>
                        <strong> {repo.full_name} </strong>
                        <h3> {repo.name} </h3>
                        <li> {repo.description} </li>
                       
                    
                    </li>
                )
            })}

            

        </div>
    )
}