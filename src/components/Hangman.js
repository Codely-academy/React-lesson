import React, { useState } from 'react'
const Hangman = () => {
    const words = ["kangoroo", "apple", "banana", "dog"]
    const randomNumber = Math.floor(Math.random() * words.length);
    const [word, setWord] = useState(words[randomNumber])
    const [input, setInput] = useState("");
    const [buruuHariulsanToo, setBuruuHariulsanToo] = useState(1);
    const [zuvTaasan, setZuvTaasan] = useState([]);
    const [hojigdson, setHojigdson] = useState(false);

    const onChangeInput = (e) => {
        const text = e.target.value
        setInput(text)
    }
    const onClickBtn = () => {
        if (word.includes(input)) {
            // Үсэг байна
            setZuvTaasan([...zuvTaasan, input])
        } else {
            const buruuHariult = buruuHariulsanToo + 1
            // Үсэг байхгүй
            setBuruuHariulsanToo(buruuHariult)
            if (buruuHariult > 7) {
                setHojigdson(true)
            }
        }
        setInput("")
    }
    // ["b","a"]
    // Тэмдэг үгийг массив болгож байна "dog" => ["d","o","g"]
    const wordArray = word.split("")
    const maskedWord = wordArray.map(useg => {
        if (zuvTaasan.includes(useg))
            return useg
        else return " _ "
    })
    const hojsonuu = !maskedWord.includes(" _ ")

    const zurag = 'image/' + buruuHariulsanToo + ".jpg"
    return (<div>
        {hojsonuu && <h1>Та хожлоо баяр хүргье</h1>}
        {hojigdson ?
            <h1>Та хожигдлоо</h1> :
            <div>
                <img src={zurag} width={150} height={150} />
                <p> {maskedWord.map(useg => useg)} </p>
                <input value={input} onChange={onChangeInput} placeholder='Үсэг оруулна уу' />
                <button onClick={onClickBtn}>Шалгах</button>
            </div>
        }


    </div>);
}

export default Hangman;