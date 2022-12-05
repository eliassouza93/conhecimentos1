import Botao from "../Botao";
import Relogio from "./Relogio/Index";


export default function Cronometro() {
    return (
        <div>
            <p>Escolha um carde e inicie o cronômetro</p>
            <div>
                <Relogio/>
                <Botao type="button"  texto={"Começar!"}/>
            </div>
        </div>

    )
}