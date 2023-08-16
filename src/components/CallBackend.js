import React, { useState } from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Row } from 'antd';
const { Meta } = Card;
export default function CallBackend() {
    // https://fakestoreapi.com/products/categories
    // https://fakestoreapi.com/products
    const [data, setData] = useState([]);
    const onClick = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
        setData(data)
        // const data = {
        //     method: "POST",
        //     body: JSON.stringify(
        //         {
        //             title: 'test product',
        //             price: 13.5,
        //             description: 'lorem ipsum set',
        //             image: 'https://i.pravatar.cc',
        //             category: 'electronic'
        //         }
        //     )
        // }
        // const response = await fetch('https://fakestoreapi.com/products', data)
        // const result = await response.json();
        // console.log(result);
        // setData(result)
    }
    return (
        <div>

            <button onClick={onClick}>Call Backend</button>
            <Row>
                {
                    data.map(obj =>
                        <Col span={8}>
                            <Card
                                style={{
                                    width: 300,
                                }}
                                cover={
                                    <img
                                        width={300}
                                        height={400}
                                        alt="example"
                                        src={obj.image}
                                    />
                                }
                                actions={[
                                    <SettingOutlined key="setting" />,
                                    <EditOutlined key="edit" />,
                                    <EllipsisOutlined key="ellipsis" />,
                                ]}
                            >
                                <Meta
                                    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                                    title={obj.title}
                                    description={obj.price + "  " + obj.description}
                                />
                            </Card>
                        </Col>

                    )}
            }
            </Row>
        </div>
    )
}
