import React, { useState } from 'react'

const ToggleButton = () => {
    const [buttonText, setButtonText] = useState("ON")
    const onClick = () => {
        const text = buttonText === 'ON' ? 'OFF' : 'ON'
        setButtonText(text)
    }
    let toggleClass = buttonText === 'ON' ? 'toggle-on' : 'toggle-off';
    return (
        <div>
            <button onClick={onClick} className={toggleClass}> {buttonText} </button>
        </div>
    );
}

export default ToggleButton;