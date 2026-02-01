import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProfileCard.scss';

// Profil uchun interfeys
interface ProfileData {
    full_name: string;
    image: string;
    bio: string;
    email: string;
    telegram: string;
    instagram: string;
    github: string;
    linkedin: string;
}

const ProfileCard: React.FC = () => {
    const [profile, setProfile] = useState<ProfileData | null>(null);
    const [imgLoaded, setImgLoaded] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const baseUrl = import.meta.env.VITE_API_URL;
                const response = await axios.get(`${baseUrl}/profile/`);
                setProfile(Array.isArray(response.data) ? response.data[0] : response.data);
            } catch (error) {
                console.error("Profil yuklashda xato:", error);
            }
        };
        fetchProfile();
    }, []);

    // Skeleton Screen (Ma'lumot kelguncha ko'rinadi)
    if (!profile) {
        return (
            <div className="profile-main skeleton-wrapper p-4">
                <div className="skeleton skeleton-img mb-4"></div>
                <div className="skeleton skeleton-title mb-2"></div>
                <div className="skeleton skeleton-text mb-4"></div>
                <div className="skeleton skeleton-btn"></div>
            </div>
        );
    }

    return (
        <div className="bento-card profile-main p-4 text-center text-lg-start h-100" data-aos="fade-up">
            <div className={`img-wrapper mb-4 overflow-hidden rounded-4 shadow-sm ${!imgLoaded ? 'img-skeleton' : ''}`}>
                <img
                    src={profile.image}
                    alt={profile.full_name}
                    className={`img-fluid profile-img ${imgLoaded ? 'loaded' : 'loading'}`}
                    onLoad={() => setImgLoaded(true)}
                    loading="lazy"
                />
            </div>

            <div className="profile-info">
                <h2 className="fw-bold h4">{profile.full_name}</h2>
                <p
                    className="text-muted small"
                    dangerouslySetInnerHTML={{ __html: profile.bio }}
                />
            </div>

            <div className="d-grid gap-2 mt-4">
                <a href="/contact" className="btn btn-primary py-2 rounded-3 fw-semibold shadow-blue">
                    Let's Talk
                </a>
                <a href={`mailto:${profile.email}`} className="btn btn-outline-dark py-2 rounded-3 fw-semibold">
                    Send Email
                </a>
            </div>

            <div className="social-links d-flex justify-content-between mt-4">
                {profile.telegram && (
                    <a href={profile.telegram} target="_blank" rel="noreferrer" className="social-icon">
                        <i className="bi bi-send-fill"></i>
                    </a>
                )}
                {profile.instagram && (
                    <a href={profile.instagram} target="_blank" rel="noreferrer" className="social-icon">
                        <i className="bi bi-instagram"></i>
                    </a>
                )}
                {profile.github && (
                    <a href={profile.github} target="_blank" rel="noreferrer" className="social-icon">
                        <i className="bi bi-github"></i>
                    </a>
                )}
                {profile.linkedin && (
                    <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-icon">
                        <i className="bi bi-linkedin"></i>
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProfileCard;