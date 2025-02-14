import React from "react"

const Navbar=()=>{
    return (
  <nav class="bg-black text-white px-8 md:px-16 lg:px-24">
    <div class="flex justify-center items-center md:justify-between py-2">
      <h1 class="text-2xl font-bold hidden md:inline">Alok</h1>
      <ul class="flex gap-4 cursor-pointer">
        <a href="#Hero" class="font-semibold hover:text-gray-400">Home</a>
        <a href="#AboutMe" class="font-semibold hover:text-gray-400">About Me</a>
        <a href="#Service" class="font-semibold hover:text-gray-400">Services</a>
        <a href="#Project" class="font-semibold hover:text-gray-400">Projects</a>
        <a href="#Contact" class="font-semibold hover:text-gray-400">Contact</a>
      </ul>
      <a href="#Contact" class="border rounded-full px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105">Contact Me</a>
    </div>
  </nav>
    )
}

export default Navbar