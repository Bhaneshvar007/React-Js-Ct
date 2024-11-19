import React from 'react'

const SkillBox = ({ name, img }) => {
    return (
        <div data-aos="zoom-in-left" className="px-5 py-6 w-24 h-24 sm:w-32 sm:h-32 rounded text-center flex items-center flex-col gap-2 cursor-pointer shadow-md">
            <img className="h-12 w-12 sm:h-20 sm:w-20 object-contain" src={img} alt={name} />
        </div>
    )
}

export default SkillBox

