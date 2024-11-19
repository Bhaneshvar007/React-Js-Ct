import React, { useEffect, useRef, useState } from 'react'




// First use Case to avoid re-randring
// const UseRefCom = () => {
//     const [inputValue, setInputValue] = useState("");
//     const count = useRef(0);

//     useEffect(() => {
//         count.current = count.current + 1;
//     });

//     return (
//         <>
//             <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//             />
//             <h1>Render Count: {count.current}</h1>
//         </>
//     );
// }




//  Secound useCase

const UseRefCom = () => {
    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
    };

    return (
        <>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    );
}



export default UseRefCom
