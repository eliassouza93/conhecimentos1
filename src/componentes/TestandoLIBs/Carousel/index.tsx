import React, { useEffect, useState } from 'react';
import Lista from './Lista';
interface IEndereco {
    rua: string
    cep: number
    numero: number
}

export default function Example() {
    const [open, setOpen] = useState(false);
    const [carregando, setCarregando] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCarregando(true)

        }, 300);

    }, [])

    const Enderecos: IEndereco[] = [{
        rua: 'Altamiro Guimaraes',
        cep: 3333444344,
        numero: 23
    }, {
        rua: 'Beotno canhotto',
        cep: 43334343,
        numero: 332
    }, {
        rua: 'Loren camago',
        cep: 334352000,
        numero: 552
    }, {
        rua: 'Lira cunha bento',
        cep: 63662218545,
        numero: 1123
    }, {
        rua: 'Viniciop moares',
        cep: 132325,
        numero: 22
    }, {
        rua: 'Beotno canhotto',
        cep: 43334343,
        numero: 332
    }, {
        rua: 'Loren camago',
        cep: 334352000,
        numero: 552
    }, {
        rua: 'Lira cunha bento',
        cep: 63662218545,
        numero: 1123
    }, {
        rua: 'Beotno canhotto',
        cep: 43334343,
        numero: 332
    }, {
        rua: 'Loren camago',
        cep: 334352000,
        numero: 552
    }, {
        rua: 'Lira cunha bento',
        cep: 63662218545,
        numero: 1123
    }, {
        rua: 'Beotno canhotto',
        cep: 43334343,
        numero: 332
    }, {
        rua: 'Loren camago',
        cep: 334352000,
        numero: 552
    }, {
        rua: 'Lira cunha bento',
        cep: 63662218545,
        numero: 1123
    }, {
        rua: 'Beotno canhotto',
        cep: 43334343,
        numero: 332
    }, {
        rua: 'Loren camago',
        cep: 334352000,
        numero: 552
    }, {
        rua: 'Lira cunha bento',
        cep: 63662218545,
        numero: 1123
    }]


    return (
        <div>
            {carregando ? (
                <div><h1>Bem vindo!</h1>

                    <Lista Enderecos={Enderecos} />


                </div>) : (
                <div>
                    <h1>Carregando!</h1>

                </div>
            )}



        </div>
    )

}

