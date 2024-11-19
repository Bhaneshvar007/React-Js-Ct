import React, { useEffect, useRef, useState } from 'react'



const Password = () => {

    let [password, setPassword] = useState();
    let [length, setLenght] = useState(8);
    let [isNum, setIsNum] = useState(false);
    let [isSpacial, setIsSpacial] = useState(false);
    let passRef = useRef(null);


    function passwordGen() {
        let pass = "";
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        if (isNum) str += '1234567890';
        if (isSpacial) str += '@#$%&*!~??\|';

        for (let i = 1; i <= length; i++) {
            let ranNum = Math.floor(Math.random() * str.length + 1);

            pass += str.charAt(ranNum);
        }

        setPassword(pass);
    }

    useEffect(() => {
        passwordGen()
    }, [length, isNum, isSpacial]);


    function CopyToClipboard() {
        window.navigator.clipboard.writeText(password);
        alert("Text Copy Successfully....")
    }




    return (
        <div className='bg-slate-900 text-white w-[32rem] p-7 text-center m-auto mt-10 rounded'>
            <h1 className='text-4xl font-bold my-3'>Password Ganeratore</h1>
            <div className='flex items-center gap-2 my-5'>
                <input className='w-full px-3 py-2 outline-none rounded text-black' type="text" readOnly value={password} placeholder='Password' />
                <button className='bg-[#DC143C] p-2 px-5 font-bold rounded' onClick={CopyToClipboard}>Copy</button>
            </div>
            <div className='flex gap-3 justify-center'>
                <div className='flex items-center gap-2'>
                    <input type="range" min={8} max={30} value={length} onChange={(e) => { setLenght(e.target.value) }} ref={passRef} />
                    <label>Length : {length}</label>
                </div>

                <div className='flex items-center gap-2'>
                    <input id='isNum' type="checkbox" defaultChecked={isNum} onChange={() => setIsNum((prev) => !prev)} />
                    <label htmlFor="isNum">Number</label>
                </div>

                <div className='flex items-center gap-2'>
                    <input type="checkbox" id='isSp' defaultChecked={isSpacial} onChange={() => setIsSpacial((prev) => !prev)} />
                    <label htmlFor="isSp">Character</label>
                </div>
            </div>
        </div>
    )
}

export default Password
