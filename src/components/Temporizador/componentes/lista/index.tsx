 
import { Itarefa } from "../Interfaces/tarefa"
import Item from "./Item"
 

export default function Lista({ tarefas }: { tarefas: Itarefa[] }) {

    return (
        <aside  >
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item key={index}
                        {...item}
                    />
                ))}

            </ul>
        </aside>
    )
}