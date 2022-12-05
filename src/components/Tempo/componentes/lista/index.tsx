import { Key } from "react";
import Item from "./item";





export default function Lista({ tarefas }: { tarefas: any }) {

    return (
        <aside  >
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item: JSX.IntrinsicAttributes & { tarefa: string; hora: string; }, index: Key | null | undefined) => (
                    <Item key={index}
                        {...item}
                    />
                ))}

            </ul>
        </aside>
    )
}