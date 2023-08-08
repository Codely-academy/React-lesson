import React, { useState } from 'react'
import { Radio, Card } from 'antd';
import { tsagAgaarData } from '../data/tsag-agaar-aimag-sum';

const options = [
    {
        label: 'Улаанбаатар',
        value: 'ub',
    },
    {
        label: 'Дархан',
        value: 'dar',
    },
    {
        label: 'Эрдэнэт',
        value: 'erd',
    },
];
const Weather = () => {
    const [value, setValue] = useState(options[0].value);
    const onChange = (event) => {
        const selected = event.target.value
        console.log('Btn change', selected);
        setValue(selected);
    };
    const getCityData = (city) => {
        if (city === 'ub')
            return tsagAgaarData[0].data.weather
        else if (city === 'dar')
            return tsagAgaarData[1].data.weather
    }
    const list = getCityData(value)

    return (
        <div>
            <Radio.Group
                options={options}
                value={value}
                onChange={onChange}
                optionType="button" />
            <div className='tsag-agaar-container'>
                {
                    list.map(obj => {
                        return <Card
                            title={obj.date}
                            bordered={true}
                            headStyle={{
                                backgroundColor: 'lightblue'
                            }}
                            style={{
                                width: 300,
                                backgroundColor: 'lightgray'
                            }}
                        >
                            <p>Шөнө: {obj.temperatureNight} градус, {obj.windNight}м/c</p>
                            <p>Өдөр: {obj.temperatureDay} градус, {obj.windDay}м/c</p>

                        </Card>
                    })
                }

            </div>
        </div>
    );
}

export default Weather;