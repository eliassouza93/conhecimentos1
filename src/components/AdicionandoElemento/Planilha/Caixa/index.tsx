import CaixaProp from "./CaixaProp"

interface ITodos {
    cpf: string
    numero: number
}
export default function Caixa({ dados }: { dados: ITodos[] }) {
    return (
        <div>
            {dados.map((dado, index) => (
                <div>
                    <CaixaProp key={index}
                        {...dado}
                    />
                </div>
            ))}

        </div>
    )
}