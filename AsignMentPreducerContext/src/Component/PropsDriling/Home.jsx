import React, { useEffect, useState } from 'react'
import CartData from './CartData';

const Home = ({ storeData, setStoreData }) => {
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
            <CartData apiData={apiData} storeData={storeData} setStoreData={setStoreData} />
        </div>
    )
}

export default Home
