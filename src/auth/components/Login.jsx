import logo from "../../assets/logo-certus.webp";
import ListIconLogin from "./ListIconLogin";
import fondo from "../../assets/fondo-login.jpg";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useRef, useState } from "react";
import WelcomeLogin from "./WelcomeLogin";
import { WelcomeScreen } from "./WelcomeScreen";
import { ContainerLogin } from "./ContainerLogin";
import { Link, useNavigate } from "react-router-dom";
import { Toast } from 'primereact/toast';
export default function Login({formik,isFormFieldInvalid,toast}) {
    
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
    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };
  return (
    <>
        <Toast ref={toast} />
        <ContainerLogin>
            <WelcomeScreen/>
            <div className="w-full lg:w-6 p-2 lg:p-7 surface-card">
                <div className="text-900 text-2xl font-medium mb-6">
                    Login
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="field">
                        <label htmlFor="email" className="font-bold">
                            Correo
                        </label>
                        <InputText 
                            placeholder="email@email.com" 
                            className={`w-full ${isFormFieldInvalid('username') && 'p-invalid'}`}
                            autoFocus 
                            id='username'
                            name='username'
                            onChange={formik.handleChange}
                            value={formik.values.username}
                        />
                        {getFormErrorMessage('username')}
                    </div>
                    <div className="field">
                        <label htmlFor="email" className="font-bold">
                        Contraseña
                        </label>
                        <div className="p-inputgroup flex-1 w-full">
                            <InputText 
                                placeholder="Contraseña" 
                                type={clicked?'text':'password'}
                                className={`w-full ${isFormFieldInvalid('username') && 'p-invalid'}`}
                                id='password'
                                name='password'
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            <span className="p-inputgroup-addon cursor-pointer" onClick={(e)=>changeInputPassword(e)}>
                                <i className={`${clicked?"pi pi-eye-slash":"pi pi-eye"}`}></i>
                            </span>
                            
                        </div> 
                        {getFormErrorMessage('password')}
                    </div>
                    <Button className="mt-4 w-full" label="Ingresar" />
                    
                </form>
                
                
                    
                    
                    
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
        </ContainerLogin>
                
                
            
    
    </>
  );
}
