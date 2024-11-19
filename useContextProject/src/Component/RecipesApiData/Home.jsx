import React, { useEffect, useState } from 'react'
import CartData from './CartData';

const Home = (     ) => {
    let [apiData, setApiData] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/carts').then((res) => {
            return res.json();
        }).then((item) => {
            setApiData(item.carts);
        })

    }, []);


    return (
        <div className='parent'>
            <CartData apiData={apiData} />
        </div>
    )
}

export default Home




