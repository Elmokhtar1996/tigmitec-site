import Link from 'next/link';

export const metadata = {
    title: "TigmiTec | FAQ - Vos Questions, Nos Réponses",
    description: "Tout ce que vous devez savoir sur nos services de développement web, mobile et marketing digital. TigmiTec répond à vos interrogations.",
};

export default function FaqPage() {
    const faqs = [
        {
            question: "Quels types de sites web développez-vous ?",
            answer: "Nous développons tout type de sites : des sites vitrines modernes pour présenter votre activité, des plateformes e-commerce complètes pour vendre vos produits, et des applications web sur mesure pour répondre à des besoins métiers spécifiques."
        },
        {
            question: "Combien de temps faut-il pour créer une application mobile ?",
            answer: "La durée dépend de la complexité de l'application. En moyenne, un projet peut prendre entre 2 et 6 mois, incluant les phases de conception UI/UX, de développement et de tests rigoureux."
        },
        {
            question: "Proposez-vous une maintenance après la livraison ?",
            answer: "Oui, nous proposons des contrats de maintenance évolutive et corrective pour garantir que votre solution reste performante, sécurisée et à jour avec les dernières technologies."
        },
        {
            question: "Comment fonctionne votre accompagnement en Marketing Digital ?",
            answer: "Nous commençons par une analyse de votre marché et de vos concurrents, puis nous élaborons une stratégie personnalisée incluant le SEO, la publicité payante et la gestion des réseaux sociaux."
        },
        {
            question: "Quels sont vos tarifs ?",
            answer: "Chaque projet étant unique, nos tarifs sont basés sur vos besoins spécifiques. Nous proposons des devis gratuits et détaillés après un premier échange sur votre vision et vos objectifs."
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
                        Foire Aux <span className="gradient-text">Questions</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Besoin d'aide ? Trouvez les réponses à vos questions fréquentes
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* FAQ List */}
                        <div className="lg:col-span-2 space-y-6">
                            {faqs.map((faq, index) => (
                                <div key={index} className="card p-6 md:p-8 bg-white hover:bg-white/80 transition-colors">
                                    <h4 className="flex items-start text-xl font-bold text-gray-900 mb-3">
                                        <span className="text-primary-600 font-bold mr-3 text-2xl">Q.</span>
                                        <span className="mt-1">{faq.question}</span>
                                    </h4>
                                    <div className="pl-9 text-gray-600 leading-relaxed text-lg">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Sidebar Form */}
                        <div className="lg:col-span-1">
                            <div className="card p-8 bg-white sticky top-24">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Poser une Question</h3>
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Votre Question</label>
                                        <textarea
                                            name="message"
                                            required
                                            rows="4"
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-full">
                                        Envoyer le Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Still have questions CTA */}
            <section className="section bg-white text-center border-t border-gray-100">
                <div className="container-custom">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">
                        Vous n'avez pas trouvé votre réponse ?
                    </h3>
                    <Link href="/contact" className="btn btn-outline text-lg px-8">
                        CONTACTEZ-NOUS DIRECTEMENT
                    </Link>
                </div>
            </section>
        </main>
    );
}
