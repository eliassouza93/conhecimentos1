
import styles from './Item.module.scss'
export default function Item({ nome, endereco, numero }: { nome: string, endereco: string, numero: number }) {
    return (
        <div>
            <ul  className={styles.module}>

                <ol><h5>Pessoa!</h5></ol>
                <li> {nome} </li>
                <li> {endereco} </li>
                <li> {numero} </li>
            </ul>
        </div>
    )
}