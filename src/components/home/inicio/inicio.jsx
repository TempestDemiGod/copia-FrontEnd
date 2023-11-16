import './inicio.css'
import brain from "../../../assets/compu.jpg";

export const InicioInfo = () => {
    
	return(
    <>
            <div className="container box">
            <h1>Aplicacion de Estructuracion ALICE</h1>
                <div className="info-top-inicio">
                    <p>Alice es una aplicación la cual fue creada con el objetivo de que los usuarios puedan tener una trazabilidad coherente en sus proyectos de Innovacion, lo que permitira que puedan seguir los pasos necesarios en una secuencia logica que evite que se creen incoherencias en el proceso de gestacion del proyecto de Innovacion.</p>
                    <div>
                        <img src={brain} />
                    </div>
                </div>
            <h2>Que es el Framekork lean StartUp?</h2>
                <div className='Info lean'>
                    <p>El framework o metodologia Lean Startup es un enfoque revolucionario para el desarrollo de negocios y la innovación que busca maximizar la eficiencia al tiempo que minimiza el desperdicio. En su núcleo, se basa en la aplicación de los principios lean a la creación de empresas, adoptando un ciclo de aprendizaje rápido y adaptativo. El framework Lean Startup, popularizado por Eric Ries, se centra en la construcción iterativa y el aprendizaje validado, alentando a los emprendedores a validar sus hipótesis de negocio a través de experimentos de manera ágil. Se compone de procesos como la creación de un MVP (Producto Mínimo Viable), la medición de resultados, y la adaptación continua a través de ciclos de construir-medir-aprender, permitiendo a las startups pivotar o perseverar en sus estrategias según la retroalimentación del mercado. Este enfoque no solo reduce el riesgo de fracaso al validar ideas de manera temprana, sino que también optimiza la asignación de recursos, acelerando así el camino hacia el desarrollo de productos exitosos.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/l9ET1WqRvSQ?si=BPSscomRMzxGowOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                
            <h2>Que artefactos se Utilizaran en esta aplicación web</h2>
                <p>En el presente asistente nos enfocamos en la fase de ideación del proyecto para ello se podra realizar los siguientes entregables</p>
                <p> * Mapa de empatía</p>
                <p> * Customer Journey map</p>
                <p> * User research</p>
                <p> * User Persona</p>
                <p> * Mapa de arquetipos</p>
                <p> * Tecnica de los seis sombreros</p>
                <p> * Mapa de Afinidad</p>
                <p> * Brainstorming</p>
                <p> * Diagrama de Imagineria de Wall Disney</p>
                <p> * Mapa de Impacto</p>

            </div>
            

    
  </>    
	)
}
export default InicioInfo;