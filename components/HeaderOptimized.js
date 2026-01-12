'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const HeaderOptimized = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);

    // Détection du scroll pour header sticky
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    };

    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled || isMobileMenuOpen
                ? 'bg-white shadow-md border-gray-100 py-2'
                : 'bg-white/60 backdrop-blur-md border-transparent py-4'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <Image
                            src="/images/logo/logo.png"
                            alt="TigmiTec"
                            width={200}
                            height={48}
                            className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        <Link
                            href="/"
                            className="px-4 py-2 text-gray-700 font-medium rounded-full hover:bg-white hover:text-blue-600 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                        >
                            Accueil
                        </Link>

                        {/* L'Agence Dropdown */}
                        <div className="relative group">
                            <button className="px-4 py-2 text-gray-700 font-medium rounded-full hover:bg-white hover:text-blue-600 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 flex items-center space-x-1 group-hover:text-blue-600">
                                <span>L'Agence</span>
                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="absolute top-full left-0 mt-2 w-64 bg-white/90 backdrop-blur-2xl rounded-2xl shadow-xl border border-white/40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 -translate-y-2 overflow-hidden ring-1 ring-black/5">
                                <div className="p-2 space-y-1">
                                    <Link href="/about" className="block px-4 py-3 text-sm font-semibold text-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent hover:text-blue-600 transition-all">
                                        À propos
                                    </Link>
                                    <Link href="/team" className="block px-4 py-3 text-sm font-semibold text-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent hover:text-blue-600 transition-all">
                                        L'équipe
                                    </Link>
                                    <Link href="/faq" className="block px-4 py-3 text-sm font-semibold text-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent hover:text-blue-600 transition-all">
                                        FAQ
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <button className="px-4 py-2 text-gray-700 font-medium rounded-full hover:bg-white hover:text-blue-600 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 flex items-center space-x-1 group-hover:text-blue-600">
                                <span>Services</span>
                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="absolute top-full left-0 mt-2 w-64 bg-white/90 backdrop-blur-2xl rounded-2xl shadow-xl border border-white/40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 -translate-y-2 overflow-hidden ring-1 ring-black/5">
                                <div className="p-2 space-y-1">
                                    <Link href="/service" className="block px-4 py-3 text-sm font-semibold text-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent hover:text-blue-600 transition-all">
                                        Nos Services
                                    </Link>
                                    <Link href="/service-details" className="block px-4 py-3 text-sm font-semibold text-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent hover:text-blue-600 transition-all">
                                        Détails Service
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="px-4 py-2 text-gray-700 font-medium rounded-full hover:bg-white hover:text-blue-600 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* CTA Button Desktop */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Link href="/contact" className="btn bg-gray-900 text-white hover:bg-blue-600 shadow-lg hover:shadow-blue-500/30 border border-transparent hover:border-blue-400">
                            Démarrer un Projet
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="lg:hidden p-2 text-gray-900 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:bg-white hover:text-primary-600 focus:outline-none transition-all"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
                        }`}
                >
                    <nav className="flex flex-col space-y-2 pb-4">
                        <Link
                            href="/"
                            onClick={closeMobileMenu}
                            className="px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                        >
                            Accueil
                        </Link>

                        {/* L'Agence Mobile Dropdown */}
                        <div>
                            <button
                                onClick={() => toggleDropdown(1)}
                                className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                            >
                                <span>L'Agence</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${activeDropdown === 1 ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${activeDropdown === 1 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <Link
                                    href="/about"
                                    onClick={closeMobileMenu}
                                    className="block pl-8 pr-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                                >
                                    À propos
                                </Link>
                                <Link
                                    href="/team"
                                    onClick={closeMobileMenu}
                                    className="block pl-8 pr-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                                >
                                    L'équipe
                                </Link>
                                <Link
                                    href="/faq"
                                    onClick={closeMobileMenu}
                                    className="block pl-8 pr-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                                >
                                    FAQ
                                </Link>
                            </div>
                        </div>

                        {/* Services Mobile Dropdown */}
                        <div>
                            <button
                                onClick={() => toggleDropdown(2)}
                                className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                            >
                                <span>Services</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${activeDropdown === 2 ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${activeDropdown === 2 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <Link
                                    href="/service"
                                    onClick={closeMobileMenu}
                                    className="block pl-8 pr-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                                >
                                    Nos Services
                                </Link>
                                <Link
                                    href="/service-details"
                                    onClick={closeMobileMenu}
                                    className="block pl-8 pr-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                                >
                                    Détails Service
                                </Link>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            onClick={closeMobileMenu}
                            className="px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                        >
                            Contact
                        </Link>

                        {/* CTA Mobile */}
                        <Link
                            href="/contact"
                            onClick={closeMobileMenu}
                            className="btn btn-primary mx-4 text-center"
                        >
                            Démarrer un Projet
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default HeaderOptimized;
