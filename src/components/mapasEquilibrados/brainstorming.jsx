import React, { useState, useEffect } from "react";

import Mermaid from "../../utils/Mermaid.jsx";
import "./brainstorming.css";
import Mapa from "./mainmappTab.jsx";
import { useLocation } from "react-router-dom";
export const Brainstorming = () => {
  const location = useLocation();
    
  console.log(location.state);
  let apikey  = location.state.api
  let tema  = location.state.tema
  let id  = location.state.id
  console.log('chamoooo  '+ apikey)
  console.log('brain  ')
  return(
    <div>
      <Mapa id={apikey} tema={tema} api={id}/>
    </div>
     
  ) 
}

export default Brainstorming