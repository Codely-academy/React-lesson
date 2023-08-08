import React from 'react'

const List = (props) => {
    const { data } = props
    // const fruits = ['Banana', 'Apple', 'Orange', 'Mango', 'Pineapple', 'Watermelon']
    return (
        <div>
            {
                data.map(
                    (obj) => {
                        return <p>{obj}</p>
                    }
                )
            }
        </div>
    );
}

export default List;