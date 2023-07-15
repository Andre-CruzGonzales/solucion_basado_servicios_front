import { Button } from 'primereact/button'
import React, { useEffect, useState } from 'react'

function Cart() {
    const [car,setCar]=useState();
    const isCart = ()=>{
        if(localStorage.getItem("cart")){
            setCar(JSON.parse(localStorage.getItem('cart')));
        }
    }
    useEffect(() => {
      isCart()
    
      
    }, [car])
    
  return (
    <div id="popover-cart" className='absolute left-0 w-full sm:w-auto sm:left-auto sm:top-auto sm:right-0 shadow-2 origin-top surface-overlay border-round p-3 mt-1 sm:w-25rem'>
        <div className='text-900 text-xl pb-3 border-bottom-1 surface-border'>
            Tus Cursos Solicitados
        </div>
        <ul className='list-none p-0 m-0'>
            {
                car && (<>
                <li className='flex py-3 align-items-center border-top-1 border-bottom-1 surface-border'>
                <img src="https://visualrec.es/wp-content/uploads/2020/04/cursos.jpg" className='w-4rem h-4rem flex-shrink-0 shadow-1'/>
                <div className='pl-3 mr-8'>
                    <span className='pl-3 mr-8'>{car?.nombre}</span>
                </div>
                <div className='text-900 font-medium ml-auto'>FREE</div>
            </li>
            <li className='py-3 border-bottom-1 surface-border'>
                <div className='flex align-items-center justify-content-between mb-3'>
                    <span className='text-900 font-medium'>total</span>
                    <div className='text-900 font-medium'>FREE</div>
                </div>
            </li>
                </>)
            }
            
            <li className='py-3 flex align-items-center p-fluid'>
                <Button label="Inscribirse" onClick={()=>setCar({})}/>
            </li>
        </ul>
    </div>
  )
}

export default Cart