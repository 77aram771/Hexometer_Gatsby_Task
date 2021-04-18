import React from 'react'

export const ButtonHover = ({text}) => {
    return (
        <div onClick={() => alert('test')} className='button_hover'>
            <span>{text}</span>
        </div>
    )
}
