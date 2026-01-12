'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Reveal from '../components/Reveal';

export default function HomeOptimized() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", // Tech Network
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop", // Chip
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"  // Cyber
    ];

    useEffect(() => {
        setIsVisible(true);
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="min-h-screen">
            {/* Hero Section - Carousel */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Carousel */}
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <Image
                            src={slide}
                            alt={`Background Slide ${index + 1}`}
                            fill
                            className={`object-cover object-center transition-transform duration-[10000ms] ease-linear ${currentSlide === index ? 'scale-110' : 'scale-100'
                                }`}
                            priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-blue-900/90 mix-blend-multiply"></div>
                    </div>
                ))}

                {/* Content Hero - Innovative & Animated */}
                <div className={`container-custom relative z-10 text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 animate-fade-in drop-shadow-lg">
                        <span className="inline-block hover:animate-pulse-slow transition-all duration-300">Discovery</span>
                        <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-400 animate-shimmer">
                            Innovation Digitale
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-gray-200 animate-slide-up animation-delay-200 drop-shadow-md backdrop-blur-sm bg-black/10 py-2 rounded-lg">
                        Transformez vos idées en réalité digitale avec TigmiTec
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
                        <Link href="/contact" className="btn btn-primary text-lg px-8 py-4 border border-blue-500/30 backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] transition-all duration-300">
                            Démarrer un Projet
                        </Link>
                        <Link href="/about" className="btn btn-outline border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 backdrop-blur-sm hover:animate-float">
                            En Savoir Plus
                        </Link>
                    </div>
                </div>

                {/* Carousel Indicators */}
                <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-8 shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'bg-white/50 hover:bg-white/80'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center backdrop-blur-sm bg-white/10">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* About Section - Innovative Touch */}
            <section className="section section-light py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 transform origin-top-right z-0"></div>
                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Texte */}
                        <Reveal direction="right">
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900">
                                    À propos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 animate-shimmer">TigmiTec</span>
                                </h2>
                                <h3 className="text-xl md:text-2xl text-gray-700 font-semibold relative pl-4 border-l-4 border-blue-500">
                                    Votre partenaire numérique de confiance
                                </h3>
                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    <p>
                                        Nous sommes passionnés par l'innovation technologique et la création de solutions
                                        numériques sur mesure. Notre mission est d'accompagner les entreprises et les
                                        particuliers dans leur transformation digitale grâce à des services complets et adaptés
                                        à leurs besoins.
                                    </p>
                                    <p>
                                        Chez TigmiTec, nous mettons la créativité, la qualité et la satisfaction client au cœur
                                        de notre travail. Notre équipe est dédiée à transformer vos idées en projets concrets et
                                        innovants, en utilisant les dernières technologies pour vous offrir le meilleur.
                                    </p>
                                </div>
                                <Link href="/about" className="btn btn-primary inline-flex shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                                    En savoir plus
                                </Link>
                            </div>
                        </Reveal>

                        {/* Vidéo - Pulse Effect */}
                        <Reveal direction="left" delay={200}>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 border-4 border-white ring-4 ring-blue-50/50 animate-pulse-slow">
                                <video
                                    className="w-full h-auto"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source src="/images/about/about.mp4" type="video/mp4" />
                                </video>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Services Section - Blue/Black/White Theme */}
            <section className="section bg-gray-50 py-24 border-t border-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5 pointer-events-none"></div>
                <div className="container-custom relative z-10">
                    <Reveal>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-900">
                                Nos Services
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Des solutions complètes pour votre transformation digitale
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Développement Web & Mobile",
                                desc: "Création de sites vitrines, e-commerce et applications mobiles performantes pour propulser votre business.",
                                icon: "💻",
                                gradient: "from-blue-600 to-cyan-500",
                                delay: 0
                            },
                            {
                                title: "Infographie & Design",
                                desc: "Conception d'identités visuelles uniques, logos et supports marketing pour une image de marque forte.",
                                icon: "🎨",
                                gradient: "from-blue-500 to-indigo-500",
                                delay: 200
                            },
                            {
                                title: "Marketing Digital & Pub",
                                desc: "Gestion de réseaux sociaux et campagnes publicitaires ciblées pour maximiser votre visibilité et ROI.",
                                icon: "📱",
                                gradient: "from-cyan-600 to-blue-700",
                                delay: 400
                            }
                        ].map((service, index) => (
                            <Reveal key={index} delay={service.delay}>
                                <div
                                    className={`card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-50 bg-white hover:border-blue-200 h-full`}
                                >
                                    <div className={`h-2 bg-gradient-to-r ${service.gradient} group-hover:h-3 transition-all duration-300`}></div>
                                    <div className="p-8">
                                        <div className={`text-6xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 drop-shadow-md`}>
                                            {service.icon}
                                        </div>
                                        <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {service.desc}
                                        </p>
                                        <Link
                                            href="/service"
                                            className="text-primary-600 font-semibold hover:text-primary-800 inline-flex items-center group/link"
                                        >
                                            En savoir plus
                                            <svg className="w-5 h-5 ml-2 transform group-hover/link:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills & Stats Section - White Theme */}
            <section className="section bg-white text-gray-900 border-t border-gray-100 py-24 overflow-hidden">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Compétences */}
                        <Reveal direction="right">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8 border-b-2 border-blue-100 pb-2 inline-block">
                                    Nos Compétences
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        { title: "Développement Web", percent: 80, color: "from-blue-600 to-cyan-500" },
                                        { title: "Marketing Social", percent: 70, color: "from-blue-500 to-indigo-500" },
                                        { title: "Applications Mobiles", percent: 75, color: "from-cyan-600 to-blue-600" },
                                        { title: "Design & Branding", percent: 85, color: "from-indigo-600 to-blue-700" },
                                        { title: "Stratégie SEO", percent: 91, color: "from-blue-400 to-cyan-400" }
                                    ].map((skill, index) => (
                                        <div key={index} className="space-y-2 group">
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-700 font-semibold group-hover:text-blue-600 transition-colors">{skill.title}</span>
                                                <span className="text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-md shadow-sm">{skill.percent}%</span>
                                            </div>
                                            <div className="progress-bar bg-gray-100 shadow-inner h-2">
                                                <div
                                                    className={`progress-fill bg-gradient-to-r ${skill.color} relative overflow-hidden group-hover:animate-shimmer`}
                                                    style={{ width: `${skill.percent}%` }}
                                                >
                                                    <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        {/* Statistiques */}
                        <Reveal direction="left" delay={200}>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8 border-b-2 border-blue-100 pb-2 inline-block">
                                    Nos Réalisations
                                </h2>
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { count: "50+", label: "Projets Réalisés", icon: "🚀" },
                                        { count: "30+", label: "Sites Web", icon: "🌐" },
                                        { count: "15+", label: "Applications Web", icon: "💼" },
                                        { count: "4+", label: "Applications Mobiles", icon: "📱" }
                                    ].map((stat, index) => (
                                        <div
                                            key={index}
                                            className="bg-white p-6 text-center transform hover:scale-105 transition-all duration-300 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-200 group relative overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-blue-100"></div>
                                            <div className="text-5xl mb-3 relative z-10 transform group-hover:animate-float">{stat.icon}</div>
                                            <div className="text-4xl font-bold text-gray-900 mb-2 relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-600">{stat.count}</div>
                                            <div className="text-gray-500 text-sm font-medium uppercase tracking-wide">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* CTA Section - Premium Black Theme */}
            <section className="relative py-12 bg-gray-950 border-t border-gray-900 overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>

                <Reveal>
                    <div className="container-custom relative z-10">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3 tracking-tight">
                                    Prêt à lancer votre <span className="text-blue-500">projet ?</span>
                                </h2>
                                <p className="text-gray-400 text-base md:text-lg max-w-xl">
                                    Discutons de vos ambitions et construisons ensemble votre succès numérique.
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <Link
                                    href="/contact"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-900 transition-all duration-200 bg-white font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transform hover:-translate-y-1"
                                >
                                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"></span>
                                    <span className="relative flex items-center">
                                        Contactez-nous
                                        <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* News Section */}
            <section className="section bg-gray-50 text-gray-900 border-t border-gray-100 overflow-hidden">
                <div className="container-custom">
                    <Reveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                                Actualités Récentes
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Restez informé des dernières tendances technologiques et des nouveautés de TigmiTec.
                            </p>
                        </div>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "L'avenir de l'IA en entreprise",
                                date: "15 Jan 2026",
                                category: "Technologie",
                                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
                                excerpt: "Comment l'intelligence artificielle révolutionne les processus métier et optimise la productivité.",
                                delay: 0
                            },
                            {
                                title: "La cybersécurité en 2026",
                                date: "10 Jan 2026",
                                category: "Sécurité",
                                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
                                excerpt: "Les nouvelles menaces numériques et les stratégies essentielles pour protéger vos données.",
                                delay: 200
                            },
                            {
                                title: "Transformation Digitale Durable",
                                date: "05 Jan 2026",
                                category: "Innovation",
                                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
                                excerpt: "Adopter des solutions numériques écologiques pour un impact positif sur l'environnement et l'économie.",
                                delay: 400
                            }
                        ].map((news, index) => (
                            <Reveal key={index} delay={news.delay}>
                                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={news.image}
                                            alt={news.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                            {news.category}
                                        </div>
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col">
                                        <div className="flex items-center text-gray-500 text-sm mb-3">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {news.date}
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                                            {news.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed flex-grow">
                                            {news.excerpt}
                                        </p>
                                        <Link href="/blog" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors mt-auto">
                                            Lire l'article
                                            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
