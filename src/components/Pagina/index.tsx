import Change from 'components/Change'
import Mostrando from 'components/Mostrando'
import Objetos from 'components/Objetos'
import { useState } from 'react'
import opcao from './opcao.json'
import style from './Pagina.module.scss'

export default function Pagina () {
    const [busca, setBusca] = useState <number | null> (null)

    return(
      <div>
          <Change/>
          <Mostrando/>
            <Objetos />
          <div className={style.estrutura}>{opcao.map(opcao =>(
                  <li key={opcao.value}>
                       {opcao.nome} 
                    </li>
                  
              ))}
             

          </div>
      </div>

       
    )
}