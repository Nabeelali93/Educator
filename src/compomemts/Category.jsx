import React from "react";
import icon1 from "../Assest/course-category-icon-1.png";
import icon2 from '../Assest/course-category-icon-2.png'
import  icon3 from '../Assest/course-category-icon-3.png'

import icon4 from '../Assest/course-category-icon-4.png'
import icon5 from '../Assest/course-category-icon-5.png'
import icon6 from '../Assest/course-category-icon-6.png'






function Category() {
  return (
    <>
      <div className="container ">
<br />
<div className="row">
    <div className="col">
        <p className=" text-center text-blue-700 font-bold">COURSE CATEGORY</p>
    </div>


    <div className="row">
        <div className="col">
            <h1 className=" text-center text-4xl font-extrabold mt-2">Explore Popular Courses</h1>
        </div>
    </div>
</div>

<div class="flex flex-wrap  flex-col md:flex-row justify-between items-center px-5 ">
    
    <div class="p-4 md:w-1/4 sm:w-1/2 flex  justify-center ">
      <div class="border-2 border-gray-200 w-80 flex px-4 py-3  -mx-40 rounded-lg">
        <img src={icon1} className="h-12 " alt="." />

        <h2 class="title-font font-bold ml-3 text-lg text-black">Learning Data Science <br />
        <span className="text-gray-400  text-xs">Data is Everything</span>
        </h2>
      </div>
    </div>


    <div class="p-4 md:w-1/4 sm:w-1/2 flex justify-center ">
      <div class="border-2 border-gray-200 w-80 flex px-4 py-3  -mx-40 rounded-lg">
        <img src={icon2} className="h-12 " alt="." />

        <h2 class="title-font font-bold ml-3 text-lg text-black">Business Strategy <br />
        <span className="text-gray-400  text-xs">Improve Your business</span>
        </h2>
      </div>
    </div>
 

    <div class="p-4 md:w-1/4 sm:w-1/2 flex  justify-center ">
      <div class="border-2 border-gray-200 w-80 flex px-4 py-3  -mx-40 rounded-lg">
        <img src={icon3} className="h-12 " alt="." />

        <h2 class="title-font font-bold ml-3 text-lg text-black">Learn Art & Design <br />
        <span className="text-gray-400  text-xs">Fun & Challenging</span>
        </h2>
      </div>
    </div>

    </div>



    <div class="flex flex-wrap  flex-col md:flex-row  justify-between items-center px-5">
    
    <div class="p-4 md:w-1/4 sm:w-1/2 flex  justify-center ">
      <div class="border-2 border-gray-200 w-80 flex px-4 py-3  -mx-40 rounded-lg">
        <img src={icon4} className="h-12 " alt="." />

        <h2 class="title-font font-bold ml-3 text-lg text-black">Learn Lifestyle <br />
        <span className="text-gray-400  text-xs">New Skills, New You</span>
        </h2>
      </div>
    </div>


    <div class="p-4 md:w-1/4 sm:w-1/2 flex justify-center ">
      <div class="border-2 border-gray-200 w-80 flex px-4 py-3  -mx-40 rounded-lg">
        <img src={icon5} className="h-12 " alt="." />

        <h2 class="title-font font-bold ml-3 text-lg text-black">Learn Marketing <br />
        <span className="text-gray-400  text-xs">Improve Your business</span>
        </h2>
      </div>
    </div>
 

    <div class="p-4 md:w-1/4 sm:w-1/2 flex  justify-center ">
      <div class="border-2 border-gray-200 w-80 flex px-4 py-3  -mx-40 rounded-lg">
        <img src={icon6} className="h-12 " alt="." />

        <h2 class="title-font font-bold ml-3 text-lg text-black">Learn Finance <br />
        <span className="text-gray-400  text-xs">Fun & Challenging</span>
        </h2>
      </div>
    </div>


    </div>







      </div>
    </>
  );
}

export default Category;
