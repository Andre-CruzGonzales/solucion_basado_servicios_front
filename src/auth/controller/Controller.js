import { useFormik } from "formik";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

export const Controller = ()=>{
    const navigate = useNavigate();
    const toast = useRef(null);
    const [welcome,setWelcome]=useState(false);
    const validationSchema = Yup.object().shape({
        username: Yup.string().email('debes ingresar un correo').required('email es requerido'),
        password:Yup.string().min(3, 'minimo 3 caracteres').required('la contraseña es requerido'),
    });
    const showError = () => {
        toast.current.show({severity:'error', summary: 'Error', detail:'Usuario o contraseña invalidos', life: 3000});
    }
    const formik = useFormik({
        initialValues:{
           
           username:'',
           password:'',
           
        },
        onSubmit: values =>{
            console.log(values);
            login(values);
        },
        validationSchema: validationSchema,
    });
    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const login=async(data)=>{

        const resp= await fetch("http://localhost:8081/user/login",{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(data)
        });
        let user=null;
        if(resp.status===200){
            user= await resp.json();
            localStorage.setItem('user',JSON.stringify(user));
                                                                                                                                                                            localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')
            return navigate('/cursos');
        }else{
            showError();
            setWelcome(false);
            console.log("error");
        }
        
        
        
        
        
    }
    return{
        welcome,
        isFormFieldInvalid,
        formik,
        toast,
    }
}