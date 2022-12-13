

export default function ItemAlura({ title,
    description,
    photo,
    size,
    serving,
    price,
    id,
}: {
    title: string
    description: string
    photo: string
    size: number
    serving: number
    price: number
    id: number
}) {
    return (
        <div>
            <h2> {title} </h2>
            <p> {description} </p>
            <img src={photo} alt="prato" />
            <span> {size} </span>
            <span> {serving} </span>
            <span> {price} </span>
            <span> {id} </span>
        </div>
    )
}

