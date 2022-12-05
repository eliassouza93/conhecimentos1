 
import style from './Item.module.scss'



export default function Item({ rua, cep, numero }: { rua: string, cep: number, numero: number }) {
    return (
        <div className={style.bloco}>
            <h1> Rua: {rua} </h1>
            <h1> Cep:  {cep}   </h1>
            <h1> Número:  {numero}  </h1>
        </div>
    )
}