import React, { useState, useEffect } from "react";
import Mermaid from "../../../utils/Mermaid";
import { UpDateArtifact, listadoProject, registerArtifact } from '../../../utils/artifact';
// import { listado } from "../../utils/proyects";

let idProject
let apikey
let temaproyecto
let respuestaObtenida
let respuestaArtefactoID
async function verProyecto(){
  const data = {
    idProject
}
  let proyecto = await listadoProject(data)
  console.log('funco')
  console.log(typeof(proyecto))
  console.log(proyecto)
  apikey = proyecto.data.apiKey
  temaproyecto = proyecto.data.tema
  console.log(proyecto.data.apiKey)
  console.log(proyecto.data.tema)
}
function MindmappingTab({ prompt, setPrompt, result, setResult, callOpenAi }) {

  return (
    <div className="App">
      <div className="outer">
        <div>
          <div>Prompt de entrada</div>
          <div className="textarea text-extendido">
            <textarea
              id="prompt"
              name="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div>
          <div>Salida</div>
          <div className="textarea text-extendido">
            <textarea
              value={result}
              onChange={(e) => setResult(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
      <button className="btn form-control btn btn-outline-dark" onClick={() => callOpenAi()}>Generar Artefacto</button>
    </div>
  );
}

function SettingsTab({
  token,
  setToken,
  model,
  setModel,
  promptTemplate,
  setPromptTemplate,
  maxTokens,
  setMaxTokens,
  temperature,
  setTemperature
}) {
  const handlePromptTemplateChange = (e) => {
    setPromptTemplate(e.target.value);
    localStorage.setItem("promptTemplate", e.target.value);
  };

  function extractIntFromString(str) {
    const result = str.match(/\d+/);
    if (result) {
      return parseInt(result[0], 10);
    } else {
      return 0;
    }
  };
console.log('funciono chamo .. ' + idProject)
  function extractFloatFromString(str) {
    str = str.replace(',', '.'); // Reemplazar coma con punto como separador decimal
    const result = str.match(/^-?(\d+)?(\.\d*)?/); // Une dígitos opcionales antes y después del punto decimal
    if (result) {
      return result[0] === '' ? '0' : result[0]; // Devuelve '0' si la entrada es una cadena vacía
    } else {
      return '0';
    }
  }

  const handleMaxTokensChange = (e) => {
    let maxTokens = extractIntFromString(e.target.value);
    setMaxTokens(maxTokens);
    localStorage.setItem("maxTokens", maxTokens);
  };

  const handleTemperatureChange = (e) => {
    let temperate = extractFloatFromString(e.target.value);
    setTemperature(temperate);
    localStorage.setItem("temperate", temperate);
  };

  return (
    <div>
      <div>OpenAI API_KEY</div>
      <div>
        <input
          className="form-control bg-dark text-white mb-3"
          type="password"
          id="token"
          name="token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="model">Motor GPT:</label>
        <select
          name="model"
          className="form-control bg-dark text-white mb-3"
          id="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        >
          <option value="gpt-4">gpt-4</option>
          <option value="gpt-3.5-turbo">gpt-3.5-turbo</option>
          <option value="gpt-3.5-turbo-16k">gpt-3.5-turbo-16k</option>
        </select>
      </div>

      <div>
        <label htmlFor="maxTokens">Max de Tokens a usar:</label>
        <input
          type="text"
          className="form-control bg-dark text-white mb-3"
          id="maxTokens"
          name="maxTokens"
          value={maxTokens}
          onChange={handleMaxTokensChange}
        />
      </div>

      <div>
        <label htmlFor="temperature">Temperatura:</label>
        <input
          type="text"
          className="form-control bg-dark text-white mb-3"
          id="temperature"
          name="temperature"
          value={temperature}
          onChange={handleTemperatureChange}
        />
      </div>

      <div>
        <label htmlFor="promptTemplate">Prompt Template:</label>
        <textarea
          type="text"
          className="form-control bg-dark text-white mb-3"
          id="promptTemplate"
          name="promptTemplate"
          value={promptTemplate}
          onChange={handlePromptTemplateChange}
        />
      </div>
    </div>
  );
}

export default function Disney({id,tema,api,respuestaDB,ArtecatoDB}) {
  
  useEffect(() => {
    idProject = id
    apikey= api
    temaproyecto = tema
    respuestaObtenida = respuestaDB
    respuestaArtefactoID  = ArtecatoDB
    // verProyecto()
    setToken(apikey)
  },[]);
  useEffect(() => {
    setPrompt(temaproyecto)
    setResult(respuestaObtenida)
  },[]);
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [activeTab, setActiveTab] = useState("Mindmapping");
  const [token, setToken] = useState("");
  const [model, setModel] = useState("gpt-3.5-turbo");
  const [maxTokens, setMaxTokens] = useState(
    localStorage.getItem("maxTokens") || 3000
  );
  let respuesta = result
  let promptGlobal
  if(prompt == '' ){
    promptGlobal = temaproyecto
  }else{
    promptGlobal = prompt
  } 
  
  async function guardarMapa(){
    let prompt = promptGlobal
    let id = idProject
    let nombre = 'Mapa de walt disney'
    let idArtefacto = respuestaArtefactoID 
    console.log('idArtefacto')
    console.log(idArtefacto)
    const data = {
      idArtefacto,
      respuesta
  }
  console.log(data)
  const result = await UpDateArtifact(data)
    console.log(result)
  }
  const [temperature, setTemperature] = useState(
    localStorage.getItem("temperature") || 0.7
  );

  const [promptTemplate, setPromptTemplate] = useState(
    localStorage.getItem("promptTemplate") ||
      `Cree un diagrama de Walt Disney basado en las aportaciones del usuario como estos ejemplos:
       Método Walt Disney: 'Asistente virtual para la gestion de proyectos de innovación'
       \t\tFase del Soñador:
       \t\t\t\t¿Cuál es la visión más audaz e inspiradora para nuestro proyecto?
       \t\t\t\t\t\tLa visión más audaz para nuestro proyecto es transformar la forma en que se gestionan los proyectos de innovación mediante la creación de un asistente virtual altamente inteligente. Imaginemos un futuro donde la inteligencia artificial guía y potencia la creatividad de los equipos, acelerando el proceso de innovación de manera sorprendente.
       \t\t\t\t¿Cuáles son los elementos clave de un escenario ideal sin restricciones?
       \t\t\t\t\t\tEn un escenario ideal sin restricciones, nuestro asistente virtual sería capaz de comprender y generar ideas innovadoras, gestionar automáticamente los recursos necesarios, y adaptarse de manera proactiva a los cambios en el entorno. Además, facilitaría la colaboración entre equipos de manera fluida, independientemente de su ubicación geográfica.
       \t\t\t\t¿Cómo se vería el éxito absoluto sin preocuparnos por limitaciones prácticas?
       \t\t\t\t\t\tEl éxito absoluto se reflejaría en la transformación radical de la eficiencia y la efectividad en la gestión de proyectos de innovación. Nuestro asistente virtual sería reconocido como un catalizador clave para el desarrollo de ideas revolucionarias, llevando a la empresa a la vanguardia de la innovación global.
       \t\tFase del Realista:
       \t\t\t\t¿Cómo podemos implementar concretamente las ideas generadas en la fase del Soñador?
       \t\t\t\t\t\tPara implementar las ideas generadas, debemos comenzar por desarrollar un prototipo funcional del asistente virtual. Seleccionaríamos un equipo multidisciplinario, asignaríamos roles y estableceríamos un cronograma detallado para el desarrollo iterativo del prototipo.
       \t\t\t\t¿Cuáles son los recursos necesarios y su disponibilidad?
       \t\t\t\t\t\tNecesitamos recursos técnicos como desarrolladores de inteligencia artificial, programadores, y expertos en aprendizaje automático. Además, se requieren recursos financieros para la investigación y desarrollo. La disponibilidad de estos recursos dependerá de las alianzas estratégicas y la inversión que podamos asegurar.
       \t\t\t\t¿Cuáles son los pasos prácticos para llevar a cabo la visión de manera realista?
       \t\t\t\t\t\tLos pasos prácticos incluyen el desarrollo incremental del asistente, pruebas continuas con usuarios reales, y ajustes basados en retroalimentación. Además, debemos establecer alianzas con empresas de tecnología para acceder a recursos avanzados y garantizar la seguridad y ética en el uso de la inteligencia artificial.
       \t\tFase del Crítico:
       \t\t\t\t¿Cuáles son los posibles obstáculos que podríamos enfrentar durante la implementación?
       \t\t\t\t\t\tPosibles obstáculos podrían incluir la resistencia al cambio por parte de los equipos, problemas éticos relacionados con la inteligencia artificial, y desafíos regulatorios. La identificación y mitigación proactiva de estos obstáculos será crucial.
       \t\t\t\t¿Hay aspectos del plan que podrían no ser prácticos o eficientes?
       \t\t\t\t\t\tEs posible que algunos aspectos del plan inicial, como la velocidad de adopción por parte de los equipos, no sean tan eficientes como se espera. Se deben realizar evaluaciones periódicas y ajustar el plan según sea necesario para garantizar la eficiencia continua.
       \t\t\t\t¿Qué ajustes y mejoras podríamos realizar para optimizar la viabilidad y el éxito del proyecto?
       \t\t\t\t\t\tPara optimizar la viabilidad y el éxito, podríamos mejorar la interfaz del asistente para hacerla más intuitiva, proporcionar formación continua a los usuarios, y realizar actualizaciones regulares basadas en el feedback. Además, la colaboración con expertos en ética de la inteligencia artificial podría mejorar la aceptación y confianza en el sistema.
      

      Solo una raíz, deja Método Walt Disney y agrega el tema como encabezado ,ademas sigue las tres fases: Fase del Soñador, Fase del Realista y Fase del Crítico. No es necesario utilizar "mermaid", "\`\`\`", or "graph TD". Responder sólo con código y sintaxis.`
  );
  

  // gpt-3.5-turbo
  async function callOpenAi() {
    setResult("");

    console.log(temperature);
   
    const url = "https://api.openai.com/v1/chat/completions";
    const data = {
      model: model,
      messages: [
        {
          role: "system",
          content: promptTemplate
        },
        {
          role: "user",
          content: prompt  
        },
        {
          role: "assistant",
          content: "Me gustaria que des respuesta a las tres fase: Fase del Soñador, Fase del Realista y Fase del Crítico del Metodo Walt Disney segun el tema :" + prompt
        }
      ],
      stream: true,
      max_tokens: maxTokens,
      temperature: Number(temperature)
    };
    console.log(data)
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      console.error("Error:", response.statusText);
      return;
    }
    
    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let text = "";

    let resultString = ""; // Defina resultString aquí para recopilar todos los resultados

    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }

      text += decoder.decode(value, { stream: true });
      const lines = text.split("\n");
      text = lines.pop();

      for (const line of lines) {
        const message = line.replace(/^data: /, "").trim();

        if (message === "") {
          continue;
        }

        if (message === "[DONE]") {
          /*setResult((prev) => {
            let result = processString(prev);
            console.log(result);
            return result;
          });*/
          return;
        }

        try {
          const parsed = JSON.parse(message);
          let result = parsed.choices[0].delta.content || "";

          // Agregue cada línea a la cadena de resultados
          if (
            result !== "```" &&
            result !== "```mermaid" &&
            !result.includes("mermaid")
          ) {
            resultString += result;
          }

          //Si el resultado contiene una nueva línea, actualice el estado del resultado.
          if (
            result.includes("\n") &&
            result !== "```" &&
            result !== "```mermaid" &&
            !result.includes("mermaid")
          ) {
            setResult(resultString);
          }
        } catch (error) {
          console.error("No se pudo analizar JSON el mensaje de flujo", {
            message,
            error
          });
        }
      }
    }

    console.log("before processString");
    //Establezca el estado final después de que finalice el ciclo si aún no se ha configurado
    if (
      !resultString.includes("\n") &&
      result !== "```" &&
      result !== "```mermaid" &&
      !result.includes("mermaid")
    ) {
      setResult(resultString);
    }
    
  }

  return (
    <div className="App">
      <div className="tab-buttons">
        <button className="tab-button btn btn-outline-success" onClick={() => guardarMapa()}>guardar mapa</button>
        <button
          className="tab-button btn btn-outline-primary"
          onClick={() => setActiveTab("Mindmapping")}
        >
          Artefacto
        </button>
        <button className="tab-button btn btn-outline-primary" onClick={() => setActiveTab("Settings")}>
          Configuración
        </button>
      </div>
      {activeTab === "Mindmapping" ? (
        <MindmappingTab
          prompt={prompt}
          setPrompt={setPrompt}
          result={result}
          setResult={setResult}
          callOpenAi={callOpenAi}
          model={model}
          promptTemplate={promptTemplate}
        />
      ) : (
        <SettingsTab
          token={token}
          setToken={setToken}
          model={model}
          setModel={setModel}
          promptTemplate={promptTemplate}
          setPromptTemplate={setPromptTemplate}
          maxTokens={maxTokens}
          setMaxTokens={setMaxTokens}
          temperature={temperature}
          setTemperature={setTemperature}
        />
      )}
      
    </div>
  );
}
