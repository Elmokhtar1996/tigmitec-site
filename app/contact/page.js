'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
    const [status, setStatus] = useState(null); // null, 'loading', 'success', 'error'

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        // ⚠️ IMPORTANT : REMPLACEZ 'VOTRE_ID_FORMSPREE' CI-DESSOUS PAR VOTRE VRAI ID FORMSPREE
        // Exemple : 'https://formspree.io/f/xeqwzgpb'
        // Vous pouvez obtenir ce lien gratuitement sur https://formspree.io
        const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgooezkp';

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
                e.target.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Erreur:', error);
            setStatus('error');
        }
    }

    return (
        <main className="min-h-screen">
            {/* Header / Page Title */}
            <section className="relative py-20 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-secondary-900 opacity-90"></div>
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
                <div className="container-custom relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
                        Contactez-<span className="gradient-text">Nous</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Discutons de votre prochain grand projet digital
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section section-light">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Info */}
                        <div className="lg:col-span-1">
                            <div className="card p-8 h-full bg-white">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Nos Coordonnées</h3>

                                <div className="space-y-8">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900">Localisation</h5>
                                            <p className="text-gray-600">Objat 19130, France</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900">Téléphone</h5>
                                            <p className="text-gray-600">
                                                <a href="tel:+33600000000" className="hover:text-primary-600 transition-colors">+33 6 00 00 00 00</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900">Email</h5>
                                            <p className="text-gray-600">
                                                <a href="mailto:contact@tigmitec.com" className="hover:text-primary-600 transition-colors">contact@tigmitec.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="card p-8 bg-white">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Envoyez-nous un Message</h2>
                                    <p className="text-gray-600">
                                        Besoin d'un renseignement ou d'un devis ? Remplissez le formulaire ci-dessous, notre équipe vous répondra sous 24h.
                                    </p>
                                </div>

                                {status === 'success' ? (
                                    <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-8 text-center animate-fadeIn">
                                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">Message Envoyé !</h3>
                                        <p>Merci de nous avoir contactés. Nous reviendrons vers vous très rapidement.</p>
                                        <button onClick={() => setStatus(null)} className="mt-6 text-green-700 font-semibold hover:text-green-900 underline">
                                            Envoyer un autre message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                                                    placeholder="Votre nom"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                                                    placeholder="votre@email.com"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                                            <input
                                                type="text"
                                                name="subject"
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                                                placeholder="Sujet de votre message"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                            <textarea
                                                name="message"
                                                required
                                                rows="6"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                                                placeholder="Comment pouvons-nous vous aider ?"
                                            ></textarea>
                                        </div>

                                        {status === 'error' && (
                                            <div className="p-4 bg-red-50 text-red-700 rounded-lg">
                                                Une erreur est survenue lors de l'envoi. Veuillez vérifier votre connexion ou réessayer plus tard.
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className={`btn btn-primary w-full md:w-auto flex items-center justify-center gap-2 ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        >
                                            {status === 'loading' ? (
                                                <>
                                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Envoi en cours...
                                                </>
                                            ) : (
                                                'Envoyer le Message'
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[400px] w-full bg-gray-200">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44868.58849767223!2d1.3789299!3d45.2635391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f87bfd0f3a613d%3A0x405d39260e83d80!2s19130%20Objat%2C%20France!5e0!3m2!1sfr!2sfr!4v1703264000000!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
            </section>
        </main>
    );
}
