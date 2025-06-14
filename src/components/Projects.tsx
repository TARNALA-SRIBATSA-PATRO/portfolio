import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const projects = [
    {
      title: "Employee Feedback System",
      description:
        "A Spring Boot + MySQL backend project to manage employee feedback with automated email reminders. Project managers can rate employees and view all feedback history. Email reminders are sent on a schedule using Spring Scheduler.",
      image: "employee_feedback_system_image.jpg",
      technologies: ["Java 17", "Spring Boot 3.x", "MySQL", "Postman"],
      github: "https://github.com/TARNALA-SRIBATSA-PATRO/employee-feedback-system",
      live: "https://github.com/TARNALA-SRIBATSA-PATRO/employee-feedback-system/blob/main/README.md",
    },
    {
      title: "Web Piano",
      description:
        "A virtual piano built with HTML, CSS, and JavaScript, featuring interactive white and black keys that play corresponding sounds on hover, touch, or keyboard input.",
      image: "piano_image.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/TARNALA-SRIBATSA-PATRO/piano",
      live: "https://tarnala-sribatsa-patro.github.io/piano/",
    },
    {
      title: "Amazon Clone Homepage",
      description:
        "This project is a simplified clone of the Amazon homepage created for beginners. It uses only HTML and CSS and is designed specifically for desktop view.",
      image: "amazon_clone_image.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/TARNALA-SRIBATSA-PATRO/Amazon_Clone",
      live: "https://tarnala-sribatsa-patro.github.io/Amazon_Clone/",
    },
    {
      title: "AWT Calendar App",
      description:
        "The AWT Calendar App is a simple GUI-based calendar application built using Java AWT. It allows users to view and navigate through different months and years dynamically.",
      image: "awt_calender_image.jpg",
      technologies: ["Java", "AWT"],
      github: "https://github.com/TARNALA-SRIBATSA-PATRO/AWT-Calendar-App",
      live: "https://github.com/TARNALA-SRIBATSA-PATRO/AWT-Calendar-App/blob/main/README.md",
    },
    {
      title: "Calculator App",
      description:
        "A simple and responsive calculator application built with HTML, CSS, and JavaScript. This project features a clean design and basic arithmetic functionality.",
      image: "web_calculator_image.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/TARNALA-SRIBATSA-PATRO/web-calculator",
      live: "https://tarnala-sribatsa-patro.github.io/web-calculator/",
    },
    {
      title: "Library Management System",
      description:
        "This is a Java-based Library Management System designed to simplify and automate library tasks like managing book inventories, tracking student registrations, etc.",
      image: "library_management_system_image.jpg",
      technologies: ["Java"],
      github: "https://github.com/TARNALA-SRIBATSA-PATRO/Library-Management-System",
      live: "https://github.com/TARNALA-SRIBATSA-PATRO/Library-Management-System/blob/main/README.md",
    },
  ];

  const extraPlaceholders = [
    {
      title: "Ahaan Zone",
      description: "Ahaan Zone is a charming and interactive homepage designed to capture the joy of toy shopping. This project showcases modern web development techniques and is perfect for beginners looking to learn and explore HTML, CSS, and some basic JavaScript.",
      image: "aahan_zone_image.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/TARNALA-SRIBATSA-PATRO/Ahaan_Zone",
      live: "https://tarnala-sribatsa-patro.github.io/Ahaan_Zone/",
    },
    {
      title: "Pharmacy Management System",
      description: "A full-featured Pharmacy Management System with role-based access (Admin & Employee), dynamic QR code for medicines, rack tracking, expiry alerts, invoice printing, salary management, and more for seamless pharmacy operations.",
      image: "pharmacy_management_app_image.jpg",
      technologies: ["Java", "AWT", "HTML", "CSS", "MySQL"],
      github: "https://github.com/TARNALA-SRIBATSA-PATRO/pharmacy_manageent_system",
      live: "https://github.com/TARNALA-SRIBATSA-PATRO/pharmacy_manageent_system/blob/main/README.md",
    },
  ];

  const displayedProjects = showMore ? [...projects, ...extraPlaceholders] : projects.slice(0, 6);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-orange-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my featured projects that demonstrate my skills in full-stack development, 
            problem-solving, and creative thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      {project.live.includes("README.md") ? "Readme" : "Live Demo"}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowMore(!showMore)}
            className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            {showMore ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
