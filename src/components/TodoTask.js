const TodoTask = (props) => {
    const { data, onPressDelete, index } = props
    const onDelete = () => {
        onPressDelete(data.text)
    }
    return (
        <div className="task-container">
            <p> {data.text} </p>
            <button onClick={onDelete}>Устгах</button>
        </div>
    );
}

export default TodoTask;