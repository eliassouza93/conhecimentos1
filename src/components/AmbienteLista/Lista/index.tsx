import Item from "./Item"

interface IPessoa {
    nome: string
    idade: number
}
export default function Lista({ humano }: { humano: IPessoa[] }) {
    return (
        <div>
            {humano.map((user, index) => (
                <Item key={index}
                    {...user}   
                />
            ))}

        </div>
    )
}