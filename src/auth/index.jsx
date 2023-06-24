import React from 'react'
import Login from './components/Login'
import { Controller } from './controller/Controller';


function index() {
  const controller = Controller();
  return (
    <>
        <Login 
          formik={controller.formik}
          isFormFieldInvalid={controller.isFormFieldInvalid}
          welcome={controller.welcome}
          toast={controller.toast}
        />
    </>
  )
}

export default index