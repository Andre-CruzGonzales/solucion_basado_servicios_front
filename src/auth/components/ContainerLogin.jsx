import React from 'react'
import fondo from "../../assets/fondo-login.jpg";
export const ContainerLogin = ({children}) => {
  return (
    <div className="px-4 py-2 md:px-6 lg:px-8" style={{background:`url(${fondo}) no-repeat`, backgroundSize:"cover"}}>
            <div className="flex flex-wrap">
                {children}
            </div>
    </div>
  )
}
