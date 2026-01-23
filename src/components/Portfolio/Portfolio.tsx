import React from 'react';
import './Portfolio.scss';

import loginImg from '../../assets/images/login.png';
import shadowImg from '../../assets/images/shadow.png';
import gameImg from '../../assets/images/game.png';
import shopImg from '../../assets/images/shop.png';
import imgMain from '../../assets/images/img.png';
import img1 from '../../assets/images/img_1.png';

const projects = [
    {
        title: "Modern Auth UI",
        cat: "UI/UX Security",
        year: "2026",
        obj: "Seamless DOM state management.",
        sol: "Vanilla JS logic & CSS variables.",
        stack: ["HTML5", "CSS3", "JS"],
        img: loginImg,
        github: "https://github.com/Asilbek2706/modern-login-signin-form",
        demo: "https://asilbek2706.github.io/modern-login-signin-form/"
    },
    {
        title: "Shadow Engine",
        cat: "System Arch",
        year: "2026",
        obj: "High-speed system scanning UI.",
        sol: "Golang logic with premium CSS.",
        stack: ["Golang", "System UI"],
        img: shadowImg,
        github: "https://github.com/Asilbek2706/shadow-scanner-go",
        demo: null
    },
    {
        title: "Logic Pro Tic-Tac",
        cat: "Game Engineering",
        year: "2025",
        obj: "Algorithmic win checking.",
        sol: "SASS 7-1 pattern & ES6 loops.",
        stack: ["SCSS", "JS ES6+"],
        img: gameImg,
        github: "https://github.com/Asilbek2706/tic-tac-toe",
        demo: "https://asilbek2706.github.io/tic-tac-toe/"
    },
    {
        title: "Smart Cart System",
        cat: "E-Commerce",
        year: "2025",
        obj: "Real-time product data flow.",
        sol: "DOM-based state management.",
        stack: ["SASS", "JS Arch"],
        img: shopImg,
        github: "https://github.com/Asilbek2706/Online-Shopping-Cart",
        demo: "https://asilbek2706.github.io/Online-Shopping-Cart/"
    },
    {
        title: "SmartShop TS",
        cat: "E-Commerce",
        year: "2026",
        obj: "Type-safe product management & filtering.",
        sol: "OOP-based TypeScript architecture & SCSS modules.",
        stack: ["TypeScript", "SCSS", "OOP"],
        img: imgMain,
        github: "https://github.com/Asilbek2706/E-Commerce-ts-app",
        demo: "https://asilbek2706.github.io/E-Commerce-ts-app/"
    },
    {
        title: "Smartphone Shop JS",
        cat: "Web App",
        year: "2024",
        obj: "Responsive smartphone catalog with cart logic.",
        sol: "Dynamic DOM manipulation & event delegation.",
        stack: ["JavaScript", "CSS3", "HTML5"],
        img: img1,
        github: "https://github.com/Asilbek2706/Smartphones-shop-JS-project",
        demo: "https://asilbek2706.github.io/Smartphones-shop-JS-project/"
    }
];

const Portfolio: React.FC = () => {
    return (
        <div className="portfolio-wrapper">
            <header className="projects-header mb-5" data-aos="fade-up">
                <div className="badge-container">
                    <span className="cyber-badge"><i className="bi bi-shield-lock"></i> Engineering Archive</span>
                </div>
                <h1 className="title mt-3">Technical <span className="highlight">Case Studies</span></h1>
                <p className="header-intro">An in-depth showcase of architectural decisions, focusing on system logic and performance.</p>
            </header>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <article className="project-bento-card" data-aos="fade-up" data-aos-delay={index * 100} key={index}>
                        <div className="project-img-wrapper">
                            <img src={project.img} alt={project.title} className="project-img" />
                            <div className="project-overlay">
                                <div className="overlay-links">
                                    <a href={project.github} target="_blank" rel="noreferrer" title="GitHub Code"><i className="bi bi-github"></i></a>
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noreferrer" title="Live Demo"><i className="bi bi-eye"></i></a>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="project-info">
                            <div className="info-top">
                                <span className="p-cat">{project.cat}</span>
                                <span className="p-year">{project.year}</span>
                            </div>
                            <h3>{project.title}</h3>
                            <div className="p-details-box">
                                <p><strong>Objective:</strong> {project.obj}</p>
                                <p><strong>Solution:</strong> {project.sol}</p>
                            </div>
                            <div className="p-stack">
                                {project.stack.map((tech, i) => <span key={i}>{tech}</span>)}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;