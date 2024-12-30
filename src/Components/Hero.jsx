import React from "react";

const Hero=()=>{
  return (
      <div id="Hero" className="mt-5">
        <div className="flex flex-col md:justify-center md:items-center py-6">
        <img src="assets/about.png" alt="" className="mx-auto mb-8 w-40 h-40 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105"></img>
        <h1 class="text-3xl text-white font-bold mb-2 mx-3">I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Alok Kumar Gupta</span>, Full-Stack Developer</h1>
        <p class="text-lg text-gray-300 mx-3">I specialize in building modern and responsive web applications.</p>
        <div class="flex gap-3 mt-6">
          <a href="#Contact" class="border rounded-full py-2 px-4 text-white bg-gradient-to-r from-green-400 to-blue-500 font-medium transform transition-transform duration-300 hover:scale-105 hidden md:inline">Contact with me</a>
          <button
  onClick={() => window.open('assets/Resume.pdf', '_blank')}
  className="border rounded-full py-2 px-4 text-white font-medium bg-gradient-to-r from-pink-600 to-yellow-500 transform transition-transform duration-300 hover:scale-105 hidden md:inline"
>
  Resume
</button>

        </div>
        </div>
      </div>
  )
}

export default Hero;