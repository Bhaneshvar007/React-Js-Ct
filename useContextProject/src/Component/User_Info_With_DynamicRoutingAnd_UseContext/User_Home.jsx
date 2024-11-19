import React, { useEffect } from 'react';
import './Userdata.css';
import { useNavigate } from 'react-router-dom';

const User_Home = ({ data, setData }) => {
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then((res) => res.json())
            .then((val) => {
                console.log(val);
                setData(val.users);
            });
    }, []);

    function clickHandler(id) {
        navigate(`/user/${id}`);
    }

    return (
        <div id='userData'>
            {data && data.length > 0 ? (
                data.map((val) => (
                    <div id='childUser' key={val.id}>
                        <img src={val.image} alt="" />
                        <h2>{val.firstName} {val.lastName}</h2>
                        <p>Age: {val.age}</p>
                        <p>{val.gender}</p>
                        <button onClick={() => clickHandler(val.id)}>View Profile</button>
                    </div>
                ))
            ) : (
                null
            )}
        </div>
    );
}

export default User_Home;
