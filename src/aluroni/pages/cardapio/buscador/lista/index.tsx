import ItemAlura from "./item"
interface IPratos {
    title: string
    description: string
    photo: string
    size: number
    serving: number
    price: number
    id: number
}
export default function LiscaAlura({ setPratos }: { setPratos: IPratos[] }) {
    return (
        <div>
            {setPratos.map((unidade) => (
                <ItemAlura key={unidade.id}
                    {...unidade}
                />
            ))}
        </div>
    )
}