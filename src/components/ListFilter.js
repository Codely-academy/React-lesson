import React, { useState } from 'react'
import List from './List';
const ListFilter = () => {
    // 1. UI 
    // 2. Input onChange => Hadgalan
    // 3. Hadgalsan utgaara filter
    // 4. Filter hiisnee delgetsend haruulna

    const [text, setText] = useState('');
    const onChange = (e) => {
        const text = e.target.value;
        setText(text)
    }
    const fruits = ['Banana', 'Apple', 'Orange', 'Mango', 'Pineapple', 'Watermelon']

    // App 
    // [Apple, Pineapple]
    const filteredData = fruits.filter((el) => {
        return el.toLowerCase().includes(text)
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