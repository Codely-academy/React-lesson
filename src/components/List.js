import React from 'react'

const List = (props) => {
    const { data } = props
    return (
        <div>
            {data.map((fruit) => <p>{fruit}</p>)}
        </div>
    );
}

export default List;