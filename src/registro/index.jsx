import React, { useEffect } from 'react'
import { Register } from './components/Register';
import { Controller } from './controller/controller';

function Index() {
  const controller = Controller();
  useEffect(() => {
    
  }, [])
  
  return (
    <>
        <Register 
          formik={controller.formik} 
          selectedRol={controller.selectedRol} 
          setSelectedRol={controller.setSelectedRol} 
          isFormFieldInvalid={controller.isFormFieldInvalid}
        />
    </>
  )
}

export default Index
