import { SetStateAction, useState } from "react"

export default function Change () {

    interface Itipo {
        mostra:string
    }

    const [user, setUser] = useState("")
    
    const mostra = (e: {target: {value: SetStateAction<string>}}) =>{
        setUser(e.target.value)
    }

     

    return (
        <div>
            <input type="text" value={user} name='user' 
            onChange={mostra}/>
        
        <button>clicar</button>
      
        
        
        </div>

      

  
        
    )
}









 