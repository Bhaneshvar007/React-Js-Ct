import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import './App.css'

const Dy_Home = ({ data, setData }) => {


    useEffect(() => {
        fetch('https://dummyjson.com/recipes').then((res) => {
            return res.json();
        }).then((val) => {
            setData(val.recipes);
        })
    }, [])

    let usenavigate = useNavigate();

    function clickHandler(id) {
        usenavigate(`/cart/${id}`);
    }


    return (
        <div>
            <div>
                {
                    data.map((e, id) => {
                        return (
                            <div className='card'>
                                <img src={e.image} alt="" />
                                <h2>{e.name}</h2>
                                <button onClick={() => clickHandler(id)}>View Item</button>
                            </div>
                        )
                    })

                }
            </div>
        </div>
    )
}

export default Dy_Home
