import React, { useState } from 'react'
import List from './List';
import { users } from '../data/users';
const ListFilter = () => {
    const [text, setText] = useState('');
    const onChange = (e) => {
        const text = e.target.value;
        setText(text)
    }
    // const fruits = ['Banana', 'Apple', 'Orange', 'Mango', 'Pineapple', 'Watermelon']

    // App 
    // [Apple, Pineapple]
    const filteredData = users.filter((user) => {
        return user.email.includes(text)
    })

    const listData = filteredData ? filteredData : users
    return (
        <div>
            <input value={text} onChange={onChange} name='search' placeholder='search' />
            <List data={listData} />
        </div>
    );
}

export default ListFilter;



/*
1. Input => "Z" текст бичлээ 

2. <input value={text} onChange={onChange} name='search' placeholder='search' />
 => onChange буюу өөрчлөлт гарлаа гэж мэдрээд onChange дээр холбосон 
функцийг ажиллуулна. 

3. onChange() функц ажиллана. Энэ функц нь гараас бичсэн текстийг аваад text гэсэн
state -г шинэчилнэ. 
const onChange = (e) => { 
    // Гараас бичсэн текст-г text хувсагчид онооно
        const text = e.target.value;
        setText(text)
    }


4. State шинэчлэгдэх үед компонент доторхи код дахин нэг удаа ажиллана. Ингэхдээ "text"
 state-н шинэчлэгдсэн утгаар ажиллана.
const filteredData = fruits.filter((fruit) => {
    return fruit.toLowerCase().includes(text)
}) 
//  filteredData => [];
const listData = filteredData ? filteredData : fruits
// listData => []

*/