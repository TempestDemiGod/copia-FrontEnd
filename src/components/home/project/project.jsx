import { useEffect, useState } from "react";
import { listado } from "../../../utils/proyects";
import "./project.css";

/* export const Project = () =>{ 
    
    //const ListaProyectos = await listado()

    return(
               <button>djalskjs</button>
            
        
    )
} */
/* export const Project = () =>{
    const [proyectos, setProyecto] = useState([])
    //const ListaProyectos = await listado()

    useEffect(() => {
    const getNotes = async () => {
          const lista = await listado()
          setProyecto(lista.data)
        }
    
        getNotes()
      }, [])

    return(
        <div>
            {proyectos.map((proyecto) => (
               <button key={proyecto.id}>{proyecto}</button>
            ))}
        </div>
    )
} */

