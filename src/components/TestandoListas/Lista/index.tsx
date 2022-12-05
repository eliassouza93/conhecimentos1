import { Fragment, useState } from "react";
import { IPessoas } from "../IPessoas";
import Item from "./item";


export default function Lista({ tarefas }: { tarefas: IPessoas[] }) {


    return (
        <div>
            <h2>Nomes e idades</h2>
            <ul>
                {tarefas.map((item) => (
                    <Fragment key={item.id}>
                        <Item  {...item} />
                    </Fragment>
                ))}

            </ul>

        </div>
    )
}