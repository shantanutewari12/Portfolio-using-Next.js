import React from 'react';
import {RiComputerLine} from "react-icons/ri"

import "./Work.css"
const Work = () => {
  return (
    <div id='work' className='container text-center pt-5  text-black work'>
         <h1 className='spaceX title'>What I'm Doing</h1> 
         <span className='spaceX'>
I'm passionate about my work. I find deep satisfaction in my tasks.</span>
         <span className='line'></span>

         <div class="row justify-content-center align-items-center pt-4 pb-4">
  <div class=" max-w work-card col-lg-3 col-md-4 col-sm-6 ms-1 me-1 text-light mt-3 d-flex flex-column align-items-center justify-content-center border-0 pt-5 pb-5 rounded" data-aos="fade-in">
     <span className='work-card-icons'> <RiComputerLine fontSize={"3rem"}/></span>
    <h4 class="pt-3 spaceX title">React Dev..</h4>
    <p class="pt-3 ddin">
    As React developer, 
    I specialize in crafting web applications and 
    software using React.
     If you're seeking experienced developer,
     feel free to reach out via email.</p>
  </div>
  <div class=" max-w work-card col-lg-3 col-md-4 col-sm-6 ms-1 me-1 text-light mt-3 d-flex flex-column align-items-center justify-content-center border-0 pt-5 pb-5 rounded" data-aos="fade-in">
  <span className='work-card-icons'> <RiComputerLine fontSize={"3rem"}/></span>
    <h4 class="pt-3 spaceX title">Backend Dev..</h4>
    <p class="pt-3 ddin"> A dedicated backend developer specializing in Node.js and Express.
     I create web applications and APIs with precision and expertise.
     If you need backend development, reach out to me via email.</p>
  </div>
 
  <div class=" max-w work-card col-lg-3 col-md-4 col-sm-6  ms-1 me-1 text-light mt-3 d-flex flex-column align-items-center justify-content-center border-0 pt-5 pb-5 rounded" data-aos="fade-in">
  <span className='work-card-icons'> <RiComputerLine fontSize={"3rem"}/></span>
    <h4 class="pt-3 spaceX title">UI/UX Dev..</h4>
    <p class="pt-3 ddin">  
I'm a UI/UX developer with expertise in the MERN stack.
 I specialize in crafting user-friendly applications and websites. 
If you're in need of a skilled developer, please don't hesitate to contact me via email.</p>
  </div>
  
</div>

    </div>
  )
}

export default Work
