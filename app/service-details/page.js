'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ServiceDetailsPage() {
    const [activeTab, setActiveTab] = useState('web');

    const services = [
        {
            id: 'web',
            title: "Développement Web",
            heading: "Développement Web",
            description: "Le développement web est la clé de voûte de votre présence en ligne. Nous concevons des sites internet performants, sécurisés et évolutifs qui répondent parfaitement aux besoins de votre entreprise. Que ce soit pour un site vitrine, un e-commerce ou une application complexe, nous utilisons les dernières technologies pour garantir une expérience utilisateur fluide et une visibilité optimale sur tous les supports.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
        },
        {
            id: 'mobile',
            title: "Applications Mobiles",
            heading: "Applications Mobiles iOS & Android",
            description: "Transformez vos idées en applications mobiles puissantes et intuitives. Nous développons des applications natives pour iOS et Android ainsi que des solutions hybrides performantes. Notre approche centrée sur l'utilisateur garantit une adoption maximale et une expérience fluide sur tous les appareils. De la conception UX/UI au déploiement sur les stores, nous vous accompagnons à chaque étape pour créer l'application mobile qui propulsera votre entreprise vers de nouveaux sommets.",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
        },
        {
            id: 'design',
            title: "Design & Infographie",
            heading: "Design & Infographie Créative",
            description: "Le design est l'âme de votre marque et le premier point de contact avec vos clients. Nos designers talentueux créent des identités visuelles percutantes qui captivent l'attention et renforcent votre crédibilité. Nous concevons des interfaces UI/UX intuitives qui facilitent la navigation et augmentent les conversions. Que ce soit pour un logo, une charte graphique complète ou des supports marketing, nous donnons vie à votre vision avec créativité et élégance.",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
        },
        {
            id: 'marketing',
            title: "Marketing Digital",
            heading: "Stratégie Marketing Digital",
            description: "Atteignez votre audience cible avec précision grâce à nos stratégies de marketing digital éprouvées. Nous élaborons des campagnes publicitaires sur mesure sur les réseaux sociaux (Facebook, Instagram, LinkedIn) et Google Ads pour maximiser votre retour sur investissement. Nous analysons les données en temps réel pour optimiser vos campagnes et garantir des résultats tangibles. Boostez votre notoriété, générez des leads qualifiés et augmentez vos ventes avec notre expertise marketing.",
            image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
        },
        {
            id: 'seo',
            title: "SEO & Référencement",
            heading: "SEO & Référencement Naturel",
            description: "Soyez visible là où ça compte vraiment : en première page des résultats de recherche. Nos experts SEO auditent votre site et mettent en œuvre des stratégies d'optimisation technique et sémantique pour améliorer votre positionnement organique. Nous travaillons sur les mots-clés pertinents pour votre activité afin d'attirer un trafic qualifié et durable. Ne laissez pas vos concurrents prendre votre place, dominez les recherches avec notre accompagnement SEO complet.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
        }
    ];

    const currentService = services.find(s => s.id === activeTab);

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Header / Page Title - Modernized */}
            <section className="relative py-20 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-secondary-900 opacity-90"></div>
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
                <div className="container-custom relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
                        Développement <span className="gradient-text">Web & Mobile</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Des solutions sur mesure pour votre croissance digitale
                    </p>
                </div>
            </section>

            {/* Service Details Section */}
            <section className="py-16 md:py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-8">
                            {/* Navigation */}
                            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                                <ul className="space-y-2">
                                    {services.map((service) => (
                                        <li key={service.id}>
                                            <button
                                                onClick={() => setActiveTab(service.id)}
                                                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-between group ${activeTab === service.id
                                                        ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                                                        : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                                                    }`}
                                            >
                                                {service.title}
                                                <svg
                                                    className={`w-4 h-4 transform transition-transform duration-300 ${activeTab === service.id ? 'translate-x-1 opacity-100' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1'
                                                        }`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contact Box */}
                            <div className="bg-gray-900 rounded-xl shadow-lg p-8 text-center text-white relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                                <div className="relative z-10">
                                    <h5 className="text-xl font-bold mb-2">Une question ?</h5>
                                    <p className="text-gray-300 mb-6 text-sm">Nos experts sont là pour vous aider.</p>
                                    <a href="tel:+212600000000" className="block text-2xl font-bold text-blue-400 mb-6 hover:text-blue-300 transition-colors">
                                        +212 6 00 00 00 00
                                    </a>
                                    <Link href="/contact" className="inline-block w-full py-3 px-6 bg-white text-gray-900 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                                        Contactez-nous
                                    </Link>
                                </div>
                            </div>

                            {/* Download Box */}
                            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 text-center">
                                <Link href="#" className="flex items-center justify-center gap-2 text-gray-700 font-bold hover:text-blue-600 transition-colors">
                                    <span>Télécharger la Brochure</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fadeIn">
                                {/* Image */}
                                <div className="relative h-64 md:h-96 w-full">
                                    <img
                                        src={currentService.image}
                                        alt={currentService.heading}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
                                        <h2 className="text-3xl md:text-4xl font-bold mb-2 shadow-sm">{currentService.heading}</h2>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="p-8 md:p-12">
                                    <div className="prose prose-lg max-w-none text-gray-600">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{currentService.title}</h3>
                                        <p className="leading-relaxed whitespace-pre-line">
                                            {currentService.description}
                                        </p>
                                    </div>

                                    {/* Additional generic content block to match original layout feel */}
                                    <div className="mt-12 bg-blue-50 rounded-xl p-8 border-l-4 border-blue-500">
                                        <h4 className="text-xl font-bold text-gray-900 mb-4">Pourquoi nous choisir pour votre {currentService.title.toLowerCase()} ?</h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                "Expertise technique avancée",
                                                "Respect des délais",
                                                "Accompagnement personnalisé",
                                                "Solutions évolutives"
                                            ].map((item, idx) => (
                                                <li key={idx} className="flex items-center text-gray-700">
                                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white text-center">
                <div className="container-custom">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Nous sommes les meilleurs en innovation digitale.</h2>
                    <Link href="/contact" className="inline-block py-4 px-10 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl">
                        CONTACTEZ-NOUS
                    </Link>
                </div>
            </section>
        </main>
    );
}
