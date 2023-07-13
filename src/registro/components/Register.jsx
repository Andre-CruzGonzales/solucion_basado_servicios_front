import React from 'react'
import { WelcomeScreen } from "../../auth/components/WelcomeScreen";
import { ContainerLogin } from "../../auth/components/ContainerLogin";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';
export const Register = ({formik,selectedRol,setSelectedRol,isFormFieldInvalid}) => {
    const roles =[
        {
            id:1,
            nombre:"Profesor"
        },
        {
            id:2,
            nombre:"Estudiante"
        }
    ]
    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };
  return (
    <>
            <ContainerLogin>
                <WelcomeScreen/>
                <div className="w-full lg:w-6 p-2 lg:px-7 lg:py-5 surface-card">
                    <div className="text-900 text-2xl font-medium mb-6">
                        Registro
                    </div>
                    <form onSubmit={formik.handleSubmit}>

                    
                    <div className="field">
                        <label htmlFor="email" className="font-bold">
                            Nombres y Apellidos
                        </label>
                        <InputText 
                            keyfilter="alpha"
                            id='nombres_apellidos'
                            name='nombres_apellidos'
                            onChange={formik.handleChange}
                            value={formik.values.nombres_apellidos}
                            placeholder="Nombres y apellidos" 
                            className={`w-full ${isFormFieldInvalid('nombres_apellidos') && 'p-invalid'}`}
                            autoFocus 
                        />
                        {getFormErrorMessage('nombres_apellidos')}
                    </div>
                    
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
                        <InputText type="password" 
                            className={`w-full ${isFormFieldInvalid('password') && 'p-invalid'}`}
                            autoFocus 
                            id='password'
                            name='password'
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        {getFormErrorMessage('password')}
                    </div>
                    <div className="field">
                        <label htmlFor="email" className="font-bold">
                            ¿Eres?
                        </label>
                        <Dropdown 
                            inputId='rol'
                            name='rol'
                            value={formik.values.rol}
                            onChange={formik.handleChange}
                            options={roles} 
                            optionLabel="nombre" 
                            placeholder="Selecciona un rol" 
                            className={`w-full ${isFormFieldInvalid('correo') && 'p-invalid'}`}
                            optionValue='id'

                            />
                            {getFormErrorMessage('rol')}
                    </div>
                    <Button className="mt-2 w-full" label="Registrar"/>
                    </form>
                    <div className="mt-1 text-center text-600">
                        {"¿Ya tienes una cuenta? "}
                        <Link className="font-medium text-blue-500" to="/">Iniciar Sesión</Link>
                    </div>
                </div>
            </ContainerLogin>
        </>
  )
}
