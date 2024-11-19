import React, { useContext } from 'react'
import Context from './Context'

const CartData = ({ apiData }) => {


 
    let { dispatch } = useContext(Context);


    const addToCartFun = (item) => {
         
        dispatch({
            type: "addItem",
            payload: item
        })
    }

    return (
        <>
            {
                apiData.map((val) => {
                    return (
                        <div className='childCart' >
                            <img src={val.products[1].thumbnail} alt="" />
                            <h2>{val.products[1].title}</h2>
                            <p>Price : ${val.products[1].price}</p>
                            <button onClick={() => addToCartFun(val)}>AddToCart</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default CartData
