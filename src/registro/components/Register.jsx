import React from 'react'
import { WelcomeScreen } from "../../auth/components/WelcomeScreen";
import { ContainerLogin } from "../../auth/components/ContainerLogin";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
export const Register = () => {
  return (
    <>
            <ContainerLogin>
                <WelcomeScreen/>
                <div className="w-full lg:w-6 p-2 lg:px-7 lg:py-5 surface-card">
                    <div className="text-900 text-2xl font-medium mb-6">
                        Registro
                    </div>
                    <div className="field">
                        <label htmlFor="email" className="font-bold">
                            Nombres y Apellidos
                        </label>
                        <InputText placeholder="Nombres y apellidos" className="w-full" autoFocus />
                    </div>
                    
                    <div className="field">
                        <label htmlFor="email" className="font-bold">
                            Correo
                        </label>
                        <InputText placeholder="email@email.com" className="w-full" autoFocus />
                    </div>
                    <div className="field">
                        <label htmlFor="email" className="font-bold">
                            Contraseña
                        </label>
                        <InputText type="password" className="w-full" autoFocus />
                    </div>
                    <div className="field">
                        <label htmlFor="email" className="font-bold">
                            ¿Eres?
                        </label>
                        <InputText type="password" className="w-full" autoFocus />
                    </div>
                    <Button className="mt-2 w-full" label="Registrar"/>
                    <div className="mt-1 text-center text-600">
                        {"¿Ya tienes una cuenta? "}
                        <Link className="font-medium text-blue-500" to="/">Iniciar Sesión</Link>
                    </div>
                </div>
            </ContainerLogin>
        </>
  )
}
