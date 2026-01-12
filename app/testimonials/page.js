import Link from 'next/link';

export const metadata = {
    title: "TigmiTec | Témoignages Clients - Ils nous Font Confiance",
    description: "Découvrez les avis de nos clients sur la qualité de nos services de développement web et mobile. Votre satisfaction est notre plus belle réussite.",
};

export default function TestimonialsPage() {
    const testimonials = [
        {
            name: "Thomas Bernard",
            role: "Fondateur de Innov'App",
            content: "L'équipe de TigmiTec a transformé notre vision en une application mobile exceptionnelle. Leur expertise technique et leur sens du design sont impressionnants.",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
        },
        {
            name: "Marie Dubois",
            role: "Directrice Marketing - E-Com Plus",
            content: "Grâce à leur stratégie SEO, notre trafic organique a triplé en moins de 6 mois. Un partenaire fiable et ultra-compétent en marketing digital.",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
        },
        {
            name: "Jean-Pierre Martin",
            role: "Gérant de ArtDécor",
            content: "Notre nouveau site vitrine est non seulement beau mais aussi très performant. Les retours de nos clients sont unanimes. Merci TigmiTec !",
            img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
        },
        {
            name: "Sophie Lefebvre",
            role: "Chef de Produit - Tech Solutions",
            content: "Une collaboration fluide et une équipe à l'écoute. Ils ont su s'adapter à nos contraintes techniques pour livrer une plateforme web robuste.",
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
        },
        {
            name: "Lucas Garcia",
            role: "Entrepreneur - Foodie App",
            content: "Le design UI/UX réalisé par TigmiTec a été un facteur clé de succès pour notre lancement. Un travail de grande qualité, soigné et moderne.",
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
        },
        {
            name: "Julie Moreau",
            role: "Responsable Communication - Green Vision",
            content: "Professionnalisme et réactivité définissent TigmiTec. Ils ont su capturer l'essence de notre marque pour notre identité visuelle.",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
        }
    ];

    return (
        <main>
            {/* Nouveau titre moderne et innovant */}
            <section className="modern-page-title">
                <div className="container">
                    <div className="title-content">
                        <h1>Témoignages <span className="highlight">Clients</span></h1>
                        <p className="subtitle">La satisfaction de nos partenaires est notre priorité absolue</p>
                    </div>
                </div>
            </section>
            {/* Fin titre moderne */}

            {/* testimonials section */}
            <section className="testimonials-page sec-pad">
                <div className="container">
                    <div className="row">
                        {testimonials.map((t, index) => (
                            <div key={index} className="col-md-4 col-sm-6 col-xs-12 testimonial-column" style={{ marginBottom: '30px' }}>
                                <div className="single-testimonial-card shadow-sm" style={{ padding: '30px', background: '#fff', borderRadius: '15px', height: '100%', border: '1px solid #f0f0f0' }}>
                                    <div className="quote-icon" style={{ fontSize: '30px', color: '#0074D9', marginBottom: '20px' }}>
                                        <i className="fa fa-quote-left"></i>
                                    </div>
                                    <div className="text" style={{ fontStyle: 'italic', color: '#555', marginBottom: '25px', fontSize: '15px', lineHeight: '1.7' }}>
                                        "{t.content}"
                                    </div>
                                    <div className="author-info" style={{ display: 'flex', alignItems: 'center' }}>
                                        <figure className="author-thumb" style={{ marginRight: '15px' }}>
                                            <img src={t.img} alt={t.name} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
                                        </figure>
                                        <div className="info">
                                            <h5 style={{ margin: '0', color: '#222', fontWeight: 'bold' }}>{t.name}</h5>
                                            <span style={{ fontSize: '13px', color: '#888' }}>{t.role}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* bye now section */}
            <section className="bye-now centered">
                <div className="container">
                    <div className="bye-now-content">
                        <div className="title">
                            <h3>Prêt à devenir notre prochain succès ?</h3>
                        </div>
                        <div className="button"><Link href="/contact" className="btn-one">PARLONS DE VOTRE PROJET</Link></div>
                    </div>
                </div>
            </section>
        </main>
    );
}
