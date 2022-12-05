import Item from "./Item"

interface ITare {
    nome: string
    tempo: string
}

export default function Lista({ tarefa }: { tarefa: ITare[] }) {
    return (
        <div>
            {tarefa.map((item, index) => (
                <Item  key={index} {...item} />
            ))}

        </div>
    )
}