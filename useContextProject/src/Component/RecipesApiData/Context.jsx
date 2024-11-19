import { useReducer, createContext } from "react";

let Context = createContext();

let initialState = {
    cart: []
};



function reducer(state, action) {
    switch (action.type) {
        case "addItem":
            return { ...state, cart: [...state.cart, action.payload] };

        case "remove":
            return { ...state, cart: [...state.cart.filter((val,ind)=>{
                return ind !== action.payload;
            })] };

        default:
            return state;
    }
}


function ContextProvider({ children }) {
    let [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{ cart: state.cart, dispatch }}>
            {children}
        </Context.Provider>
    );
}

export default Context;
export { ContextProvider };
