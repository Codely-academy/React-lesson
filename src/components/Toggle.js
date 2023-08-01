import React, { useState } from 'react'

const ToggleButton = (props) => {
    const { text, setText } = props

    // text OFF => ON
    // text ON => OFF
    const onClick = () => {
        const newText = text === 'ON' ? 'OFF' : 'ON'
        console.log("newText", newText)
        // text = newText
        setText(newText)
    }
    const toggleClass = text === 'ON' ? 'toggle-on' : 'toggle-off'
    return (
        <div>
            <button onClick={onClick} className={toggleClass}> {text} </button>
        </div>
    );
}

export default ToggleButton;















// import React, { useState } from 'react'

// const ToggleButton = () => {
//     const [buttonText, setButtonText] = useState("ON")
//     const onClick = () => {
//         const text = buttonText === 'ON' ? 'OFF' : 'ON'
//         setButtonText(text)
//     }
//     let toggleClass = buttonText === 'ON' ? 'toggle-on' : 'toggle-off';
//     return (
//         <div>
//             <button onClick={onClick} className={toggleClass}> {buttonText} </button>
//         </div>
//     );
// }

// export default ToggleButton;