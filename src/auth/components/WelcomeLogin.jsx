import React from 'react'

export default function WelcomeLogin({welcome,description,logo}) {
  return (
    <>
        <img src={logo} alt="logo" height={50} className="mb-6"/>
        <div className="text-xl text-black-alpha-90 font-500 mb-3">
           {welcome}
        </div>
        <p className="text-black-alpha-50 line-height-3 mt-0 mb-6">
            {description}
        </p>
    </>
  )
}
