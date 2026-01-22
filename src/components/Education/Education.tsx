import React from 'react';

const Education: React.FC = () => {
    return (
        <div className="bento-card p-4 h-100" data-aos="fade-up" data-aos-delay="100">
            <h5 className="fw-bold mb-4 d-flex align-items-center gap-2">
                <i className="bi bi-mortarboard text-primary"></i> Education
            </h5>
            <div className="exp-timeline">
                <div className="exp-item d-flex gap-3 mb-4">
                    <span className="badge bg-light text-dark align-self-start py-2">2024 — 2028</span>
                    <div>
                        <h6 className="mb-0 fw-bold">Acharya University Uzbekistan</h6>
                        <p className="small text-primary mb-1 fw-semibold">B.S. in Computer Science & Engineering</p>
                        <p className="small text-muted mb-0">Currently a 2nd-year student (2026) focusing on advanced algorithms and system design.</p>
                    </div>
                </div>
                <div className="exp-item d-flex gap-3">
                    <span className="badge bg-light text-dark align-self-start py-2">Continuous</span>
                    <div>
                        <h6 className="mb-0 fw-bold">Full-Stack Specialization</h6>
                        <p className="small text-muted mb-0">Intensive self-study on Golang, Redis, and React Micro-frontend architectures.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;