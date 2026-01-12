'use client';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    };

    const toggleDropdown = (index) => {
        if (activeDropdown === index) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(index);
        }
    };

    return (
        <header className="main-header">
            {/* header lower/fixed-header */}
            <div className="theme_menu stricky">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 col-xs-12">
                            <div className="logo-box">
                                <Link href="/"><img src="/images/logo/logo.png?v=2" alt="TigmiTec" width="188" height="45" /></Link>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-12 col-xs-12">
                            <div className="menu-bar">
                                <nav className="main-menu">
                                    <div className="navbar-header">
                                        <button
                                            type="button"
                                            className="navbar-toggle"
                                            onClick={toggleMobileMenu}
                                            style={{ background: isMobileMenuOpen ? '#ddd' : 'transparent' }}
                                        >
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div className={`navbar-collapse collapse clearfix ${isMobileMenuOpen ? 'in' : ''}`}
                                        style={{ display: isMobileMenuOpen ? 'block' : 'none' }}>
                                        <ul className="navigation clearfix">
                                            <li className="current"><Link href="/">Accueil</Link></li>
                                            <li className="dropdown"><a href="#">L'Agence</a>
                                                <ul className="submenu">
                                                    <li><Link href="/about">À propos</Link></li>
                                                    <li><Link href="/team">L'équipe</Link></li>
                                                    <li><Link href="/faq">FAQ</Link></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a href="#">Services</a>
                                                <ul className="submenu">
                                                    <li><Link href="/service">Nos Services</Link></li>
                                                    <li><Link href="/service-details">Détails Service</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="/contact">Contact</Link></li>
                                        </ul>

                                        {/* mobile menu */}
                                        <ul className="mobile-menu clearfix">
                                            <li><Link href="/" onClick={closeMobileMenu}>Accueil</Link></li>
                                            <li className={`dropdown ${activeDropdown === 1 ? 'open' : ''}`}>
                                                <div className="dropdown-toggle" onClick={() => toggleDropdown(1)}
                                                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '20px', cursor: 'pointer', color: '#333', fontWeight: '500', padding: '12px 20px' }}>
                                                    L'Agence <i className="fa fa-angle-down"></i>
                                                </div>
                                                <ul style={{ display: activeDropdown === 1 ? 'block' : 'none' }}>
                                                    <li><Link href="/about" onClick={closeMobileMenu}>À propos</Link></li>
                                                    <li><Link href="/team" onClick={closeMobileMenu}>L'équipe</Link></li>
                                                    <li><Link href="/faq" onClick={closeMobileMenu}>FAQ</Link></li>
                                                </ul>
                                            </li>
                                            <li className={`dropdown ${activeDropdown === 2 ? 'open' : ''}`}>
                                                <div className="dropdown-toggle" onClick={() => toggleDropdown(2)}
                                                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '20px', cursor: 'pointer', color: '#333', fontWeight: '500', padding: '12px 20px' }}>
                                                    Services <i className="fa fa-angle-down"></i>
                                                </div>
                                                <ul style={{ display: activeDropdown === 2 ? 'block' : 'none' }}>
                                                    <li><Link href="/service" onClick={closeMobileMenu}>Nos Services</Link></li>
                                                    <li><Link href="/service-details" onClick={closeMobileMenu}>Détails Service</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="/contact" onClick={closeMobileMenu}>Contact</Link></li>
                                        </ul>
                                    </div>
                                </nav>
                                <div className="search-box-area">
                                    <div className="search-toggle"><i className="fa fa-search"></i></div>
                                    <div className="search-box">
                                        <form method="post" action="#">
                                            <div className="form-group">
                                                <input type="search" name="search" placeholder="Rechercher..." required />
                                                <button type="submit"><i className="fa fa-search"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end header lower/fixed-header */}
        </header>
    );
};

export default Header;
