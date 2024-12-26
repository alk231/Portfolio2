import React from "react";

const projects=[
  {
    id: 1,
    name: "Employee MS",
    technologies: "MERN Stack",
    image:"src/assets/employee.png",
    github: "https://github.com/YouafKhan1",
  },
  {
    id: 2,
    name: "Blog App",
    technologies: "MERN Stack",
    image:"src/assets/admin.png",
    github: "https://github.com/YouafKhan1",
  },
  {
    id: 3,
    name: "Book MS",
    technologies: "MERN Stack",
    image:"src/assets/employee.png",
    github: "https://github.com/YouafKhan1",
  },
];

const Project=()=>{
  return (
    <div class="mt-20" id="Project">
      <h1 class="text-white text-center text-4xl font-bold mb-12">My Projects</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project)=>(
          <div key={project.id} class="bg-gray-800 p-4 w-fit rounded-xl mx-auto hover:transform transition-transform duration-300 hover:scale-105">
            <img src={project.image} alt="" class="h-48 w-full mb-3"></img>
            <h1 class="text-2xl font-bold text-white mb-1">{project.name}</h1>
            <h1 class="text-gray-300 mb-2">{project.technologies}</h1>
            <button class="bg-gradient-to-r from-green-400 to-blue-500 py-2 px-3 rounded-full">GitHub</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project