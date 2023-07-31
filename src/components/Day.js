import React from 'react'

const Day = (props) => {
    const { data } = props

    return (
        <div className='tsag-agaar'>
            <p>{data.date}</p>
            <h1>Өдөртөө: {data.temperatureDay} градус, {data.phenoDay}</h1>
            <h1>Шөнөдөө: {data.temperatureNight} градус, {data.phenoNight}</h1>
        </div>
    );
}

export default Day;