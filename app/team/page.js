import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: "TigmiTec | Nos Expertises & Métiers",
    description: "Découvrez les experts passionnés qui propulsent TigmiTec : Développement, Design, Marketing et Innovation.",
};

export default function TeamPage() {
    const expertises = [
        {
            role: "Ingénierie Fullstack",
            description: "Architectes de solutions robustes, nos développeurs maîtrisent l'art du code propre et performant, du backend complexe au frontend réactif.",
            icon: "💻",
            gradient: "from-blue-600 to-cyan-500"
        },
        {
            role: "Design UX/UI",
            description: "Nos designers ne font pas que du beau. Ils conçoivent des expériences utilisateurs fluides, intuitives et centrées sur l'humain.",
            icon: "🎨",
            gradient: "from-purple-600 to-pink-500"
        },
        {
            role: "Stratégie Digitale",
            description: "Au-delà de la technique, nos stratèges analysent votre marché pour positionner votre produit là où il aura le plus d'impact.",
            icon: "🚀",
            gradient: "from-orange-500 to-red-500"
        },
        {
            role: "Intelligence Artificielle",
            description: "Pionniers de l'innovation, nos experts IA intègrent des modèles prédictifs et des automatisations intelligentes à vos processus.",
            icon: "🧠",
            gradient: "from-indigo-600 to-blue-500"
        },
        {
            role: "Gestion de Projet Agile",
            description: "Les chefs d'orchestre de vos succès. Ils assurent que chaque sprint délivre de la valeur, dans les temps et le budget impartis.",
            icon: "⚡",
            gradient: "from-green-500 to-emerald-400"
        },
        {
            role: "Cybersécurité & DevOps",
            description: "Gardiens de votre infrastructure, ils déploient des environnements sécurisés et scalables pour une tranquillité d'esprit totale.",
            icon: "🛡️",
            gradient: "from-gray-700 to-gray-900"
        }
    ];

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Header / Page Title - Modernized */}
            <section className="relative py-20 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-secondary-900 opacity-90"></div>
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
                <div className="container-custom relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
                        Nos <span className="gradient-text">Talents</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Une équipe pluridisciplinaire unie par la passion de l'excellence
                    </p>
                </div>
            </section>

            {/* Expertise Grid - No Photos, Just Style */}
            <section className="section">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {expertises.map((item, index) => (
                            <div key={index} className="group relative h-full">
                                {/* Background Glow Effect on Hover */}
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500`}></div>

                                <div className="relative bg-white h-full p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center transition-transform duration-300 group-hover:-translate-y-1">
                                    {/* Icon Circle */}
                                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-4xl mb-6 shadow-md transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`}>
                                        {item.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-blue-600 transition-all">
                                        {item.role}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                        {item.description}
                                    </p>

                                    {/* Decorative Line */}
                                    <div className={`mt-auto pt-6 w-12 border-b-4 border-gray-100 group-hover:border-transparent group-hover:bg-gradient-to-r ${item.gradient} h-1 transition-all duration-500`}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="section bg-white border-t border-gray-100 relative overflow-hidden">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                            Plus qu'un métier, un état d'esprit
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Chez TigmiTec, nous croyons que la compétence technique ne suffit pas.
                            C'est la curiosité, l'empathie et la soif d'apprendre qui font la différence.
                            Chacun de nos experts est sélectionné non seulement pour son savoir-faire,
                            mais aussi pour sa capacité à collaborer et à innover.
                        </p>
                        <div className="inline-flex items-center justify-center space-x-2 text-blue-600 font-bold uppercase tracking-wider text-sm bg-blue-50 px-4 py-2 rounded-full">
                            <span>Excellence</span>
                            <span className="text-gray-300">•</span>
                            <span>Passion</span>
                            <span className="text-gray-300">•</span>
                            <span>Innovation</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Us CTA */}
            <section className="py-20 bg-gray-900 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-gray-900 to-gray-900"></div>
                <div className="container-custom relative z-10">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                        Vous vous reconnaissez dans ces valeurs ?
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Nous sommes toujours à la recherche de nouveaux talents pour enrichir notre équipe.
                    </p>
                    <Link href="/contact" className="inline-block px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        Rejoignez l'Aventure
                    </Link>
                </div>
            </section>
        </main>
    );
}
