import React, { useState } from 'react'
import List from './List';

const ListFilter = () => {
    const [text, setText] = useState('');
    const onChange = (e) => {
        const text = e.target.value;
        setText(text)
    }
    const fruits = ['Banana', 'Apple', 'Orange', 'Mango', 'Pineapple', 'Watermelon']
    // App
    // [Apple, Pineapple]
    const filteredData = fruits.filter((fruit) => {
        return fruit.toLowerCase().includes(text)
    })
    const listData = filteredData ? filteredData : fruits
    return (
        <div>
            <input value={text} onChange={onChange} name='search' placeholder='search' />
            <List data={listData} />
        </div>
    );
}

export default ListFilter;