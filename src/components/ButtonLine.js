import React from 'react'

export const ButtonLine = ({text}) => {
    return (
        <div onClick={() => alert('test')} className='button_line'>
            <span>{text}</span>
        </div>
    )
}
