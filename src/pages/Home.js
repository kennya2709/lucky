//Esta es la pagina principal
//Importaciones de la Navbar y estilos

import React from 'react'
import BarraSuperior from '../Components/BarraSuperior'
import Contenido from '../Components/Contenido'
//Declaración de funciones
function Home() {
  return (
    // Etiqueta anomina
    <>
    {/* Exportaciones de archivos, sobre la navbar y el contenido */}
    <BarraSuperior/>
    <Contenido/>
    </>
  )
}
 
// Exportaciones de la pagina actual
export default Home