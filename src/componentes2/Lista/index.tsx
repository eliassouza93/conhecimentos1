import { IUsuarios } from "componentes2/IUsuarios"
import Item from "./Item"

export default function Lista({ Autentica }: { Autentica: IUsuarios[] }) {
    return (
        <div>
            {Autentica.map((item,index) => (
                <Item key={index} {...item} />
            ))}
        </div>
    )
}