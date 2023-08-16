import React from 'react';
const Friend = ({ data }) => {
    console.log("Data", data)
    return (
        <div className='friend-container'>
            <img width={100} height={100} src={data.img} alt="" />
            <h1>Нэр:  {data.name} </h1>
            <h1>Хүйс: {data.gender} </h1>
        </div>
    );
}
export default Friend;