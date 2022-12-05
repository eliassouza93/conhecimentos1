import { useEffect, useState } from "react"
import style from './Reunia.module.scss'

export default function Reuniao() {

    const [final, setFInal] = useState(false)

    useEffect(() => {
        setFInal(true)
        setTimeout(() => {
            setFInal(false)

        }, 2000);

    }, [])
    return (
        <div className={style.bloco}>
            {final ? (<div className={style.carregando}></div>
            ) : (
                <h1> Sistema carregado com sucesso!</h1>


            )
            }
        </div >
    )
}