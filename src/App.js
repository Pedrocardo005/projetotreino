import React from 'react'
import Header from './componentes/header.js'
import Corpo from './componentes/corpo.js'
import { AuthContext } from './providers/auth.js'

export default function App(){
  const { user, setUser } = React.useContext(AuthContext)

  console.log(user)

  return(
    <section className="App">
      <h1>Texte de cor</h1>
      <input type="text" onChange={ e => {setUser({name: e.target.value})}}/>
      <Header/>
      <Corpo/>
    </section>
  )
}