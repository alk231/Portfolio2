import React from "react";

const AboutMe=()=>{
  return (
    <div class="mt-20" id="AboutMe">
    <div class="mx-auto flex flex-col justify-center items-center md:px-16 lg:px-24">
      <h1 class="text-4xl text-white font-bold mb-12">About Me</h1>
      <div class="flex flex-col md:flex-row md:space-x-12">
        <img src="assets/alok.jpeg" alt="" class="w-72 h-80 mx-auto rounded object-cover mb-8 md:mb-0"></img>
        <div class="space-y-4">
        <p class="text-lg text-gray-300 mb-8 mx-3 md:mx-0">I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.</p>
          <div class="flex items-center mx-3 md:mx-0">
            <label htmlFor="htmlandcss" className="w-2/12 text-gray-300">HTML & CSS</label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
            </div>
          </div>
          <div class="flex items-center mx-3 md:mx-0">
            <label htmlFor="htmlandcss" className="w-2/12 text-gray-300">React Js</label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12"></div>
            </div>
          </div>
          <div class="flex items-center mx-3 md:mx-0">
            <label htmlFor="htmlandcss" className="w-2/12 text-gray-300">Node Js</label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-5/12"></div>
            </div>
          </div>
          <div id="idea" class="flex justify-between py-8 mx-3">
          <div class="flex flex-col justify-center items-center">
            <h1 class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-green-400 to-blue-500">1+</h1>
            <p class="text-gray-300">Years Experience</p>
          </div>
          <div class="flex flex-col items-center">
            <h1 class="text-2xl font-bold text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text">20+</h1>
            <p class="text-gray-300">Projects Completed</p>
          </div>
          <div class="flex flex-col items-center">
            <h1 class="text-2xl font-bold text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text">10+</h1>
            <p class="text-gray-300">Happy Clients</p>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}
export default AboutMe