import React from 'react'
import Dados from './dados.js'

export default function corpo(){

    const cnl='CFB Cursos'
    const yt='youtube.com/cfbcursos'
    const crs='React.js'

    return(
        <section>
            <h2>Curso de React</h2>
            <p>Venha aprender a programar conosco</p>
            <p>Não é grátis não meu filho</p>
            <Dados
                canal={cnl}
                youtube={yt} 
                curso={crs} 
            />

        </section>
    )
}