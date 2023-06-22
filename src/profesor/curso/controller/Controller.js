import { useState } from "react"
import { useFormik } from 'formik';
export const Controller = ()=>{
    const [visible,setVisible]=useState(false);
    const [cursos,setCursos]=useState([]);
    const formik = useFormik({
        initialValues:{
            nombre:'',
            descripcion:'',
            estado:0,
            profesor:{
                id:1,
            },
        },
        onSubmit: values =>{
            createCurso(values);
            setVisible(false);
        }
    })
    //fech
    const loadData=async ()=>{
        const resp= await fetch("http://localhost:8081/curso");
        const data= await resp.json();
        setCursos(data);
        console.log(data);

    }
    const createCurso=async(data)=>{
        const resp= await fetch("http://localhost:8081/curso",{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(data)
        });
        const course= await resp.json();
        console.log(course);
        
    }
    return{
        visible,
        setVisible,
        loadData,
        cursos,
        setCursos,
        createCurso,
        formik,

    }
}