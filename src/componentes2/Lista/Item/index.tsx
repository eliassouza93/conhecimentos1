


export default function Item({ nome, senha, }: { nome: string, senha: string, }) {
    return (
        <div>
            <h4> Usuário {nome} autenticado!</h4>
            <p> {nome} </p>
            <p> {senha} </p>
        </div>
    )
}