import React, { useContext } from 'react'
import './Style.css'
import Context from './Context';

const Cart = () => {
    let { cart , dispatch } = useContext(Context);

    function removeHandler(index) {

        dispatch({
          type : 'remove',
          payload : index
        })
     }



    return (
        <div className='parent'>
            {
                cart.map((e, index) => {
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



