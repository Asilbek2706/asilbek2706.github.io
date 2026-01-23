import React from 'react';
import './Preloader.scss';

const Preloader: React.FC = () => {
    return (
        <div className="preloader-wrapper">
            <div className="loader-content">
                <div className="spinner-box">
                    <div className="circle-core"></div>
                </div>
                <div className="loader-text">
                    <h1 className="brand-name">Asilbek<span>.dev</span></h1>
                    <div className="loading-line"></div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;