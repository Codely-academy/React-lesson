import React, { useState } from 'react'
const TicTac = () => {
    // const buttons = ['', '', '', '', '', '', '', '', '']
    const [buttons, setButtons] = useState(['', '', '', '', '', '', '', '', '']);
    const [lastClicked, setLastClicked] = useState('X');
    const onClickBtn = (index) => {
        const newText = lastClicked === 'X' ? "O" : 'X'
        buttons[index] = newText
        // ['', '', '', '', '', 'X', '', '', '']
        setButtons([...buttons])
        setLastClicked(newText)
        checkWinner([...buttons])
    }
    const checkWinner = (updatedButtons) => {
        console.log(updatedButtons)
        // Мөр
        // Багана
        // Диаганол

    }
    return (
        <div className='tic-tac-container'>
            {
                buttons.map(
                    (button, index) => {
                        console.log("button", button, index)
                        return <button onClick={() => {
                            onClickBtn(index)
                        }} className='tic-tac-button'>  {button}  </button>
                    }
                )
            }

        </div>
    );
}

export default TicTac;