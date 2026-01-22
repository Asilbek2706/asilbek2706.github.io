import React from 'react';
import project1 from '../../assets/images/project-1.png';
import project2 from '../../assets/images/astra-dashboard.png';

interface Project {
    title: string;
    description: string;
    image: string;
    githubUrl: string;
    liveUrl?: string; // Ixtiyoriy
    tech: string;
}

const Projects: React.FC = () => {
    const myProjects: Project[] = [
        {
            title: "Go-URL Shortener",
            description: "A high-performance URL shortening service built with Golang and Redis. Optimized for speed.",
            image: project1,
            githubUrl: "https://github.com/Asilbek2706/go-url-shortener",
            tech: "Golang & Redis"
        },
        {
            title: "Astra Systems",
            description: "A futuristic Neural Assets Dashboard with cyberpunk aesthetic and real-time data flow.",
            image: project2,
            githubUrl: "https://github.com/Asilbek2706/ASTRA",
            liveUrl: "https://asilbek2706.github.io/ASTRA/",
            tech: "React & UI/UX"
        }
    ];

    return (
        <div className="bento-card p-4" data-aos="fade-up" data-aos-delay="300">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="fw-bold m-0">Selected Works</h5>
                <a href="https://github.com/Asilbek2706" target="_blank" className="text-primary text-decoration-none small fw-bold">
                    View All <i className="bi bi-arrow-right"></i>
                </a>
            </div>
            <div className="row g-4">
                {myProjects.map((project, index) => (
                    <div className="col-md-6" key={index}>
                        <div className="project-wrapper p-3 border rounded-4 h-100 d-flex flex-column">
                            <div className="project-img-container mb-3 overflow-hidden rounded-3 border bg-dark">
                                <img src={project.image} alt={project.title} className="img-fluid w-100 object-fit-contain" style={{ maxHeight: '180px' }} />
                            </div>
                            <div className="project-info flex-grow-1">
                                <h6 className="fw-bold mb-2">{project.title}</h6>
                                <p className="text-muted small mb-3">{project.description}</p>
                            </div>
                            <div className="project-actions mt-auto d-flex gap-2">
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" className="btn btn-sm btn-primary rounded-3 flex-grow-1">Live Demo</a>
                                )}
                                <a href={project.githubUrl} target="_blank" className="btn btn-sm btn-outline-dark rounded-3 px-3">
                                    <i className="bi bi-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;