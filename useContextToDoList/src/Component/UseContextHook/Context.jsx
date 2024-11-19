import { useReducer } from "react";
import { createContext } from "react";

let Context = createContext();

function ContextProvider({ children }) {

    let data = {
        input: '',
        inpData: []
    }

    function reducer(state, action) {

        if (action.type === 'inp') {
            return {
                ...state, input: action.payload
            }
        }

        else if (action.type === 'addData') {
            return {
                ...state, inpData: [...state.inpData, action.payload],
                input: ''

            }
        }

        else if (action.type === 'delet') {
            return {
                ...state, inpData: [...state.inpData.filter((val, ind) => {
                    return ind != action.payload
                })]

            }
        }

    }

    let [state, dispatch] = useReducer(reducer, data);


    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider }

export default Context;