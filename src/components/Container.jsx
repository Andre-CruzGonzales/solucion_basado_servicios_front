import React, { useRef } from 'react'
import logo from '../assets/logo-certus-blanco.png';
import { InputText } from "primereact/inputtext";
import { Link, useNavigate } from 'react-router-dom';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
export default function Container({children}) {
    const menuLeft = useRef(null);
    const navigate=useNavigate();
    const itemsMenu = [
        {
            label: 'Options',
            items: [
                {
                    label: 'Cerrar Sesión',
                    icon: 'pi pi-refresh',
                    command: () => {
                        navigate("/",{replace:true});
                        //navigate("/");
                    }
                }
            ]
        }
    ]
    const items=[
        /*{
            icon:"pi pi-home",
            label:"Dash",
            link:"/dashboard",
        },
        {
            icon:"pi pi-home",
            label:"Cursos",
            link:"/cursos",
        },*/
        {
            icon:"pi pi-book",
            label:"Cursos",
            link:"/cursos",
        }
    ]
  return (
    <>
        <div className='' style={{height:"100vh",overflow:"hidden"}}>
            <div className='min-h-screen flex relative lg:static surface-ground'>
                <div className='bg-bluegray-800 h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 select-none' style={{width:"280px"}}>
                    <div className='flex flex-column h-full'>
                        <div className='flex align-items-center px-5 bg-bluegray-900 flex-shrink-0' style={{height:"60px"}}>
                            <img src={logo} alt="logo" height={30}/>
                        </div>
                        <div className='overflow-y-auto mt-3'>
                            <ul className='list-none p-3 m-0'>
                                {
                                    items.map(item=>(
                                        <li key={item.icon}>
                                            <Link style={{textDecoration:"none"}} to={item.link} className='p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50 transition-duration-150 transition-colors w-full'>
                                                    <i className={`${item.icon} mr-2`}/>
                                                    <span className='font-medium'>{item.label}</span>
                                                </Link> 
                                        </li>
                                    ))
                                }
                               
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className='min-h-screen flex flex-column relative flex-auto'>
                    <div className='flex justify-content-between align-items-center px-5 surface-section shadow-2 relative lg:static border-bottom-1 surface-border' style={{height:"60px"}}>
                        <div className='flex'>
                            <a className='p-ripple cursor-pointer block lg:hidden text-700 mr-3 mt-2'>
                                <i className='pi pi-bars text-4xl'/>
                                <span role="presentation" className='p-ink' style={{height:"0px", width:"0px"}}></span>
                            </a>
                            {/*<span className="p-input-icon-left">
                                <i className="pi pi-search" />
                                <InputText placeholder="Search" />
                            </span>*/}
                        </div>
                        <div className='p-ripple cursor-pointer block lg:hidden text-700'>
                          <i className='pi pi-ellipsis-v text-2xl'/> 
                          <span role="presentation" className='p-ink' style={{height:"0px",width:"0px"}}></span>
                        </div>
                        <ul className='list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static'>
                            <li className=''>
                                <Button icon="pi pi-user" rounded text severity="info" aria-label="User" size="small" onClick={(event) => menuLeft.current.toggle(event)}/>
                                <Menu model={itemsMenu} ref={menuLeft} popup id="popup_menu_left" />
                            </li>
                        </ul>
                    </div>
                    
                    <div className='p-5 flex flex-column flex-auto'>
                        <div className='border-2 surface-border border-round surface-section flex-auto p-2'>
                        <ScrollPanel style={{ width: '100%', height: '86vh' }} className="custombar2">
                            {children}
                        </ScrollPanel>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}
