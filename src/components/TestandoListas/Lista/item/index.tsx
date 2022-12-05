 
import style from '../../TesteLista.module.scss'

export default function Item({ nome, idade }: { nome: string, idade: number }) {
    return (
        <div className={style.module}>
            <li>
                <h3>
                    {nome}
                </h3>
                <h5>
                    {idade}
                </h5>
            </li>

        </div>
    )
}