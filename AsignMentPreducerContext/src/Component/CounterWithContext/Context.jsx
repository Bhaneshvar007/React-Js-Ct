import { createContext, useContext, useReducer } from "react";

let Context = createContext();

let data = 0;

function reducer(state, action) {
    if (action.type === 'incr') {
        return state += 1;
    }
    else if (action.type === 'decr') {
        return state -= 1;
    }
    else if (action.type === 'reset') {
        return data;
    }
    else {
        return state;
    }
}

function ContextProvider({ children }) {
    let [state, dispatch] = useReducer(reducer, data);
    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider >
    )
}

export { ContextProvider }
export default Context