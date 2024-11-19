// import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import User_Home from './Component/User_Info_With_DynamicRoutingAnd_UseContext/User_Home'
import OneCard_File from './Component/User_Info_With_DynamicRoutingAnd_UseContext/OneCard_File'
import { useState } from 'react';

function App() {
  let [data, setData] = useState([]);

  return (
    <>
      {/* <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes> */}



      <User_Home />
      <Routes>
        <Route path='/' element={<User_Home data={data} setData={setData} />} />
        <Route path='/user/:id' element={<OneCard_File  data={data}/>} />
      </Routes>
    </>
  )
}

export default App
