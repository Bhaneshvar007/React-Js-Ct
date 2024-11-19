import { useContext } from "react"
import Context from "./Context"
import './Style.css'

const ToDoList = () => {


    let { state, dispatch } = useContext(Context);

    function inputHandler(e) {
        dispatch({
            type: 'inp',
            payload: e.target.value
        })
    }

    function addHandler() {
        dispatch({
            type: 'addData',
            payload: state.input
        })
    }

    function deleteHandler(ind) {
        dispatch({
            type: 'delet',
            payload: ind
        })
    }
    return (
        <div className="container">
            <div div className="input-section" >
                <input type="text" onChange={inputHandler} value={state.input} placeholder="e:g input...." className="input-field" />
                <button onClick={addHandler} className="add-button">Add Data</button>
            </div>

            <ul className="data-list">

                {
                    state.inpData.map((val, ind) => {
                        return (
                            <li className="data-item">
                                {val}
                                <button className="delete-button" onClick={() => deleteHandler(ind)}>Delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


export default ToDoList