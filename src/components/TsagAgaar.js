import React, { useState } from 'react'
import { tsagAgaarData } from '../data/tsag-agaar-aimag-sum';
const TsagAgaar = () => {
    console.log(tsagAgaarData)
    const ubCity = tsagAgaarData[0];
    const darkhanCity = tsagAgaarData[1];
    const [city, setCity] = useState(ubCity);

    const onClickDarkhan = () => {
        console.log("onClickDarkhan");
        setCity(darkhanCity)
    }
    const onClickUb = () => {
        console.log("onClickUb");
        setCity(ubCity)
    }
    const ubSelectedClass = city.id === 1 ? 'city-selected' : '';
    const darkhanSelectedClass = city.id === 2 ? 'city-selected' : '';
    return (
        <div className='tsag-agaar-container'>
            {/* shift + alt + Down Arrow */}
            <button className={ubSelectedClass} onClick={onClickUb}>Улаанбаатар</button>
            <button className={darkhanSelectedClass} onClick={onClickDarkhan}>Дархан</button>
            {/* <button>Эрдэнэт</button> */}
            {/* <button>Бусад</button> */}
            <div className='flex-container'>

                {city.data.weather.map(
                    (obj) => {
                        return <div className='tsag-agaar'>
                            <p>{obj.date}</p>
                            <h1>Өдөртөө: {obj.temperatureDay} градус, {obj.phenoDay}</h1>
                            <h1>Шөнөдөө: {obj.temperatureNight} градус, {obj.phenoNight}</h1>
                        </div>
                    }
                )}

            </div>
        </div>
    );
}

export default TsagAgaar;