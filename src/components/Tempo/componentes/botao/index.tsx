

export default function Botao({ texto }: { texto: string, type?: 'button' | 'submit' | undefined }) {
    return (
        <div>
            <button> {texto} </button>
        </div>
    )
}