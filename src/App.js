import React from 'react'
import Navbar from './compomemts/Navbar'
import HeraSec from './compomemts/HeraSec'
import Category from './compomemts/Category'
import About from './compomemts/About'
// import New from './compomemts/New'

function App() {
  return (
    <div>
     <Navbar/>
      <HeraSec/> 
<Category/>
<About/>

      {/* <New/> */}
    </div>
  )
}

export default App
