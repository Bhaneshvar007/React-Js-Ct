import React, { useContext } from 'react'
import Context from './Context'

const Counter = () => {
    let { state, dispatch } = useContext(Context);
 

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={() => dispatch({ type: 'incr' })}>++</button>
            <button onClick={() => dispatch({ type: 'decr' })}>--</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        </div >
    )
}

export default Counter
