import React from 'react'
import { useState } from 'react'



const Custom = () => {
    let [count, setCount] = useState(0);
    function incr() {
        setCount(count + 1);
    }
    function decr() {
        setCount(count - 1);
    }
    return { incr, decr, count }
}

export default Custom
