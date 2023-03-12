import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';


const DetallePersonaje = () => {
    const [personaje, setPersonaje] = useState({});
    const [cargando, setCargando] = useState(true);
    
    const {id} =  useParams();


    const getPersonaje = async () => {
       const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
       const data = await res.json();

       setPersonaje(data)
       setCargando(false)
    }


    useEffect(() => {
       getPersonaje();

    },[]);

  return (
    cargando ? 
    <h1>Cragando datos.....</h1> :
    <div className="detalleView">
       <div>
           <img src={personaje.sprites.front_default} alt="imagen pesonaje" style={{height:'190px'}}/> 
       </div>
       <div className='datosPersonaje'>
          <p>
           <strong>Nombre</strong> {personaje.name} 
          </p>

       </div>
    </div>
  )
 
}
 
export default DetallePersonaje