import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Counter from './Component/CounterWithContext/Counter'

function App() {
  // const [storeData, setStoreData] = useState([]);

  return (

    <div>

       <Counter />



      {/*   Props Driling */}
      {/* <NavBar /> */}
      {/* <Routes>
        <Route path='/' element={<Home storeData={storeData} setStoreData={setStoreData} />} />
        <Route path='/cart' element={<Cart storeData={storeData} setStoreData={setStoreData} />} />
      </Routes> */}




      {/* Use Context */}
      {/* <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes> */}
    </div>
  )
}

export default App

