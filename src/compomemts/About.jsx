import React from 'react'


import img from '../Assest/marge 12.png'








function About() {
  return (
    <>

<section class="bg-gray-100 body-font container " >
        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div class="lg:max-w-sm   lg:w-full md:w-1/2 w-5/6">
       

       
       <div>
       <img class="w-full rounded   mt-20"     alt="hero"  src={img}/>
     
       
       </div>
       
       
                 </div>






{/* second col start */}
        
 <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-right">

<p class="title-font  text-1xl mb-1 font-bold   text-blue-800">
 ABOUT US
</p>
<h1 class=" mb-3 font-extrabold text-4xl text-black ">
 We Have Best Online<br/> Education
</h1>

<p class="  text-sm mt-4    text-gray-600">
 Morbi Porttitor llgula id virus  consection integer ipsum justo, congue sit amet 
 massa vel, portitter sempter omega magna, Orci varius natoque penatibus et magnis dis 
 partiurientt montes, nasceter ridiculus mus.

</p>

<br />
<i className='flex items-center'> 

<svg viewBox="0 0 64 64 " className='w-5 h-5 '  xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" fill="#f2640c" r="30"/><path d="m46 14-21 21.6-7-7.2-7 7.2 14 14.4 28-28.8z" fill="#fff"/></svg>



   <span className='font-bold ml-3'>Suspendive nunc  massa, pellentuque eu nibh eget</span></i>
<br />
<i className='flex items-center'> 
<svg viewBox="0 0 64 64 " className='w-5 h-5 '  xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" fill="#f2640c" r="30"/><path d="m46 14-21 21.6-7-7.2-7 7.2 14 14.4 28-28.8z" fill="#fff"/></svg>



   <span className='font-bold ml-3'>Suspendive nunc  massa, pellentuque eu nibh eget</span></i><br /> 
   <i className='flex items-center'> 
<svg viewBox="0 0 64 64 " className='w-5 h-5 '  xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" fill="#f2640c" r="30"/><path d="m46 14-21 21.6-7-7.2-7 7.2 14 14.4 28-28.8z" fill="#fff"/></svg>



   <span className='font-bold ml-3'>Suspendive nunc  massa, pellentuque eu nibh eget</span></i>







<br />

<div class="flex justify-center">
  <div className=" h-12 w-48 bg-orange-500 rounded-md flex duration-500  hover:bg-blue-950 items-center relative">
    <p className=" text-white  absolute z-20 font-bold  m-4">
      {" "}
      EXPLORE COURSES
    </p>
    <div className="bg-blue-950 w-8 h-8 rounded-md  absolute z-10 ml-36 ">
      {" "}
    </div>
  </div>





</div>




</div> 








        </div>

        
      </section>





      
    </>
  )
}

export default About



