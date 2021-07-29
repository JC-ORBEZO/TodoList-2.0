//import logo from './logo.svg';
import './App.css';
import HomePage from "./components/homePage/";
import PageOne from "./components/pages/";
import {useState} from "react";

function App() {
  const [showCover,setShowCover]=useState(true);
  //Ocultar Portada
  const ocultarPortada=()=>{
    setShowCover(false);
  }
  //Mostrar Portada
  const mostrarPortada=()=>{
    setShowCover(true);
  }
  return (
    <>
    {showCover===true ? <HomePage ocultarPortada={ocultarPortada}/> : <PageOne mostrarPortada={mostrarPortada}/>}
    </>
  );
}

export default App;
