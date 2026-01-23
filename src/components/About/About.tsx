import React from 'react';
import './About.scss';

const About: React.FC = () => {
    return (
        <div className="home-main-wrapper p-0 m-0">
            <div className="about-bento-grid w-100">

                <div className="bento-card bio-card" data-aos="fade-right">
                    <div className="card-glow"></div>
                    <div className="badge-modern">
                        <div className="dot-pulse"></div>
                        <span>2024 — 2028 Academic Odyssey</span>
                    </div>
                    <h2 className="about-title">
                        Asilbek <span className="highlight">Karomatov</span>
                    </h2>
                    <p className="bio-lead">Frontend Architect & UI/UX Visionary</p>
                    <div className="bio-story">
                        <p>
                            As a 2nd-year Computer Science student at <span className="fw-bold">Acharya University</span>,
                            I don't just write code—I engineer experiences. My focus lies in bridging the gap between
                            complex backend logic and pixel-perfect user interfaces.
                        </p>
                    </div>
                </div>

                <div className="bento-row">
                    <div className="bento-card info-mini" data-aos="fade-up">
                        <div className="icon-box">
                            <i className="bi bi-mortarboard-fill"></i>
                        </div>
                        <div className="info-text">
                            <h4>Computer Science</h4>
                            <p>Acharya University · Class of 2028</p>
                        </div>
                    </div>

                    <div className="bento-card info-mini goal-card" data-aos="fade-up" data-aos-delay="100">
                        <div className="icon-box">
                            <i className="bi bi-cpu-fill"></i>
                        </div>
                        <div className="info-text">
                            <h4>Core Focus</h4>
                            <p>Scalable Systems & Performance Optimization</p>
                        </div>
                    </div>
                </div>

                <div className="bento-card arsenal-card" data-aos="fade-up">
                    <div className="d-flex justify-content-between align-items-center">
                        <h3>The Stack</h3>
                        <span className="status-learning">
              <div className="dot-pulse"></div>
              Currently Mastering React
            </span>
                    </div>

                    <div className="stack-grid">
                        <div className="skill-item">
                            <i className="bi bi-palette-fill text-danger"></i>
                            <div className="skill-info">
                                <span>SASS/SCSS</span>
                                <small>Expert</small>
                            </div>
                        </div>

                        <div className="skill-item">
                            <i className="bi bi-browser-chrome text-info"></i>
                            <div className="skill-info">
                                <span>React JS</span>
                                <small>Learning</small>
                            </div>
                        </div>

                        <div className="skill-item">
                            <i className="bi bi-lightning-charge-fill text-warning"></i>
                            <div className="skill-info">
                                <span>JavaScript ES6+</span>
                                <small>Intermediate</small>
                            </div>
                        </div>

                        <div className="skill-item">
                            <i className="bi bi-code-slash text-primary"></i>
                            <div className="skill-info">
                                <span>Clean HTML/CSS</span>
                                <small>Professional</small>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;