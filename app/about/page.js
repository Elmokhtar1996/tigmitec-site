import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: "TigmiTec | À Propos - Innovation Digitale",
    description: "À propos de TigmiTec : Notre histoire, notre mission et notre vision pour l'innovation digitale. Découvrez pourquoi nous sommes le partenaire idéal.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            {/* Header / Page Title - Modernized */}
            <section className="relative py-20 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-secondary-900 opacity-90"></div>
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
                <div className="container-custom relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
                        À Propos de <span className="gradient-text">TigmiTec</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Innovation digitale & Solutions sur mesure pour votre croissance
                    </p>
                </div>
            </section>

            {/* About Section - Tailwind */}
            <section className="section section-light">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div className="space-y-6">
                            <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                                Bienvenue chez <span className="text-primary-600">TigmiTec</span>
                            </h3>
                            <h5 className="text-xl font-semibold text-gray-700">
                                Votre partenaire digital de confiance depuis 2020.
                            </h5>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Nous sommes passionnés par l'innovation technologique et la création de solutions
                                    numériques sur mesure. Notre mission est d'accompagner les entreprises et les
                                    particuliers dans leur transformation digitale grâce à des services complets et adaptés
                                    à leurs besoins.
                                </p>
                                <p>
                                    Chez TigmiTec, nous mettons la créativité, la qualité et la satisfaction client au cœur
                                    de notre travail. Notre équipe d'experts dédiés transforme vos idées en projets concrets
                                    et innovants, en utilisant les dernières technologies pour vous offrir le meilleur. De
                                    la conception à la réalisation, nous sommes à vos côtés pour faire de votre vision une
                                    réalité digitale performante.
                                </p>
                            </div>
                            <div className="pt-4">
                                <Link href="/contact" className="btn btn-primary">
                                    Contactez-nous
                                </Link>
                            </div>
                        </div>

                        {/* Video/Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                            <video
                                className="w-full h-auto object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src="/images/about/about.mp4" type="video/mp4" />
                                Votre navigateur ne supporte pas la balise vidéo.
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Counter - Tailwind Grid */}
            <section className="section bg-primary-900 text-white">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { count: "50+", label: "Projets Réalisés" },
                            { count: "30+", label: "Sites Web" },
                            { count: "15+", label: "Applications Web" },
                            { count: "4+", label: "Applications Mobiles" }
                        ].map((stat, index) => (
                            <div key={index} className="p-4">
                                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.count}</div>
                                <div className="text-lg text-gray-300">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="/images/resources/innovation-woman.jpg"
                                alt="Innovation TigmiTec"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="order-1 lg:order-2 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                                Une Vision Connectée
                            </h2>
                            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    Notre vision dépasse la simple programmation. Nous créons des ponts entre vos idées et le monde numérique.
                                    Chaque icône, chaque flux de données est pensé pour simplifier l'interaction humaine et booster votre efficacité opérationnelle.
                                </p>
                                <p>
                                    Chez TigmiTec, l'intelligence artificielle et la connectivité sont au service de votre croissance durable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Grid */}
            <section className="section section-light">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                            Pourquoi Nous Choisir ?
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            L'excellence et l'innovation au service de votre projet
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: "⏰", title: "5 ans d'Expertise", text: "Depuis 2020, nous accompagnons nos clients dans leur transformation digitale avec passion et professionnalisme." },
                            { icon: "🏆", title: "Excellence & Qualité", text: "Notre engagement envers l'excellence se reflète dans chaque projet. Qualité et innovation garanties." },
                            { icon: "💡", title: "Solutions Complètes", text: "De la conception au déploiement, nous offrons une gamme complète de services digitaux sur mesure." },
                            { icon: "🚀", title: "Opportunités Digitales", text: "Nous aidons nos clients à saisir les opportunités du numérique pour stimuler leur croissance." },
                            { icon: "🤝", title: "Partenariats Stratégiques", text: "Des relations durables basées sur la confiance, la transparence et la collaboration." },
                            { icon: "🎧", title: "Support Disponible", text: "Notre équipe est disponible pour vous accompagner tout au long de votre parcours digital." },
                        ].map((item, index) => (
                            <div key={index} className="card p-8 hover:-translate-y-2 transition-transform duration-300">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Teaser */}
            <section className="section bg-white text-center">
                <div className="container-custom">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Notre Équipe</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Retrouvez notre équipe d'experts dédiée à votre succès. Des professionnels passionnés et qualifiés à votre service.
                    </p>
                    <Link href="/team" className="btn btn-primary">
                        Voir toute l'équipe
                    </Link>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-center">
                <div className="container-custom">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                        Nous sommes les meilleurs en innovation digitale.
                    </h2>
                    <Link href="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100">
                        CONTACTEZ-NOUS
                    </Link>
                </div>
            </section>
        </main>
    );
}
