import { useState } from "react"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
export const Controller = ()=>{
    
    const [visible,setVisible]=useState(false);
    const [visibleDelete,setVisibleDelete]=useState(false);
    const [visiblePublicar,setVisiblePublicar]=useState(false);
    const [cursos,setCursos]=useState([]);
    //const [curso,setCurso]=useState();
    const validationSchema = Yup.object().shape({
        nombre: Yup.string().required('el nombre del curso es requerido'),
    });
    
    const formik = useFormik({
        initialValues:{
            id:null,
            nombre:'',
            descripcion:'',
            estado:0,
            profesor:{
                id:JSON.parse(localStorage.getItem("user"))?.id,
            },
        },
        
        onSubmit: values =>{
            if(formik.values.id===null){
                
                createCurso(values);
            }else{
                
                updateCurso(formik.values.id,values);
            }
            formik.setValues(formik.initialValues);
            
        },
        validationSchema: validationSchema,
    });
    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);
    //fech
    const loadData=async ()=>{
        
        const resp= await fetch("http://localhost:8081/curso");
        const data= await resp.json();
        setCursos(data);
        console.log(data);

    }
    const createCurso=async(data)=>{
        formik.setValues("profesor.id",1)
        const resp= await fetch("http://localhost:8081/curso",{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(data)
        });
        const course= await resp.json();
        console.log(course);
        setVisible(false);
        
    }
    const updateCurso=async(id,data)=>{
        console.log(id);
        const resp= await fetch("http://localhost:8081/curso/"+id,{
            method: "PUT",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(data)
        });
        const course= await resp.json();
        console.log(course);
        setVisible(false);
        
        
    }
    const deleteCurso=async(id)=>{
        const resp= await fetch("http://localhost:8081/curso/"+id,{
            method: "DELETE",
            headers:{
                "Content-Type":"application/json",
            }
        });
        const course= await resp.json();
        console.log(course);
        
    }
    const onClickAddCurso=()=>{
        setVisible(true);
        formik.setValues(formik.initialValues);
    }
    const onClickUpdate=(curso)=>{
        
        formik.setFieldValue('id',curso?.id);
        formik.setFieldValue('nombre',curso?.nombre);
        formik.setFieldValue('descripcion',curso?.descripcion);
        setVisible(true);
        console.log(formik.values.id);
        
    }
    const onClickDelete=(curso)=>{
        setVisibleDelete(true);
        //setCurso(curso);
        formik.setFieldValue('id',curso?.id);
        formik.setFieldValue('nombre',curso?.nombre);
        formik.setFieldValue('descripcion',curso?.descripcion);
    }
    const onClickPublicar=(curso)=>{
        setVisiblePublicar(true);
        formik.setFieldValue('id',curso?.id);
        formik.setFieldValue('nombre',curso?.nombre);
        formik.setFieldValue('descripcion',curso?.descripcion);
        formik.setFieldValue('estado',curso?.estado===0?1:0);
        formik.setFieldValue('profesor',curso?.profesor);
        
    }
    const onHide=()=>{
        setVisible(false);
        formik.setValues(formik.initialValues);
    }
    
    return{
        visible,
        setVisible,
        visibleDelete,
        setVisibleDelete,
        loadData,
        cursos,
        setCursos,
        createCurso,
        formik,
        onClickUpdate,
        onClickDelete,
        visiblePublicar,
        setVisiblePublicar,
        onClickPublicar,
        onClickAddCurso,
        onHide,
        isFormFieldInvalid,
        updateCurso,
        deleteCurso,
        //curso,

    }
}