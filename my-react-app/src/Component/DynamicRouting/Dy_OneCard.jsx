import React from 'react'
import { useParams } from 'react-router-dom'

const Dy_OneCard = ({ data }) => {
    let { id } = useParams()
    const newData = data.filter((val, ind) => ind.toString() === id);


    return (
        <div>
            {
                newData.map((e) => {
                    return (
                        <div className='card'>
                            <img src={e.image} alt="" />
                            <h2>{e.name}</h2>
                            <p>{e.instructions[0]}</p>
                            <button>{e.mealType[0]}</button>
                            <h2>Calories : {e.caloriesPerServing}</h2>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Dy_OneCard
