import React, { useState } from 'react'
import Container from '../../../components/Container'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import Curso from '../../../components/curso/Curso'
import ProfesorCursoAdd from './ProfesorCursoAdd'

function ProfesorCurso({visible,setVisible,data=[],formik}) {
    
    return (
      <Container>
      <div className='flex justify-content-between py-3 ml-1'>
          <Button label="Agregar Curso" onClick={() => setVisible(true)}/>
          
          <InputText label="Search"/>
      </div>
          <div className='grid'>
              {
                 data.map(item=>(
                  <div key={item?.id} className='col-12 xl:col-6'>
                      <Curso tipo={1} nombre={item.nombre} descripcion={item.descripcion}/>
                  </div>
                 )) 
              }
              
              
          </div>
        <ProfesorCursoAdd visible={visible} setVisible={setVisible} formik={formik}/>
      </Container>
    )
}

export default ProfesorCurso