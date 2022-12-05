
interface IPRodutos {
    nome: string
    idade: number
    profissao: string
    telefone: number


}
export default function Espalhador({ nome, idade, profissao, telefone }: IPRodutos) {
    return (
        <div>
            <ul>
                <h3>Usuário</h3>
                <li>{nome} </li>
                <li>{idade} </li>
                <li>{profissao} </li>
                <li>{telefone} </li>
                <hr />
            </ul>


        </div>
    )
}