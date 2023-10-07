import React from "react";

import "./Project.css";
import ProjectCard from "./ProjectCard";
const Project = () => {
  const projects = [
    { 
      date:"20th August to 25th August",
      title: "Full stack Mail app",
      description: "NamasteMail, an innovative mail app, is crafted using ReactJS for a dynamic and user-friendly interface, while Material UI adds a touch of elegance to its design.",
      cloneLink: "https://github.com/shantanutewari12/Mail-Box-App/archive/refs/heads/main.zip",
      repoLink: "https://github.com/shantanutewari12/Mail-Box-App.git",
      starLink:  "https://namaste-mail.netlify.app",
      languages: [
        { name: " React.js", percentage: 89.5 },
        { name: "MaterialUI", percentage: 26.7 },
        { name: "MongoDb", percentage: 3.1 },
        { name: "Node.js", percentage: 3.8 },
        { name: "Express.js", percentage: 3.8 },
      ]
    },
    { 
      date:"14th August to 19th August",
      title: "Ecommerce App",
      description: "Welcome to my e-commerce store, a project designed to deliver a modern and delightful shopping experience. We've harnessed the power of popular technologies like React, Node.js, Tailwind CSS, Redux, React Toastify, and Google Firebase for the backend to create a seamless platform for our valued customers. ",
      cloneLink: "https://github.com/shantanutewari12/E-commerce-store/archive/refs/heads/main.zip",
      repoLink: "https://github.com/shantanutewari12/E-commerce-store",
      starLink: "https://diversity-bazaar.netlify.app",
      languages: [
        { name: "React.js", percentage: 69.5 },
        { name: "Tailwind css", percentage: 25.8 },
        { name: "Firebase", percentage: 4.7 },
        { name: "Node.js", percentage: 4.7 },
      ]
    },
    {
      date:"20th july to 28th july",
      title: " Full stack Expense Tracker",
      description: "Introducing an innovative expense tracker powered by the latest web technologies - React, Node, and Firebase. Designed with multiple sections tailored to your financial needs, managing expenses has never been more efficient.",
      cloneLink: "https://github.com/shantanutewari12/ExpenseTracker/archive/refs/heads/main.zip",
      repoLink: "https://github.com/shantanutewari12/ExpenseTracker",
      starLink: "https://expense-trackerw.netlify.app",
      languages: [
        { name: "React.js", percentage: 69.5 },
        { name: "FireBase", percentage: 25.8 },
        { name: "Node.js", percentage: 4.7 }
      ]
    },
    {
      date:"15th july to 18th july",
      title: "Food-ordering-app",
      description: "HungryHub, an innovative food-ordering app, is crafted using ReactJS for a dynamic and user-friendly interface, while React-bootstrap adds a touch of elegance to its design. With Firebase Cloud Storage, I ensure secure authentication and a robust backend.",
      cloneLink: "https://github.com/shantanutewari12/FoodOrderingApp/archive/refs/heads/main.zip",
      repoLink: "https://github.com/shantanutewari12/FoodOrderingApp",
      starLink: "https://hungry-hub-app.netlify.app",
      languages: [
        { name: "React.js", percentage: 53.2 },
        { name: "Tailwind Css", percentage: 36.8 },
        { name: "FireBase", percentage: 10.0 }
      ]
    }
  ];
  
  return (
    <div id="Projects" className="container-fluid project">
      <div className="container d-flex justify-content-center flex-column align-items-center">
      <h1 className='spaceX title'>Projects</h1> 
         <span className='spaceX light'>I love what I do. I take great pride in what I do.</span>
         <span className='line mb-4 '></span>
      </div>

     <div class=" container row justify-content-center align-items-center g-2">

     {projects.map((proj) => (
          <ProjectCard key={proj.title} project={proj} />
        ))}

     </div>
    </div>
  );
};

export default Project;
