import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Personajes = () => {
     const [idPersonaje, setIdPersonaje] = useState("");
     const [listaPersonajes, setListaPersonajes] = useState([]);   
     const navigate = useNavigate();

     const getPersonajes = async () => {
        const res = await fetch ('https://pokeapi.co/api/v2/pokemon/');
        const data = await res.json();    
        

        let dataSelect = [];
        data.results.map((personaje) => {
           dataSelect.push({url:personaje.url, nombre:personaje.name })
        }); 

        setListaPersonajes(dataSelect);
        console.log(dataSelect);
     }    

     
const verDetalle = () => {
   let id = idPersonaje.replace('https://pokeapi.co/api/v2/pokemon/','');
   id = id.replace('/','');
   console.log(id);
   navigate(`/personajes/${id}`)
}



     useEffect( () => {
          getPersonajes();     
     },[]);


  return (
    <div className="pokemonView">
       <h1>Selecciona tu pokemon</h1>        
       <select name="id" id="id" onChange={(e)=> setIdPersonaje(e.target.value)}>
          <option value= "">Seleccione</option>
           {
               listaPersonajes.map((p) => <option key={p.url} value={p.url}>{p.nombre}</option> )
           }
       
       </select>
       <Button variant="info" onClick={(e) => verDetalle()}>ver detalle</Button>
    </div>
  )
}

export default Personajes