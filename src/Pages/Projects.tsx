import { useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const ProjectCategories = () => {
  type ProjectCategory = "product" | "uiux" | "all";
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const projects = {
    product: [
      {
        id: 3,
        title: "Nintendo Breathe Ultrasonic Nebulizer",
        image: "./nebulizer.png",
        description: "Full-scale product management system.",
        date: "2024-03",
        link: "/Nebulizer",
      },
      {
        id: 1,
        title: "KOA Vital Monitor",
        image: "./koa.png",
        description: "A Monitor that will do necessary blood tests for your needs, including albumin, glucose, cholesterol and blood pressure using a method that does not involve pricking.",
        date: "2024-01",
        link: "/Koa",
      },
      {
        id: 2,
        title: "Ease-Aid",
        image: "./ease-aid.png",
        description: "Packaging to store and transport bandages to provide improved hygiene and easier application.",
        date: "2024-02",
        link: "/Easeaid",
      },
      
      {
        id: 4,
        title: "Smart Security Lock",
        image: "./securitylock.png",
        description: "Productivity tool with intuitive workflow.",
        date: "2024-04",
        link: "/Lock",
      },
    ],
    uiux: [
      {
        id: 5,
        title: "App for Vital Monitor",
        image: "./appforvitalmonitor.png",
        description:
          "Connects the patient to the doctor and makes regular consultations with the doctor more convenient, while also giving small advice regarding healthcare.",
        date: "2024-04",
        link: "/AppforVitalMonitor", 
      },
    ],
  };

  const filteredProjects =
    activeCategory === "all"
      ? [...projects.product, ...projects.uiux]
      : projects[activeCategory];

  return (
    <div className="project-container">
      <div>
        <h2 className="design-heading">Design Projects</h2>
      </div>
      <br />
      {/* Category Controls */}
      <div className="category-controls">
        {["all", "product", "uiux"].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category as ProjectCategory)}
            className={`category-button ${
              activeCategory === category ? "active" : ""
            }`}
          >
            {category === "all" ? "All Projects" : category.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="project-cards">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() =>
              setSelectedProject(selectedProject === project.id ? null : project.id)
            }
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-card-content">
              <h3 className="project-title">{project.title}</h3>
              {selectedProject === project.id && (
                <div className="project-description">
                  <p>{project.description}</p>
                  <p className="project-date">{project.date}</p>
                  {project.link.startsWith("/") ? (
                    <Link to={project.link} className="project-link">
                      View Project
                    </Link>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View Project
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCategories;
