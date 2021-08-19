import React from 'react'
import imagem from './imgs/imagem1.png'

export default function Header(){

    return(
        <section>
            <img src={imagem}/>
            <h1>Cursos de programação</h1>
        </section>
    )
}