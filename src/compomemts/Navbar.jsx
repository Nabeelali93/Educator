import React from 'react'
import logo from '../Assest/logo.png'




function Navbar() {
  return (
    <>



<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
  <img src={logo} className='flex title-font font-medium items-center mb-4' alt=""  />



    <nav class="md:ml-auto md:mr-auto flex flex-wrap font-bold items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">Home</a>
      <a class="mr-5 hover:text-gray-900">About</a>
      <a class="mr-5 hover:text-gray-900">Career</a>
      <a class="mr-5 hover:text-gray-900">Blog</a>
      <a class="mr-5 hover:text-gray-900">Contact us</a>

    </nav>
 

    <div className=' h-12 w-40 bg-orange-500 rounded-md flex mt-1  md:mt-0  hover:bg-blue-950  duration-300 items-center relative'>
<p className=' text-white  absolute z-20 font-bold  m-4'> TRY FOR FREE</p>
<div className='bg-blue-950 w-8 h-8 rounded-md  absolute z-10 ml-28 '> </div>

</div>





  </div>
</header>


    </>
  )
}

export default Navbar
