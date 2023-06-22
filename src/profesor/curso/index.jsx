import React, { useEffect } from 'react'
import ProfesorCurso from './components/ProfesorCurso'
import { Controller } from './controller/Controller'

function ManagerEntity() {
    const controller = Controller();
    
    useEffect(() => {
      controller.loadData();
    }, [])
    
  return (
    <>
        <ProfesorCurso visible={controller.visible} setVisible={controller.setVisible} data={controller.cursos} formik={controller.formik}/>
    </>
  )
}

export default ManagerEntity