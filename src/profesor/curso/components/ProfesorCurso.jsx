import React, { useState } from 'react'
import Container from '../../../components/Container'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import Curso from '../../../components/curso/Curso'
import ProfesorCursoAdd from './ProfesorCursoAdd'
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import ProfesorDeleteCurso from './ProfesorDeleteCurso'
import ProfesorPublicarCurso from './ProfesorPublicarCurso'

function ProfesorCurso({
        visible,
        setVisible,
        data=[],
        formik,
        onClickUpdate,
        visibleDelete,
        setVisibleDelete,
        onClickDelete,
        onClickPublicar,
        visiblePublicar,
        setVisiblePublicar,
        onClickAddCurso,
        onHide,
        isFormFieldInvalid
    }) {
    const [layout, setLayout] = useState('grid');
    
    const itemTemplate = (course, layout) => {
        if (!course) {
            return;
        }
        if(layout==="grid")
            return (
                <div key={course?.id} className='col-12 xl:col-6 p-1'>
                    <Curso 
                        tipo={1} 
                        curso={course}
                        onClickUpdate={onClickUpdate} 
                        onClickDelete={onClickDelete}
                        onClickPublicar={onClickPublicar}
                    />
                </div>
            );
    };
    
    return (
      <Container>
        <div className='flex justify-content-between py-3 ml-1'>
            <Button label="Agregar Curso" onClick={onClickAddCurso}/>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Buscar..." />
            </span>
          
        </div>
        <DataView value={data} itemTemplate={itemTemplate} layout={layout} paginator rows={6}/>
          {<div className='grid'>
              {/*
                 data.map(item=>(
                  <div key={item?.id} className='col-12 xl:col-6'>
                      <Curso tipo={1} nombre={item.nombre} descripcion={item.descripcion}/>
                  </div>
                 )) 
                 */}
              
              
          </div>
            }
        <ProfesorCursoAdd visible={visible} setVisible={setVisible} formik={formik} onHide={onHide} isFormFieldInvalid={isFormFieldInvalid}/>
        <ProfesorDeleteCurso 
            visibleDelete={visibleDelete} 
            setVisibleDelete={setVisibleDelete}
            nombreCurso={formik.values.nombre}
            
        />
        <ProfesorPublicarCurso
            visiblePublicar={visiblePublicar}
            setVisiblePublicar={setVisiblePublicar}
            nombreCurso={formik.values.nombre}
        />
      </Container>
    )
}

export default ProfesorCurso