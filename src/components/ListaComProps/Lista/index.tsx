 
import Item from "./item"

interface ITarefa {
    id:number
    nome: string
    idade: number
}

export default function Lista({ tarefas }: { tarefas: ITarefa[] }) {
    return (
        <div>
            {tarefas.map((user) => (
                <Item key={user.id}
                    {...user}
                />
            ))}

        </div>
    )
}