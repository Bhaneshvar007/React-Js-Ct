import React from 'react'

const CartData = ({ apiData, setStoreData, storeData }) => {
    return (
        <>
            {
                apiData.map((val) => {
                    return (
                        <div className='childCart' >
                            <img src={val.products[1].thumbnail} alt="" />
                            <h2>{val.products[1].title}</h2>
                            <p>Price : ${val.products[1].price}</p>
                            <button onClick={() => setStoreData([...storeData, val])}>AddToCart</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default CartData
