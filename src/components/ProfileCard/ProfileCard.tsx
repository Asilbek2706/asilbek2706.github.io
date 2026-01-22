import React from 'react';
import './ProfileCard.scss';
import profileImg from '../../assets/images/men.jpg';

const ProfileCard: React.FC = () => {
    return (
        <div className="bento-card profile-main p-4 text-center text-lg-start h-100" data-aos="fade-up">
            <div className="img-wrapper mb-4 overflow-hidden rounded-4 shadow-sm">
                <img src={profileImg} alt="Asilbek Karomatov" className="img-fluid profile-img" />
            </div>
            <div className="profile-info">
                <h2 className="fw-bold h4">Asilbek Karomatov</h2>
                <p className="text-muted small">
                    Confident <b>Frontend Architect</b> 🖥️ Specializing in building modern and optimized architectures.
                </p>
            </div>
            <div className="d-grid gap-2 mt-4">
                <a href="/contact" className="btn btn-primary py-2 rounded-3 fw-semibold shadow-blue">Let's Talk</a>
                <a href="mailto:asiloke797@gmail.com" className="btn btn-outline-dark py-2 rounded-3 fw-semibold">Send Email</a>
            </div>
            <div className="social-links d-flex justify-content-between mt-4">
                <a href="https://t.me/as1lbek_2706" target="_blank" rel="noreferrer" className="social-icon"><i className="bi bi-send-fill"></i></a>
                <a href="https://instagram.com/as1lbek_2706" target="_blank" rel="noreferrer" className="social-icon"><i className="bi bi-instagram"></i></a>
                <a href="https://github.com/Asilbek2706" target="_blank" rel="noreferrer" className="social-icon"><i className="bi bi-github"></i></a>
                <a href="https://www.linkedin.com/in/asilbek-karomatov-91336b33b" target="_blank" rel="noreferrer" className="social-icon"><i className="bi bi-linkedin"></i></a>
            </div>
        </div>
    );
};

export default ProfileCard;