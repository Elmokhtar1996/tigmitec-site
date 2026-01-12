import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: "TigmiTec | Nos Services - Développement & Marketing",
    description: "Découvrez nos services : Développement Web, Applications Mobiles, Design Graphique, et Marketing Digital. TigmiTec accompagne votre croissance.",
};

export default function ServicePage() {
    const services = [
        {
            title: "Développement Web",
            description: "Création de sites vitrines modernes, boutiques e-commerce élégantes et plateformes web sur mesure adaptées à vos besoins.",
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=370&h=250&q=80",
            icon: "💻"
        },
        {
            title: "Applications Web et Mobiles",
            description: "Développement d'applications web et mobiles intuitives et performantes pour toutes les plateformes, offrant une expérience utilisateur exceptionnelle.",
            img: "/images/resources/digital-expertise.jpg",
            icon: "📱"
        },
        {
            title: "Design & Infographie",
            description: "Conception d'identités visuelles percutantes, logos uniques et supports de communication créatifs pour votre marque.",
            img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=370&h=250&q=80",
            icon: "🎨"
        },
        {
            title: "Marketing Digital",
            description: "Stratégies de marketing digital complètes pour augmenter votre visibilité en ligne et atteindre vos clients idéaux.",
            img: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=370&h=250&q=80",
            icon: "📈"
        },
        {
            title: "SEO & Référencement",
            description: "Optimisation avancée pour les moteurs de recherche afin de propulser votre site web sur la première page de résultats.",
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=370&h=250&q=80",
            icon: "🔍"
        },
        {
            title: "Social Media",
            description: "Gestion professionnelle de vos réseaux sociaux pour bâtir une communauté engagée et booster votre notoriété.",
            img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=370&h=250&q=80",
            icon: "📣"
        }
    ];

    return (
        <main className="min-h-screen">
            {/* Header / Page Title - Modernized */}
            <section className="relative py-20 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-secondary-900 opacity-90"></div>
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
                <div className="container-custom relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
                        Nos <span className="gradient-text">Services</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Innovation digitale & Solutions sur mesure pour votre entreprise
                    </p>
                </div>
            </section>

            {/* Service Section */}
            <section className="section bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="card group hover:-translate-y-2 transition-transform duration-300">
                                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                                    {/* Note: In production, configure next/image domains properly. Using img for external links now to avoid config errors if not set */}
                                    <img
                                        src={service.img}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 text-4xl">{service.icon}</div>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                                        <Link href="/service-details">{service.title}</Link>
                                    </h4>
                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                    <Link href="/service-details" className="text-primary-600 font-semibold inline-flex items-center hover:text-primary-800">
                                        En savoir plus
                                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="section section-light">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                            Pourquoi Choisir Notre Expertise ?
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Nous combinons innovation, qualité et engagement pour valoriser votre projet digital.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: "⏰", title: "Expertise & Expérience", text: "Des années d'accompagnement dans la transformation digitale, maîtrisant les dernières technologies pour des solutions durables." },
                            { icon: "🏆", title: "Qualité Premium", text: "Nous ne faisons aucun compromis sur la qualité. Chaque pixel et chaque ligne de code sont optimisés pour l'excellence." },
                            { icon: "⚙️", title: "Solutions de A à Z", text: "De la réflexion stratégique à la maintenance, nous gérons l'intégralité de votre projet pour une tranquillité totale." },
                            { icon: "🔄", title: "Approche Agile", text: "Nous travaillons par itérations pour vous offrir une visibilité constante et adapter le projet en temps réel à vos retours." },
                            { icon: "💼", title: "Impact Business", text: "Nos solutions ne sont pas seulement belles, elles sont conçues pour générer de la valeur et stimuler votre croissance." },
                            { icon: "🛠️", title: "Support Dédié", text: "Une équipe réactive à votre écoute pour vous conseiller et intervenir rapidement en cas de besoin technique." }
                        ].map((item, index) => (
                            <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                                <div className="text-4xl shrink-0">{item.icon}</div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Commitments Section */}
            <section className="section bg-white overflow-hidden">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Text Content */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                                    Nos Engagements pour Votre Succès
                                </h2>
                                <p className="text-gray-600 text-lg">
                                    Chez TigmiTec, nous croyons qu'une technologie réussie est celle qui sert vos
                                    objectifs business. Nous nous engageons à être bien plus qu'un simple prestataire :
                                    un véritable partenaire stratégique.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { title: "Transparence Totale", text: "Vous suivez l'avancement de votre projet en temps réel via nos outils de gestion agile." },
                                    { title: "Innovation Continue", text: "Nous intégrons les dernières avancées (IA, Cloud, Mobile) pour vous donner un avantage compétitif." },
                                    { title: "Accompagnement Personnalisé", text: "Un interlocuteur unique dédié à votre projet pour une communication fluide et efficace." }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 mt-1">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mb-1">{item.title}</h5>
                                            <p className="text-gray-600 text-sm">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact" className="btn btn-primary">
                                Discuter de Votre Projet
                            </Link>
                        </div>

                        {/* Image */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-600/20 to-secondary-600/20 rounded-2xl transform rotate-3 blur-lg"></div>
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=800&q=80"
                                alt="Engagement TigmiTec"
                                className="relative rounded-2xl shadow-xl w-full object-cover"
                            />
                        </div>
                    </div>
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
