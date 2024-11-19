import React, { act, useReducer } from 'react'

const ToDO = () => {

    let data = {
        input: "",
        inpData: []
    }


    let [state, dispatch] = useReducer(reducer, data);

    function reducer(state, action) {
        if (action.type === 'inp') {
            return { ...state, input: action.payload }
        }

        else if (action.type === 'add') {
            return {
                ...state, inpData:[...state.inpData, action.payload],
                input: ''
            }
        }

        else if (action.type === 'remove') {
            return {
                ...state, inpData: [...state.inpData.filter((val, ind) => {
                    return ind !== action.payload;
                })]
            };

        }
        else {
            return state;
        }
    }

    function fun1() {
        dispatch({
            type: "add",
            payload: state.input
        })
    }

    function remFun(ind) {
        dispatch({
            type: 'remove',
            payload: ind
        })
    }




    return (


        <div>
            <input type="text"
                value={state.input}
                onChange={(e) => {
                    dispatch({
                        type: "inp",
                        payload: e.target.value
                    })
                }} />



            <button onClick={fun1}>Add</button>

            {
                state.inpData.map((val, ind) => {
                    return (
                        <div><li>{val}</li>
                            <button onClick={() => remFun(ind)}>Del</button>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default ToDO
