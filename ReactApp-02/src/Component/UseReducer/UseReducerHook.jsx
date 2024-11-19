import React, { useReducer } from 'react'


//  usereducer use state ka upgraded version hai jiska work useState ke saman hi hota hai but esme jyada pawar hoti hai ye by default 2 value leta hai pahle ek function jisme hame batana hota hai ki kya karna hai and dusra initional value jo screen par show hoti hai esme bhi useState ki tarah 2 variable hote hai phla value and dusra dispatch jo hame action batata hai 

// The useReducer Hook accepts two arguments.
// useReducer(<reducer>, <initialState>)



const UseReducerHook = () => {

  function reducer(count, action) {
    if (action.type === 'incr') {
      return count += 1;
    }
    else if (action.type === 'decr') {
      return count -= 1;
    }
    else if (action.type === 'reset') {
      return 0;
    }
    else {
      return count
    }
  }


  let [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>

      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: 'incr' })}>incr</button>
      <button onClick={() => dispatch({ type: 'decr' })}>decr</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </div>
  )
}

export default UseReducerHook
