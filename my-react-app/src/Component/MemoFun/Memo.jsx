import React, { memo, useState } from 'react'


// Memo function ka use ha page optimization ka liye kiya jata hai that mean ek component ki state change hone par dusra component bhi re-render hota hai easa na ho esliye ham memo fn ka use karte hai

const Memo = () => {
    let [data, setData] = useState(0);
    console.log('hello parent');

    return (

        <div>
            <h1>Parent memo</h1>
            <h2>{data}</h2>
            <button onClick={ ()=>  setData(data + 1)}>click</button>
            <MemoFn />
        </div>
    ) 
}


//  Another component

function MemoChild() {
    console.log('hello memo');

    return (
        <div>Hello memo child</div>
    )
}


let MemoFn = memo(MemoChild);



export default Memo
