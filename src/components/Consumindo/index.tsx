import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import style from './Consumindo.module.scss'
type Repositorio = {
    full_name:string
    description:string
}

export default function Consumindo() {
    const [repositories, setRepositories] = useState<Repositorio []>([])
    useEffect(() =>{
        axios.get('https://api.github.com/users/eliassouza93/repos')
        .then(response =>{
            setRepositories(response.data)
        })
    },[])
    return (
        <div className={style.divi}>
            <h1>GitHub Elias de Souza</h1> 
            {repositories.map(repo => {
                return(
                    <li className={style.estilo} key={repo.full_name}>
                        <h3> {repo.full_name} </h3>


                    </li>
                        

                )
            }
            )}
           



        </div>
    )
}
