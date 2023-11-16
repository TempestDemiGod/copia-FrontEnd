import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { listadoProject } from '../../../utils/artifact';
export const HomeProject = ({api,tema ,nombre,id}) =>{
    const temaproyecto = tema
    const NombreProyecto = nombre 

    return(
        <>
            <Link type="button" className="btn btn-outline-primary">Mapa de empatía</Link>
            <Link type="button" className="btn btn-outline-primary">Customer Journey map</Link>
            <Link type="button" className="btn btn-outline-primary">User research</Link>
            <Link type="button" className="btn btn-outline-primary">User Persona</Link>
            <Link type="button" className="btn btn-outline-primary">Mapa de arquetipos</Link>
            <Link type="button" className="btn btn-outline-primary">Mapa de Afinidad</Link>        
            <Link type="button" to={`/brainstorming`} className="btn btn-outline-primary" state={{api,tema,id}}>brainstorming</Link>
            <Link type="button" className="btn btn-outline-primary">Diagrama Wall Disney</Link>
            <Link type="button" className="btn btn-outline-primary" >Mapa de Impacto</Link>
            <h1>{NombreProyecto}</h1>
            <h1>{temaproyecto}</h1>
        </>
    )
}