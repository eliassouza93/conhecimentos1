import axios from "axios"
import { useEffect, useState } from "react"
import Espalhador from "./espalhador"


export default function LojaSite() {
    const produtos = [
        { nome: 'Joao', idade: 22, profissao: 'Editor de video', telefone: 323232323 },
        { nome: 'Maria', idade: 33, profissao: 'Designer', telefone: 59888988 },
        { nome: 'Maria', idade: 33, profissao: 'Designer', telefone: 59888988 },
        { nome: 'Maria', idade: 33, profissao: 'Designer', telefone: 59888988 },
        { nome: 'Maria', idade: 33, profissao: 'Designer', telefone: 59888988 },
        { nome: 'Maria', idade: 33, profissao: 'Designer', telefone: 59888988 },
        { nome: 'Maria', idade: 33, profissao: 'Designer', telefone: 59888988 },
        { nome: 'Maria', idade: 33, profissao: 'Designer', telefone: 59888988 },
        { nome: 'Maria', idade: 33, profissao: 'Designer', telefone: 59888988 },
        { nome: 'Maria', idade: 33, profissao: 'Designer', telefone: 59888988 }
    ]

    useEffect(() => {
        axios.get(' ')
            .then((resposta) => {
              setDado(resposta.data.abilities)
            }).catch((erro) => {
                console.log(erro)
            })
    }, [])
    const [dado, setDado] = useState<any[]>([])

    return (
        <div>
            {dado.map((nome, index) => (
                <div>
                   
                  
                </div>
            ))}


        </div>
    )
}