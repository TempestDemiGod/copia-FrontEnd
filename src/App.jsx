import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MenuMain } from './components/navbar/Navbar'
import  {Logeo} from './components/logeo/Logeo'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home}  from './components/home/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Brainstorming } from './components/mapasEquilibrados/brainstorming'
// import { Brainstorming } from './components/mapasEquilibrados/brainstorming'


function App(){
  const [mostrarMenu, setMostrarMenu] = useState(true)
  const logeo = () => {
    setMostrarMenu(!mostrarMenu)
  }
  return(
    // <>   
    //   {mostrarMenu ? <Logeo /> : <Home /> }

    //   <button onClick={logeo}>Logeo</button> 
    // </>

    <>   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Logeo />
          } />
          <Route path="/Home" element={
            <Home />
          } />
          <Route path="/brainstorming" element={
            <Brainstorming />
          } />
          </Routes>
      </BrowserRouter>
    </>
  ) 
}



export default App
