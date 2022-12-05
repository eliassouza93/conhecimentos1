 
import Ordenador from "components/Ordenador";
import { SetStateAction, useState } from "react";
import cardapio from './itens.json'
import Item from './Item'
import styles from './Item.module.scss'

export default function Testando () {

 
    
    return(
        <div className={styles.itens}>
        
           {cardapio.map(item=>(
               <Item key={item.id}
                {...item}
               />
           ))}
             

        </div>

     
    )
}