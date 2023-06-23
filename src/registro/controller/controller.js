import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

export const Controller = ()=>{
    const navigate = useNavigate();
    const [selectedRol, setSelectedRol] = useState(null);
    const validationSchema = Yup.object().shape({
        nombres_apellidos: Yup.string().required('el nombre y apellidos son requeridos'),
        username: Yup.string().email('debes ingresar un correo').required('email es requerido'),
        password:Yup.string().min(3, 'minimo 3 caracteres').required('la contraseña es requerido'),
        rol:Yup.string().required('el rol es requerido'),
    });
    const formik = useFormik({
        initialValues:{
           nombres_apellidos:'',
           username:'',
           password:'',
           rol:null, 
        },
        onSubmit: values =>{
            console.log(values);
            register(values);
        },
        validationSchema: validationSchema,
    });
    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const register=async(data)=>{
        const resp= await fetch("http://localhost:8081/user",{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(data)
        });
        const user= await resp.json();
        navigate('/');
        console.log(user);
        
        
    }
    return{
        selectedRol,
        setSelectedRol,
        isFormFieldInvalid,
        formik,
    }
}