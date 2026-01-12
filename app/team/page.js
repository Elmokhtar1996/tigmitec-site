import Link from 'next/link';

export const metadata = {
    title: "TigmiTec | Notre Équipe d'Experts",
    description: "Découvrez l'équipe passionnée de TigmiTec. Des experts en développement web, design et marketing digital à votre service.",
};

export default function TeamPage() {
    const teamMembers = [
        {
            name: "Hassan",
            role: "Directeur Général & Lead Developer",
            img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=370&h=430&q=80",
            socials: { facebook: "#", twitter: "#", linkedin: "#" }
        },
        {
            name: "Sofia",
            role: "Directrice Artistique & UX Designer",
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=370&h=430&q=80",
            socials: { facebook: "#", twitter: "#", linkedin: "#" }
        },
        {
            name: "Karim",
            role: "Expert Marketing Digital & SEO",
            img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=370&h=430&q=80",
            socials: { facebook: "#", twitter: "#", linkedin: "#" }
        },
        {
            name: "Yasmine",
            role: "Développeuse Web Full-Stack",
            img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=370&h=430&q=80",
            socials: { facebook: "#", twitter: "#", linkedin: "#" }
        },
        {
            name: "Amine",
            role: "Social Media Manager",
            img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=370&h=430&q=80",
            socials: { facebook: "#", twitter: "#", linkedin: "#" }
        },
        {
            name: "Lila",
            role: "Chargée de Relation Client",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=370&h=430&q=80",
            socials: { facebook: "#", twitter: "#", linkedin: "#" }
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
                        Notre <span className="gradient-text">Équipe</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Des talents passionnés pour vos projets ambitieux
                    </p>
                </div>
            </section>

            {/* Team Grid */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative bg-white rounded-2xl p-6 ring-1 ring-gray-900/5 shadow-xl text-center">
                                    <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                    <p className="text-primary-600 font-medium mb-4">{member.role}</p>

                                    <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {Object.entries(member.socials).map(([platform, link], i) => (
                                            <a key={i} href={link} className="text-gray-400 hover:text-primary-500 transition-colors">
                                                <span className="sr-only">{platform}</span>
                                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                                    <i className={`fa fa-${platform}`}></i>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Future Talent & Innovation Section */}
            <section className="section section-light relative overflow-hidden">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6 relative z-10">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                                L'Expertise Toujours à Portée de Main
                            </h2>
                            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    Chez TigmiTec, notre force réside dans une synergie unique entre créativité artistique et excellence technique.
                                    Chaque membre de notre équipe apporte une expertise pointue, qu'il s'agisse de développement complexe, de design intuitif ou de stratégies digitales percutantes.
                                </p>
                                <p>
                                    Nous ne nous contentons pas de livrer des projets ; nous construisons des partenariats durables basés sur la confiance et l'innovation.
                                    Notre engagement est d'anticiper vos besoins futurs tout en résolvant vos défis actuels avec agilité et précision.
                                </p>
                            </div>
                        </div>

                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/resources/future-backpack.jpg"
                                alt="TigmiTec Mobility"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Us CTA */}
            <section className="section bg-primary-900 text-white text-center">
                <div className="container-custom">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        Rejoignez l'Aventure TigmiTec
                    </h2>
                    <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
                        Nous sommes toujours à la recherche de nouveaux talents passionnés par le code, le design et l'innovation.
                    </p>
                    <Link href="/contact" className="btn bg-white text-primary-900 hover:bg-gray-100">
                        Voir les Opportunités
                    </Link>
                </div>
            </section>
        </main>
    );
}
