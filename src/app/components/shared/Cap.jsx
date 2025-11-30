import React from 'react'

export default function Cap({ heroStyle, children }) {
  return (
    <div
      className="w-full h-[200px] flex flex-col justify-center items-center px-4 relative overflow-hidden "
      style={{
        backgroundImage: `url('/assets/images/fatimo.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        ...heroStyle, // merge incoming custom styles
      }}
    >
      {children}
    </div>
  )
}
