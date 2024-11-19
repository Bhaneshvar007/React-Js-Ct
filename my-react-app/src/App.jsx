import React, { useState } from 'react'
import Dy_Home from './Component/DynamicRouting/Dy_Home';
// import UseStateComp from './Component/UseStateComp'
// import Props from './Component/Props'
// import UseEfactHoocks from './Component/UseEfactHoocks';
// import AsignMent_01 from './Component/PrintAllDataProps';
import './App.css'
import UseRefCom from './Component/UseRef/UseRefCom';
// import Custom from './Component/CustomeHook/Custom';
// import Memo from './Component/MemoFun/Memo';
// import { Route, Routes } from 'react-router-dom';
// import Dy_OneCard from './Component/DynamicRouting/Dy_OneCard';
// import Memo from './Component/UseMemo/Memo';
// import NavBar from './Component/NavBar/NavBar';
// import CardFilterPropsState from './Component/CardFilterPropsState';
// import ControlComponentForm from './Component/ControlComponentForm';
// import ToDoList from './Component/ToDoList/ToDoList';
// import { Route, Routes } from 'react-router-dom';



const App = () => {

  // let [mealTypes, setMealType] = useState("All");
  // let [data, setData] = useState([]);



  // custome hook

  // let { incr, decr, count } = Custom();

  // let data = "Parent data shared";
  return (
    <div>
      {/* <UseStateComp /> */}
      {/* <Props data={data} /> */}

      {/* <UseEfactHoocks /> */}

      {/* <PrintAllDataProps /> */}

      {/* <NavBar setMealType={setMealType} />
      <CardFilterPropsState mealTypes = {mealTypes} /> */}


      {/* <ControlComponentForm /> */}



      {/* <ToDoList /> */}


      {/* <NavBar/> */}


      {/* <Routes>
        <Route path='/' element={<Dy_Home data={data} setData={setData} />} />
        <Route path='/cart/:id' element={<Dy_OneCard data={data} />} />
      </Routes> */}

      {/* <Memo /> */}



      {/*  Custom hooks */}

      {/* <h2>{count}</h2>
        <button onClick={incr}>++</button>
        <button onClick={decr}>--</button> */}





      {/*  Memo Fn for optimization */}
      {/* <Memo /> */}



      {/*  UseRef */}
      {/* The useRef Hook allows you to persist values between renders.
      It can be used to store a mutable value that does not cause a re-render when updated.
      It can be used to access a DOM element directly. */}


      <UseRefCom />
    </div>
  )
}

export default App