import React, { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaRegCircle } from "react-icons/fa";

let circle = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9hVSD6iVxZARXC-2RpBpJffwAyiwJW9ZwTw&s'
let croxx = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUxdxNQ027NQ24W1XL2NYWz5E1wEI-tsPy_IQW26MDAxOMTQ_S6wpXYtQINiDcYrVl9WE&usqp=CAU'


let data = ["", "", "", "", "", "", "", "", "",];

const TicToe = () => {

    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let titleRef = useRef(null);


    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    let boxArr = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
    function togle(e, num) {
        if (lock) return 0;

        if (count % 2 == 0) {
            e.target.innerHTML = `<img src='${croxx}'/>`
            data[num] = "x"
            setCount(++count);
        }
        else {
            e.target.innerHTML = `<img src='${circle}'/>`
            data[num] = "o"
            setCount(++count);
        }

        checkWin()
    }


    function checkWin() {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== '') {
            won(data[2])
        }
        else if (data[3] === data[4] && data[4] === data[5] && data[5] !== '') {
            won(data[5])
        }
        else if (data[6] === data[7] && data[7] === data[8] && data[8] !== '') {
            won(data[8])
        }
        else if (data[0] === data[3] && data[3] === data[6] && data[6] !== '') {
            won(data[6])
        }
        else if (data[1] === data[4] && data[4] === data[7] && data[7] !== '') {
            won(data[7])
        }
        else if (data[2] === data[5] && data[5] === data[8] && data[8] !== '') {
            won(data[8])
        }
        else if (data[0] === data[4] && data[4] === data[8] && data[8] !== '') {
            won(data[8])
        }
        // else if (data[0] === data[1] && data[1] === data[2] && data[2] !== '') {
        //     won(data[2])
        // }
        else if (data[2] === data[4] && data[4] === data[6] && data[6] !== '') {
            won(data[6])
        }

    }

    function won(win) {
        setLock(true);
        if (win === 'x') titleRef.current.innerHTML = `Congratulations : <span className="">X</span>`
        else titleRef.current.innerHTML = `Congratulations : <span className="">O</span>`

    }


    function resrt() {
        alert("Restart The game")
        setLock(false);
        data = ["", "", "", "", "", "", "", "", "",];
        titleRef.current.innerHTML = 'Tic Toc Toe in <span className="">React</span>'
        boxArr.map((e) => {
            e.current.innerHTML = "";
        })
    }

    return (
        <div className="bgc w-full h-[100vh] text-center py-10">
            <h1 ref={titleRef} className="text-white font-bold text-4xl ">Tic Toc Toe in <span className="text-[#D85004]">React</span></h1>
            <div className="flex justify-center my-10 gap-5">
                <div className="row-1 flex gap-5 flex-col">
                    <div className="boxes" ref={box1} onClick={(e) => { togle(e, 0) }}></div>
                    <div className="boxes" ref={box2} onClick={(e) => { togle(e, 1) }}></div>
                    <div className="boxes" ref={box3} onClick={(e) => { togle(e, 2) }}></div>
                </div>
                <div className="row-1 flex gap-5 flex-col">
                    <div className="boxes" ref={box4} onClick={(e) => { togle(e, 3) }}></div>
                    <div className="boxes" ref={box5} onClick={(e) => { togle(e, 4) }}></div>
                    <div className="boxes" ref={box6} onClick={(e) => { togle(e, 5) }}></div>
                </div>
                <div className="row-1 flex gap-5 flex-col">
                    <div className="boxes" ref={box7} onClick={(e) => { togle(e, 6) }}></div>
                    <div className="boxes" ref={box8} onClick={(e) => { togle(e, 7) }}></div>
                    <div className="boxes" ref={box9} onClick={(e) => { togle(e, 8) }}></div>
                </div>
            </div>
            <button className="bg-blue-500 h-[40px] w-[150px] text-xl font-semibold text-white rounded-lg"
                onClick={() => resrt()}
            >Restart</button>
        </div>

    )
}

export default TicToe;