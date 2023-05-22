import Item from "./Item"

interface IDados {
    hora: string
    nome: string
}

export default function Lista({ dados }: { dados: IDados[] }) {
    return (
        <div>
            {dados.map((item, index) => (
                <Item key={index} {...item} />
            ))}

        </div>
    )
}