import React, { useMemo, useState } from 'react'

const Memo = () => {

    //  Use Memo ka use code ko optimize karna ke liye kiya jata hai
    // jo kamm havy hai or vah bar bar calculate ho rha hai wha ham useMemo ka use karenge


    let [data, setData] = useState(0)



    // let sum = 0;
    // for (let i = 0; i < 1000000000; i++) {
    //     sum += i;
    // }




    let memo = useMemo(() => {
        function cal() {
            let sum = 0;
            for (let i = 0; i < 1000000; i++) {
                sum += i;
            }
            return sum;
        }
        return cal();

    }, [])

    return (

        <div>
            <h1>{memo}</h1>
            <button onClick={() => { setData(data + 1) }}>{data} click</button>
        </div>
    )
}

export default Memo
