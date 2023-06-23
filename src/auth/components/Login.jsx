import logo from "../../assets/logo-certus.webp";
import ListIconLogin from "./ListIconLogin";
import fondo from "../../assets/fondo-login.jpg";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useState } from "react";
import WelcomeLogin from "./WelcomeLogin";
import { WelcomeScreen } from "./WelcomeScreen";
import { ContainerLogin } from "./ContainerLogin";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
    const [clicked,setClicked]=useState(false);
    const navigate = useNavigate();
    const changeInputPassword = (e)=>{
        clicked?(  
                <>
                    <InputText placeholder="Keyword" type="password"/>
                    <span className="p-inputgroup-addon" onClick={(e)=>changeInputPassword(e)}>
                        <i className="pi pi-eye cursor-pointer"></i>
                    </span>
                </>
                
            ):(
                <>
                
                </>
            )
            
        setClicked(!clicked);

        console.log(e);
    }
  return (
    <>
        <ContainerLogin>
            <WelcomeScreen/>
            <div className="w-full lg:w-6 p-2 lg:p-7 surface-card">
                <div className="text-900 text-2xl font-medium mb-6">
                    Login
                </div>
                <div className="field">
                    <label htmlFor="email" className="font-bold">
                        Correo
                    </label>
                    <InputText placeholder="email@email.com" className="w-full" autoFocus/> 
                </div>
                <div className="field">
                    <label htmlFor="email" className="font-bold">
                        Contraseña
                    </label>
                    <div className="p-inputgroup flex-1 w-full">
                        <InputText placeholder="Keyword" type={clicked?'text':'password'}/>
                        <span className="p-inputgroup-addon cursor-pointer" onClick={(e)=>changeInputPassword(e)}>
                            <i className={`${clicked?"pi pi-eye-slash":"pi pi-eye"}`}></i>
                        </span>
                    </div> 
                    <Button className="mt-4 w-full" label="Ingresar" onClick={()=>navigate("/cursos")}/>
                    <div className="p-divider p-component p-divider-horizontal p-divider-solid p-divider-center my-6">
                       <div className="p-divider-content">
                            <span className="text-600 font-normal text-sm">O</span>
                        </div> 
                    </div>
                    <div className="mt-6 text-center text-600">
                        {"¿No tienes una cuenta? "}
                        <Link className="font-medium text-blue-500" to="/register">Registrate</Link>
                    </div>
                </div>
            </div>
        </ContainerLogin>
                
                
            
    
    </>
  );
}
