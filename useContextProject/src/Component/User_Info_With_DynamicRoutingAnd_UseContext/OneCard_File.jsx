import React from 'react'
import { useParams } from 'react-router-dom'

const OneCard_File = ({ data }) => {
    let { id } = useParams();
    let newData = data.filter((val, ind) => id === ind.toString());


    return (
        <div id='userData'>
            {
                newData.map((val) => {
                    return (
                        <div id='secUser'>
                            <img src={val.image} alt="" />
                            <h2>Name : {val.firstName}  {val.lastName}</h2>
                            <p>DOB : {val.birthDate}</p>
                            <p>Age : {val.age}</p>
                            <p>Gender : {val.gender}</p>
                            <p>Gmail : {val.email}</p>
                            <p>Number : {val.phone}</p>
                            <p>BloodGroup : {val.bloodGroup}</p>
                            <p>Height : {val.height} meter</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default OneCard_File
