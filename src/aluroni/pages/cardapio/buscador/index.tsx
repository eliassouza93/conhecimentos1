import cardapio from '../../../data/cardapio.json'
import PesquisadorAlura from '../pesquisador'
import LiscaAlura from './lista'

export default function BuscadorAlura() {
    return (
        <div>
            {cardapio.map((uni) => (
                <LiscaAlura setPratos={cardapio} />
             

            ))}
            

        </div>
    )
}