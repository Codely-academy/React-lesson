import React, { useState } from 'react';
import { tsagAgaarData } from '../data/tsag-agaar-aimag-sum';
import Day from './Day';
const TsagAgaar = () => {
    const ubCity = tsagAgaarData[0];
    const darkhanCity = tsagAgaarData[1];
    const [city, setCity] = useState(ubCity);

    const onDarkhan = () => {
        console.log("onDarkhan")
        setCity(darkhanCity)
    }
    const onUb = () => {
        console.log("onDarkhan")
        setCity(ubCity)
    }
    const onClick = () => {
        console.log("clicked")
    }
    return (
        <div className='tsag-agaar-container'>
            {/* shift + alt + Down Arrow */}
            <button className={city.id === 1 && 'city-selected'} onClick={onUb}  >Улаанбаатар</button>
            <button className={city.id === 2 && 'city-selected'} onClick={onDarkhan}  >Дархан</button>
            <div className='flex-container'>
                {city.data.weather.map(
                    (obj) => {
                        return <Day myFunction={onClick} data={obj} >
                            <div>
                                <h1>MY CONTENT</h1>
                                <button >My button</button>
                                <button >My button</button>
                                <button >My button</button>
                                <button >My button</button>
                            </div>
                        </Day>

                    }
                )}
            </div>
        </div>
    );
}

export default TsagAgaar;