import React from 'react'

const Buttons = ({ text, className, onclick }) => {
    return (
        <button className={className} onClick={onclick}>{text}</button>
    )
}

export default Buttons
