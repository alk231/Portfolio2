import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    id: 1,
    name: "Employee MS",
    technologies: "MERN Stack",
    image: "assets/employee.png",
    github: "https://github.com/YouafKhan1",
  },
  {
    id: 2,
    name: "Blog App",
    technologies: "MERN Stack",
    image: "assets/admin.png",
    github: "https://github.com/YouafKhan1",
  },
  {
    id: 3,
    name: "Book MS",
    technologies: "MERN Stack",
    image: "assets/employee.png",
    github: "https://github.com/YouafKhan1",
  },
  {
    id: 4,
    name: "Book MS",
    technologies: "MERN Stack",
    image: "assets/employee.png",
    github: "https://github.com/YouafKhan1",
  },
];

const Project = () => {
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-20" id="Project">
      <h1 className="text-white text-center text-4xl font-bold mb-12">
        My Projects
      </h1>
      <div className="mx-auto px-8 max-w-7xl">
        <Slider {...settings}>
          {projects.map((project) => (
            <div
              className="slick-slide px-3" // Adds spacing between slides
              key={project.id}
            >
              <div className="bg-gray-800 p-4 w-fit rounded-xl hover:transform transition-transform duration-300 hover:scale-105">
                <img
                  src={project.image}
                  alt=""
                  className="h-48 w-full mb-3"
                />
                <h1 className="text-2xl font-bold text-white mb-1">
                  {project.name}
                </h1>
                <h1 className="text-gray-300 mb-2">
                  {project.technologies}
                </h1>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-400 to-blue-500 py-2 px-3 rounded-full"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Project;
