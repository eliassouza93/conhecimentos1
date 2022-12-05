export default function Item ({nome, idade} : {nome:string, idade:number}) {
    return (
        <div>
            <ul>
                <h3>
                    {nome} 
                        
                </h3>
                <h5>
                    {idade}
                </h5>
            </ul>
        </div>
    )
}