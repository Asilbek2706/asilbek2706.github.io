import React, { useState } from 'react';
import './Navbar.scss';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar-custom">
            <div className="nav-container">
                <a href="/" className="nav-logo">
                    Asilbek<span>.dev</span>
                </a>

                {/* Menu ochilganda 'active' klassi qo'shiladi */}
                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="/" className="nav-link active"><i className="bi bi-house-door"></i> Home</a></li>
                    <li><a href="/about" className="nav-link"><i className="bi bi-person"></i> About</a></li>
                    <li><a href="/portfolio" className="nav-link"><i className="bi bi-grid"></i> Portfolio</a></li>
                    <li><a href="/contact" className="nav-link"><i className="bi bi-envelope"></i> Contact</a></li>
                </ul>

                <div className="nav-actions">
                    <a href="/contact" className="btn-talk">Let's talk</a>
                    <button
                        className="mobile-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;