import produtos from './produtos.json'


export default function VoltaInicio() {

    return (
        <div>
            <h2>produtos</h2>
            {produtos.map((produto) => (
                <div key={produto.id}>
                    <ul>
                        <li>ID: {produto.id} </li>
                        <li >Produto: {produto.description}</li>
                        <li >Nome: {produto.name}</li>
                        <li >Preço: {produto.price}</li>
                    </ul>
                </div>
            ))}
        </div>
    )
}