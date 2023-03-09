//Importaciones
import React from 'react';
import sicolog from './sicolog.png' //Logo de sico
import prudence from './prudence.png' //Logo de prudence
import Button from 'react-bootstrap/Button'; //Botones

//Función (Es donde se ubica el contenido)
function Contenido() {

  return (
    //Ubicación de los encabezados
    <div>
      {/* Indicaciones que se encuentran en el encabezado*/}
      <h3>Deposite $10.00</h3> 
     <h5> Seleccione una opcion</h5>

     {/* Ubicación de las imagenes*/}
      <div className>
        <div className>

          <br></br><br></br><br></br>

 {/* Inserción de sico*/}
          <img src={sicolog}
            alt="React Bootstrap logo"
          /><br></br><br></br>
          {/* Inserción de boton para realizar compra de sico */}
          <Button variant="dark">Sico</Button>
          <br></br><br></br><br></br>

           {/* Inserción de prudence*/}
          <img src={prudence}
            alt="React Bootstrap logo"
          /> <br></br><br></br>
            {/* Inserción de boton para realizar compra de prudence */}
          <Button variant="dark">Prudence</Button>

        </div>



      </div>



    </div>

  )

}
//Exportación de la pagina
export default Contenido