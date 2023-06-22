import logo from "../../assets/logo-certus.webp";
import ListIconLogin from "./ListIconLogin";
import fondo from "../../assets/fondo-login.jpg";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useState } from "react";
import WelcomeLogin from "./WelcomeLogin";
export const WelcomeScreen = () => {
    const items=[
        {
            icon:"pi pi-inbox",
            title:"Sin limites",
            description:"Sin limites de enseñanza",
        },
        {
            icon:"pi pi-shield",
            title:"Usamos Seguridad",
            description:"Sin limites de enseñanza",
        },
        {
            icon:"pi pi-globe",
            title:"Usamos Seguridad",
            description:"Sin limites de enseñanza",
            
        }
    ];
  return (
    <div className="w-full lg:w-6 p-2 lg:px-7 lg:py-5" style={{backgroundColor:"rgba(255,255,255,.7)"}}>
        <WelcomeLogin
            logo={logo}
            description={"Bienvenidos a nuestro proyecto de cursos virtuales"} 
            welcome={"Somos estudiantes del instituto Certus de V ciclo y presentamos el proyecto de cursos virtuales"}
        />
        <ListIconLogin items={items}/>
    </div>
  )
}
