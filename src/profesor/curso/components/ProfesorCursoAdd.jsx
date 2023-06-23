import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
export default function ProfesorCursoAdd(props) {
    const getFormErrorMessage = (name) => {
        return props.isFormFieldInvalid(name) ? <small className="p-error">{props.formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };
  return (
    <Dialog 
        header="Agregar Curso" 
        visible={props.visible} 
        onHide={props.onHide}
        style={{ width: '30vw' }} 
        breakpoints={{ '960px': '75vw', '641px': '100vw' }}
    >
        <form onSubmit={props.formik.handleSubmit}>
            <div className='field'>
                <label className='font-bold'>Nombre del Curso</label>
                <InputText
                    placeholder='Nombre del curso' 
                    className={`w-full ${props.isFormFieldInvalid('nombre') && 'p-invalid'}`}
                    id="nombre"
                    name="nombre"
                    onChange={props.formik.handleChange}
                    value={props.formik.values.nombre}
                />
                {getFormErrorMessage('nombre')}
            </div>
            <div className='field'>
                <label className='font-bold'>Descripcion del Curso</label>
                <InputTextarea 
                    autoResize 
                    rows={5} 
                    cols={30} 
                    className='w-full' 
                    placeholder='Descripción del curso'
                    id="descripcion"
                    nombre="descripcion"
                    onChange={props.formik.handleChange}
                    value={props.formik.values.descripcion}
                />
                
            </div>
            <div className='flex gap-3 justify-content-center'>
                <Button label={props.formik.values.id===null?"Guardar":"Editar"} severity="success" className='w-full'/>
                <Button label="Cancelar" severity='danger' className='w-full' onClick={()=> props.setVisible(false)} type='button'/>
            </div>
        </form>
    </Dialog>
  )
}
