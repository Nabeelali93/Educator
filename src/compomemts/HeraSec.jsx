import React from "react";
import background from "../Assest/Gradient.png";
import shape from "../Assest/shape-1.png";
import line from "../Assest/banner-line.png";
import round from "../Assest/shape-2.png";
import banner from "../Assest/marge.png";

import banner1 from "../Assest/banner-aliment-icon-1.png";
import banner2 from "../Assest/banner-aliment-icon-2.png";
import banner3 from "../Assest/banner-aliment-icon-3.png";






function HeraSec() {
  return (
    <>
      {/* <img src={background} className=' container w-fulll' alt="" /> */}

      <section class="text-gray-600 body-font container " style={{backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat" ,backgroundSize:"100%" }}>
        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-right">
            <img src={shape} className=" w-24 " alt="" />

            <p class="title-font  text-1xl mb-1 font-bold   text-blue-800">
              WELCOME TO THE ONLINE COACHING
            </p>
            <h1 class=" mb-3 font-extrabold text-5xl text-black ">
              Get Class From <br /> Top Instructor
            </h1>
            <img src={line} className=" ml-24    w-64 " alt="" />

            <p class="  text-1xl mt-4    text-gray-600">
              Integer in magna in est ultrices bibendum eget enim et dui
              imperdiet faucibus. Fusce eu tristque feils.
            </p>

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

              <div className="grid place-content-center  ml-4 ">
                <div className=" h-12 w-40 bg-blue-950 rounded-md flex  hover:bg-orange-500 duration-500 items-center relative">
                  <p className=" text-white  absolute z-20 font-bold  m-4">
                    {" "}
                    CONTACT US
                  </p>
                  <div className="bg-orange-500 w-8 h-8 rounded-md  absolute z-10 ml-28">
                    {" "}
                  </div>
                </div>
              </div>



            </div>


            <img src={round} className='mt-2 -ml-12  w-14' alt="" />


          </div>


{/* second col start */}
          <div class="lg:max-w-sm   lg:w-full md:w-1/2 w-5/6">
       

{/* <img src={bannervector} className='absolute top-44 right-36  hidden sm:block  w-96 ' alt="" /> */}

<div>
<img class="w-full rounded ml-16 relative mt-20"     alt="hero"  src={banner}/>
<img src={banner1}  className="absolute  animate-bounce sm:top-96 h-12 w-40" alt="" />
<img src={banner2} className="absolute h-12 w-40 right-48 bottom-20 animate-bounce " alt="" />
<img src={banner3} className="absolute h-14 right-96 bottom-1 w-36 animate-bounce" alt="" />

</div>


          </div>








        </div>

        
      </section>














    </>
  );
}

export default HeraSec;
