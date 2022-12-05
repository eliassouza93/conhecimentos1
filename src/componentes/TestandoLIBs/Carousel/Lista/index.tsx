import Item from "./Item"
 
interface IEndereco {
    rua: string
    cep: number
    numero: number
}
export default function Lista({ Enderecos }: { Enderecos: IEndereco[] }) {
    return (
        <div>
            {Enderecos.map((dados, index) => (
                <div>

                    <Item key={index}
                        {...dados}
                    />


                </div>

            ))}
        </div>
    )
}