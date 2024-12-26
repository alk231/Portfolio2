import React from "react";

const services=[
  {
    id:1,
    title:"Web Design",
    description:"Creating visually appealing and user-friendly web designs."
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
  },
  {
    id: 5,
    title: "Content Writing",
    description: "Writing content for your business and companies.",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Promote your business with our digital marketing team.",
  },
];
const Service = () => {
  return (
    <div id="Service" className="mt-20">
      <h1 class="text-white text-4xl text-center font-bold mb-12">My Services</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {services.map((service) => (
            <div key={service.id} class="bg-gray-800 mb-4 rounded-xl mx-9 hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h1 className="text-blue-400 font-bold text-lg text-right px-4">{service.id}</h1>
              <div class=" px-4 py-3">
              <h1 class="bg-gradient-to-r from-green-400 to-blue-500 text-2xl text-transparent bg-clip-text font-bold mb-1">{service.title}</h1>
              <p class="text-gray-300 mb-3">{service.description}</p>
              <h3 class="text-green-400">Read More</h3>
              </div>
              </div>
        ))}
      </div>
    </div>
  );
};

export default Service