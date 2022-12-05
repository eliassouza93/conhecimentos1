import Item from "./Item"

interface Inomes {
    nome: string
}
export default function Lista({ nomes }: { nomes: Inomes[] }) {
    return (
        <div>
            {nomes.map((user, index) => (
                <Item key={index} {...user} />
            ))}
        </div>
    )
}