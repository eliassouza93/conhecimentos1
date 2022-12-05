
interface IFiltros {
    id: number
    nome: string
    descricao: string | null
    preco: number
    categoria_id: number

}


export default function Itens({ id, nome, descricao, preco, categoria_id }: IFiltros) {
    return (
        <div>
            <ul>
                <h4>Item {id}</h4>
                <li> {id} </li>
                <li> {nome} </li>
                <li> {descricao} </li>
                <li> {preco} </li>
                <li> {categoria_id} </li>
            </ul>
        </div>
    )

}