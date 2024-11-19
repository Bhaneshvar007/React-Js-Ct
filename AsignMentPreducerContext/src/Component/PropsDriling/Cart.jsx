import React from 'react'
import './Style.css'

const Cart = ({ storeData, setStoreData }) => {

    function removeHandler(index) {
        let newData = storeData.filter((val, ind) => {
            return index !== ind;
        })
        setStoreData(newData);
    }



    return (
        <div className='parent'>
            {
                storeData.map((e, index) => {
                    return (
                        <div className='childCart' >
                            <img src={e.products[1].thumbnail} alt="" />
                            <h2>{e.products[1].title}</h2>
                            <p>Price: ${e.products[1].price}</p>
                            <button onClick={() => removeHandler(index)}>Remove-Item</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cart
