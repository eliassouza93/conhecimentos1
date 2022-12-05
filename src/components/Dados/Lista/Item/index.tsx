

export default function Item({ nome, tempo }: { nome: string, tempo: string }) {
    return (
        <div>
            <ul>
                <h3>
                    {nome}
                </h3>
                <p>{tempo}</p>
            </ul>

        </div>
    )
}