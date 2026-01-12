'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
    const [activeArticle, setActiveArticle] = useState(0);

    const articles = [
        {
            id: 0,
            title: "L'avenir de l'Intelligence Artificielle en entreprise",
            date: "15 Jan 2026",
            category: "Technologie",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
            author: "Karim B.",
            role: "Expert IA",
            content: `
                <p class="mb-4">L'intelligence artificielle (IA) n'est plus de la science-fiction. En 2026, elle est devenue un moteur essentiel de croissance pour les entreprises de toutes tailles.</p>
                <h3 class="text-xl font-bold mt-6 mb-3">Une productivité décuplée</h3>
                <p class="mb-4">L'intégration d'outils basés sur l'IA permet d'automatiser les tâches répétitives, libérant ainsi du temps pour que les équipes se concentrent sur des missions à haute valeur ajoutée. De la gestion de la relation client aux analyses prédictives, l'IA transforme la façon dont nous travaillons.</p>
                <h3 class="text-xl font-bold mt-6 mb-3">Personnalisation à grande échelle</h3>
                <p class="mb-4">Grâce au machine learning, les entreprises peuvent désormais offrir des expériences ultra-personnalisées à leurs clients. Netflix et Amazon ont ouvert la voie, mais aujourd'hui, même les PME peuvent utiliser ces technologies pour recommander les bons produits au bon moment.</p>
                <div class="bg-blue-50 border-l-4 border-blue-600 p-4 my-6 italic">
                    "L'entreprise de demain ne se demandera pas 'si' elle doit utiliser l'IA, mais 'comment' elle peut l'utiliser pour servir au mieux l'humain."
                </div>
                <p>Chez TigmiTec, nous aidons nos partenaires à intégrer ces solutions de manière éthique et efficace.</p>
            `
        },
        {
            id: 1,
            title: "La Cybersécurité : Enjeux majeurs pour 2026",
            date: "10 Jan 2026",
            category: "Sécurité",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
            author: "Sarah L.",
            role: "Analyste Sécurité",
            content: `
                <p class="mb-4">Avec la numérisation croissante des services, la surface d'attaque pour les cybercriminels s'est considérablement élargie. La sécurité des données n'est plus une option, c'est une nécessité vitale.</p>
                <h3 class="text-xl font-bold mt-6 mb-3">Le Zero Trust : Nouvelle norme</h3>
                <p class="mb-4">Le concept de "Zero Trust" (ne jamais faire confiance, toujours vérifier) s'impose comme le standard. Que l'accès vienne de l'intérieur ou de l'extérieur du réseau, chaque requête doit être authentifiée.</p>
                <ul class="list-disc pl-6 space-y-2 mb-6">
                    <li>Authentification multifacteur (MFA) généralisée.</li>
                    <li>Chiffrement de bout en bout des données sensibles.</li>
                    <li>Formation continue des employés contre le phishing.</li>
                </ul>
                <p>Protéger votre entreprise, c'est protéger la confiance de vos clients.</p>
            `
        },
        {
            id: 2,
            title: "Transformation Digitale & Éco-responsabilité",
            date: "05 Jan 2026",
            category: "Innovation",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
            author: "Mokhtar A.",
            authorImg: "/images/team/member1.jpg",
            role: "Directeur Technique",
            content: `
                <p class="mb-4">Le numérique pollue, c'est un fait. Mais il peut aussi être la solution. Le "Green IT" vise à réduire l'empreinte écologique des technologies tout en maximisant leur efficacité.</p>
                <h3 class="text-xl font-bold mt-6 mb-3">Optimisation du code et des serveurs</h3>
                <p class="mb-4">Un site web mal codé consomme plus d'énergie. En optimisant les algorithmes et en choisissant des hébergeurs verts, nous pouvons réduire drastiquement les émissions de CO2.</p>
                <p class="mb-4">Chez TigmiTec, nous nous engageons à développer des solutions durables qui respectent l'environnement sans sacrifier la performance.</p>
            `
        }
    ];

    const currentArticle = articles.find(a => a.id === activeArticle);

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Header */}
            <section className="relative py-20 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-secondary-900 opacity-90"></div>
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
                <div className="container-custom relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
                        Blog & <span className="gradient-text">Actualités</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Les dernières tendances digitales décryptées par nos experts
                    </p>
                </div>
            </section>

            {/* Blog Content */}
            <section className="py-16 md:py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Sidebar List (Left on Large screens) */}
                        <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
                            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 sticky top-24">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">Articles Récents</h3>
                                <div className="space-y-6">
                                    {articles.map((article) => (
                                        <div
                                            key={article.id}
                                            onClick={() => {
                                                setActiveArticle(article.id);
                                                window.scrollTo({ top: 400, behavior: 'smooth' });
                                            }}
                                            className={`group cursor-pointer flex gap-4 p-3 rounded-lg transition-all duration-300 ${activeArticle === article.id ? 'bg-blue-50 border-l-4 border-blue-600' : 'hover:bg-gray-50'}`}
                                        >
                                            <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                                                <Image
                                                    src={article.image}
                                                    alt={article.title}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center text-xs text-gray-500 mb-1">
                                                    <span className="text-blue-600 font-semibold">{article.category}</span>
                                                    <span className="mx-1">•</span>
                                                    <span>{article.date}</span>
                                                </div>
                                                <h4 className={`text-sm font-bold line-clamp-2 ${activeArticle === article.id ? 'text-blue-700' : 'text-gray-900 group-hover:text-blue-600'}`}>
                                                    {article.title}
                                                </h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <h4 className="font-bold text-gray-900 mb-4">Catégories Populaires</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Technologie', 'Innovation', 'Design', 'Marketing', 'Sécurité'].map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-blue-100 hover:text-blue-600 cursor-pointer transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Article Content (Right on Large screens) */}
                        <div className="lg:col-span-8 order-1 lg:order-2">
                            <article className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fadeIn">
                                {/* Article Image */}
                                <div className="relative h-64 md:h-[400px] w-full">
                                    <Image
                                        src={currentArticle.image}
                                        alt={currentArticle.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute top-4 left-4 bg-blue-600 text-white font-bold px-4 py-1 rounded-full shadow-lg">
                                        {currentArticle.category}
                                    </div>
                                </div>

                                {/* Article Body */}
                                <div className="p-8 md:p-12">
                                    <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-gray-100">
                                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold overflow-hidden">
                                            {/* Fallback avatar if no image */}
                                            {currentArticle.author.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900 line-clamp-1">Par {currentArticle.author}</div>
                                            <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{currentArticle.role} • {currentArticle.date}</div>
                                        </div>
                                        <div className="ml-auto flex space-x-2">
                                            <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg></button>
                                            <button className="p-2 text-gray-400 hover:text-blue-700 transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></button>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                                        {currentArticle.title}
                                    </h2>

                                    {/* Content Injection */}
                                    <div
                                        className="prose prose-lg prose-blue max-w-none text-gray-600"
                                        dangerouslySetInnerHTML={{ __html: currentArticle.content }}
                                    ></div>
                                </div>
                            </article>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-600 py-16 text-white text-center">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold mb-4">Vous avez un projet innovant ?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">TigmiTec transforme vos idées en solutions digitales performantes.</p>
                    <Link href="/contact" className="btn bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-bold shadow-lg transition-transform hover:scale-105">
                        Nous Contacter
                    </Link>
                </div>
            </section>
        </main>
    );
}
