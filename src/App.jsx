import { useState } from 'react'
import PWABadge from './PWABadge.jsx'
import './App.css'

function Boton({funcion}){
  return (
    <button onClick={funcion}>Cargar</button>
  )
}

function Galeria({ fotos }) {
  return (
    <>
      {fotos.map((imagen, index) => (
        <img key={index} src={imagen.url} />
      ))}
    </>
  )
}

function App() {
  const [fotografias, setFotografias] = useState([])

  async function GetFotos() {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/photos'
      )

      const fotos = await response.json()

      setTimeout(() => {
        setFotografias(fotos)
      }, 3000)

    } catch (error) {
      console.error('Ocurrió un error:', error)
    }
  }

  return (
    <>
      <h1>Bienvenidos a mi galería</h1>

      <Galeria fotos={fotografias} />

      <Boton funcion={GetFotos}/>

      <PWABadge />
    </>
  )
}

export default App