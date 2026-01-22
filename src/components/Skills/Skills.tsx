import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const Skills: React.FC = () => {
    const skills = ["React.js", "TypeScript", "JavaScript", "Python", "SASS / SCSS", "SQLite3", "Golang", "Redis"];

    return (
        <div className="bento-card p-4 h-100" data-aos="fade-up" data-aos-delay="200">
            <h5 className="fw-bold mb-4">Technical Arsenal</h5>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView="auto"
                autoplay={{ delay: 2500 }}
                className="skillsSwiper"
            >
                {skills.map((skill, index) => (
                    <SwiperSlide key={index} style={{ width: 'auto' }}>
                        <span className="skill-pill">{skill}</span>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Skills;