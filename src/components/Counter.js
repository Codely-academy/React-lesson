import React, { useState } from 'react'
const Counter = () => {
    const [number, setNumber] = useState(0);
    const onIncrement = () => {
        console.log("onIncrement")
        // number = number + 1
        setNumber(number + 1)
    }
    const onDecrement = () => {
        console.log("onDecrement")
        // number = number + 1
        setNumber(number - 1)
    }
    const onReset = () => {
        console.log("onReset")
        // number = number + 1
        setNumber(0)
    }
    return (
        <div className='counter-container'>
            <h1>Counter App</h1>
            <p>{number}</p>

            <div className='buttons'>
                <button onClick={onIncrement} className='btn-green'>Increment</button>
                <button onClick={onDecrement} className='btn-red'>Decrement</button>
                <button onClick={onReset} className='btn-gray'>Reset</button>
            </div>

        </div>
    );
}

export default Counter;