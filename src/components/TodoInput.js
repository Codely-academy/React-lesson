import { useState } from "react";

const TodoInput = (props) => {
    const [text, setText] = useState("")
    const onClick = () => {
        props.onPressAdd(text)
        setText("")
    }
    const onChange = (e) => {
        const inputText = e.target.value
        console.log("OnCHange", inputText)
        setText(inputText)
    }
    return (
        <div>
            <input value={text} onChange={onChange} name="todoInput" className="input" />
            <button onClick={onClick}> Нэмэх </button>
        </div>
    );
}

export default TodoInput;