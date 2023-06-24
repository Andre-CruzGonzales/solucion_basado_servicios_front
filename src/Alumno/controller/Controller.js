import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const ControllerAlumno = ()=>{
    const navigate = useNavigate();
    
    
    const formik = useFormik({
        initialValues:{
           curso_id:null,
           alumno_id:JSON.parse(localStorage.getItem('user')).id,
        },
        onSubmit: values =>{
            console.log(values);
            inscripcion(values);
        },
    });
    
    const inscripcion=async(data)=>{
        const resp= await fetch("http://localhost:8081/curso/alumno",{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(data)
        });
        const user= await resp.json();
        console.log(user);
        
        
    }
    const onClickInscripcion=(curso)=>{
        formik.setFieldValue('curso_id',curso?.id);
        //formik.setFieldValue('alumno_id',JSON.parse(localStorage.getItem('user')).id);
        console.log(formik.values);
        inscripcion({curso_id:curso?.id,alumno_id:JSON.parse(localStorage.getItem('user')).id});
        console.log(curso);
    }
    return{
        inscripcion,
        formik,
        onClickInscripcion,
    }
}