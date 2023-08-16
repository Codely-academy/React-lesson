import React from 'react'

const Day = (props) => {
    const { title, data, myFunction } = props
    // const title = props.title
    // const data = props.data
    return (
        <div className='tsag-agaar'>
            {props.children}

            <p>{props.data.date}</p>
            <h1>Өдөртөө: {data.temperatureDay} градус, {data.phenoDay}</h1>
            <h1>Шөнөдөө: {data.temperatureNight} градус, {data.phenoNight}</h1>
        </div>
    );
}

export default Day;