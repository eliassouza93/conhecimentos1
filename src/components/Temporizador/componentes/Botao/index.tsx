

export default function Botao ({texto} :{texto:string, type?: 'button' | 'submit' |'reset' | undefined}) {
    return (
        <div>
            <button>{texto}</button>
        </div>
    )
}