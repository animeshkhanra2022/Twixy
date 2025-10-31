import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-400',
    textColor = 'white',
    className = '',
    ...props
}) {
    return (
        <button className={`py-2 px-4 ${bgColor} ${className} ${textColor} `}
            type={type} {...props}
        >
            {children}
        </button>
    )
}

export default Button