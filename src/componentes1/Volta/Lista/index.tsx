import Item from "./Item"


interface IPesso {
    nome: string
    endereco: string
    numero: number
}

export default function Lista({ setPessoas }: { setPessoas: IPesso[] }) {
    return (
        <div>

            {setPessoas.map((dado, index) => (

                <Item key={index}  {...dado} />


            ))}


        </div>
    )
}