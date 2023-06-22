import React from 'react'
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
function Curso({tipo,nombre,descripcion,cantidadAlumnos=0,estado,costo=0}) {
  return (
    <>
    <div className='border-round border-1 surface-border surface-card p-3'>
        <div className='flex flex-column md:flex-row w-full gap-3'>
                <div className='relative'>
                    <img src="https://blocks.primereact.org/demo/images/blocks/hotels/h4.jpeg" alt="imagen" className='border-round w-full h-full md:w-14rem md:h-14rem'/>
                    <p className='absolute px-2 py-1 border-round-lg text-sm font-normal text-white mt-0 mb-0'>
                        Superhost
                    </p>
                </div>
                <div className='flex flex-column w-full gap-3'>
                    <div className='flex w-full justify-content-between align-items-center flex-wrap gap-3'>
                        <p className='font-semibold text-lg mt-0 mb-0'>{nombre}</p>
                        <Rating value={5} readOnly cancel={false} />
                    </div>
                    <p className='font-normal text-lg text-600 mt-0 mb-0'>
                    {descripcion}
                    </p>
                    <div className='flex flex-wrap justify-content-between xl:h-2rem mt-auto'>
                        <p className='text-base flex align-items-center text-900 mt-0 mb-1'>
                            <i className='pi pi-users mr-2'/>
                            <span className='font-medium'>{cantidadAlumnos} Alumnos</span>
                        </p>
                        
                        <p className='text-base flex align-items-center text-900 mt-0 mb-1'>
                            <i className='pi pi-check-circle mr-2'/>
                            <span className='font-medium'>{estado===1?'Publicado':'No Publicado'}</span>
                        </p>
                    </div>
                    <p className='font-semibold text-4xl text-900 mt-0 mb-2'>
                    {costo===0?'Free':costo}
                    </p>
                    
                </div> 
        </div>
        {
            tipo===1?(
                <div className='flex gap-3 mt-2 justify-content-center'>
                    <Button icon="pi pi-pencil" rounded severity="" tooltip='Editar'/>
                    <Button icon="pi pi-trash" rounded severity="" tooltip='Eliminar'/>
                    <Button icon="pi pi-star" rounded severity="" tooltip='Publicar'/>
                </div>
            ):(
                <div className='mt-2'>
                    <Button icon="pi pi-lock" label="Inscribirse" severity=""/>
                    
                </div>
            )
        }
        
        </div>
        
    </>
    
    
  )
}

export default Curso