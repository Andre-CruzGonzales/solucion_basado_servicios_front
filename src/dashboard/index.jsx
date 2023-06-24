import React from 'react'
import Container from '../components/Container'
import Curso from '../components/curso/Curso'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

const index = () => {
    const items=[]
  return (
    <Container>
    <div className='flex justify-content-between py-3 ml-1'>
        
    </div>
        <div className='grid'>
            {
               items.map(item=>(
                <div className='col-12 xl:col-6'>
                    <Curso tipo={2}/>
                </div>
               )) 
            }
            
            
        </div>
        
    </Container>
  )
}

export default index