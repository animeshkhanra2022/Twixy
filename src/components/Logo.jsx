import React from 'react'

function Logo({width='50px', height}) {
  return (
    <div>
      <img 
        src="/twixy.png" 
        alt="Logo" 
        style={{height:`${height}`, width: `${width}`}} 
      />
    </div>
  )
}

export default Logo