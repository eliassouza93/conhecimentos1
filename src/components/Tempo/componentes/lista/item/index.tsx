
export default function Item({ tarefa, hora }: { tarefa: string, hora: string }) {

    return (
        <div>
            <li>
                <h3>
                    {tarefa}
                </h3>
                <span>
                    {hora}
                </span>

            </li>
        </div>
    )
}