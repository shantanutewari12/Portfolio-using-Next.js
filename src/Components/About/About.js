import React from "react";
import imag from "../Assets/Images/3426526.jpg";
import "./Abou.css";
import resume from "../Assets/Resume/Shantanu Tiwari.pdf";
const About = () => {
  return (
    <div id="About" className="container-fluid about">
      <div className="container">
        <div class="row justify-content-center align-items-center g-2">
          <div
            className="col-lg-6 col-md-12 col-sm-12  pt-5 "
            data-aos="slide-down"
          >
            <h1 className="spaceX title">
              About <span className="text-dark">me</span>
            </h1>
            <h6 className="spaceX mt-2">Full-stack Developer</h6>
            <p className="mt-2 ddin title">Moradabad, Uttar Pradesh, India</p>
            <p className="ddin title">
            Dedicated to Creating Compelling User Interactions
            </p>
            <p className="ddin">
            I'm Shantanu, a MERN stack developer from India. Graduated in 2022 in Mechanical engineering. 
            Passionate about web development and open source projects. 
            My goal is to excel in web development and contribute to the community through code. In my free time, I love exploring new tech and working on personal coding projects
            </p>
            <button className="hire bg-dark">
              {" "}
              <span>
                <a href="mailto:shantanitiwari12@gmail.com">Hire Me</a>
              </span>
            </button>
            <button className="cv bg-dark"> <a href={resume} download>Download CV</a></button>
          </div>
          <div
            className="col-lg-6 col-md-12 col-sm-12 ps-5 pe-5 pt-5 rounded "
            data-aos="slide-up"
          >
            <img src={imag} className="img-fluid" alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
