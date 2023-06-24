import React, { useEffect } from 'react'
import ProfesorCurso from './components/ProfesorCurso'
import { Controller } from './controller/Controller'
import { ControllerAlumno } from '../../Alumno/controller/Controller';

function ManagerEntity() {
    const controller = Controller();
    const controllerAlumno = ControllerAlumno();
    useEffect(() => {
      controller.loadData();
    }, [])
    
  return (
    <>
        <ProfesorCurso 
          visible={controller.visible} 
          setVisible={controller.setVisible} 
          visibleDelete={controller.visibleDelete} 
          setVisibleDelete={controller.setVisibleDelete} 
          data={controller.cursos} 
          formik={controller.formik} 
          onClickUpdate={controller.onClickUpdate}
          onClickDelete={controller.onClickDelete}
          visiblePublicar={controller.visiblePublicar}
          setVisiblePublicar={controller.setVisiblePublicar}
          onClickPublicar={controller.onClickPublicar}
          onClickAddCurso={controller.onClickAddCurso}
          onHide={controller.onHide}
          isFormFieldInvalid={controller.isFormFieldInvalid}
          updateCurso={controller.updateCurso}
          inscripcion = {controllerAlumno.inscripcion}
          onClickInscripcion={controllerAlumno.onClickInscripcion}
          deleteCurso={controller.deleteCurso}
          loadData={controller.loadData}

        />
    </>
  )
}

export default ManagerEntity