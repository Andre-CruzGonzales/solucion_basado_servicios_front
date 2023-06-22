import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from "../auth";
import Registro from "../registro";
import Dashboard from "../dashboard";
import Cursos from "../profesor/curso";
export default function AppRouter() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Registro/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/cursos" element={<Cursos/>}/>
        </Routes>
    </>
  )
}
