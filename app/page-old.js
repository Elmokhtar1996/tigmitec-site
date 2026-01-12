'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Re-initialiser WOW.js si disponible
    if (typeof window !== 'undefined' && window.WOW) {
      new window.WOW().init();
    }

    // Activer les barres de progression au scroll ou au chargement
    const activateProgressBars = () => {
      if (typeof window !== 'undefined' && window.jQuery) {
        const $ = window.jQuery;
        $(".bar-fill").each(function () {
          const progressWidth = $(this).attr('data-percent');
          $(this).css('width', progressWidth + '%');
          // Update the percentage text
          $(this).closest('.progress-box').find('.percent').text(progressWidth + '%');
        });
      }
    };

    // Petit délai pour s'assurer que le DOM est prêt après le rendu React
    const timer = setTimeout(() => {
      activateProgressBars();

      // Re-initialiser Owl Carousel si nécessaire
      if (window.jQuery && window.jQuery.fn.owlCarousel) {
        const $ = window.jQuery;
        if ($('.main-slider-carousel').length) {
          $('.main-slider-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            animateOut: 'slideOutDown',
            animateIn: 'fadeIn',
            smartSpeed: 1000,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: { 0: { items: 1 }, 600: { items: 1 }, 1200: { items: 1 } }
          });
        }
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {/* main slider */}
      <section className="main-slider">
        <div className="main-slider-carousel owl-carousel owl-theme">
          <div className="slide" style={{ position: 'relative' }}>
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=850&q=80"
              alt="Innovation Digitale"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <div className="content">
                <h1>Innovation Digitale<br />& Solutions Web</h1>
                <div className="tp-btn">
                  <Link href="/contact" className="btn-one">Contactez-nous</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="slide" style={{ position: 'relative' }}>
            <Image
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=850&q=80"
              alt="Applications Mobiles"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <div className="content">
                <h1>Applications Mobiles<br />& Sur Mesure</h1>
                <div className="tp-btn">
                  <Link href="/contact" className="btn-one">Contactez-nous</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="slide" style={{ position: 'relative' }}>
            <Image
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=850&q=80"
              alt="Design Créatif"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <div className="content">
                <h1>Design Créatif<br />& Marketing Social</h1>
                <div className="tp-btn">
                  <Link href="/contact" className="btn-one">Contactez-nous</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about section */}
      <section className="about-us sec-pad">
        <div className="container">
          <div className="about-title centred">
            <div className="section-title">
              <h2>À propos de nous</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 about-column wow fadeInLeft">
              <div className="about-content">
                <h3>Chez <span>TigmiTec</span></h3>
                <h5>Tigmitec – votre partenaire numérique de confiance</h5>
                <div className="text">
                  <p>Nous sommes passionnés par l’innovation technologique et la création de solutions
                    numériques sur mesure. Notre mission est d’accompagner les entreprises et les
                    particuliers dans leur transformation digitale grâce à des services complets et adaptés
                    à leurs besoins.
                  </p>
                  <p>
                    Chez Tigmitec, nous mettons la créativité, la qualité et la satisfaction client au cœur
                    de notre travail. Notre équipe est dédiée à transformer vos idées en projets concrets et
                    innovants, en utilisant les dernières technologies pour vous offrir le meilleur.
                  </p>
                </div>
                <div className="button"><Link href="/about" className="btn-one">En savoir plus</Link></div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 about-column wow fadeInRight">
              <div className="img-box">
                <figure>
                  <video width="100%" autoPlay loop muted playsInline style={{ borderRadius: '10px' }}>
                    <source src="/images/about/about.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la balise vidéo.
                  </video>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* service section */}
      <section className="our-service sec-pad">
        <div className="container">
          <div className="service-title centred">
            <div className="section-title">
              <h2>Nos Services</h2>
            </div>
          </div>
          <div className="row">
            {[
              { title: "Développement Web & Mobile", desc: "Création de sites vitrines, e-commerce et applications mobiles performantes pour propulser votre business.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=370&h=250&q=80", icon: "flaticon-growth", delay: "0s" },
              { title: "Infographie & Design", desc: "Conception d'identités visuelles uniques, logos et supports marketing pour une image de marque forte.", img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=370&h=250&q=80", icon: "flaticon-meeting", delay: "0.2s" },
              { title: "Marketing Digital & Pub", desc: "Gestion de réseaux sociaux et campagnes publicitaires ciblées pour maximiser votre visibilité et ROI.", img: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=370&h=250&q=80", icon: "flaticon-line-graph", delay: "0.4s" },
            ].map((service, index) => (
              <div key={index} className="col-md-4 col-sm-6 col-xs-12 service-column wow fadeInUp" data-wow-delay={service.delay}>
                <div className="single-item hoverly-one">
                  <figure className="img-box">
                    <Image
                      src={service.img}
                      alt={service.title}
                      width={370}
                      height={250}
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <div className="overlay">
                      <Link href="/service-details" className="btn-one">En savoir plus</Link>
                    </div>
                  </figure>
                  <div className="lower-content">
                    <div className="icon-box"><i className={service.icon}></i></div>
                    <h4><Link href="/service-details">{service.title}</Link></h4>
                    <div className="text">
                      <p>{service.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* our skills */}
      <section className="skills-growth sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 skills-column">
              <div className="our-skills">
                <div className="sec-title-two">Nos Compétences</div>
              </div>
              <div className="skills-content">
                {[
                  { title: "Développement Web", percent: 80, delay: "0s" },
                  { title: "Marketing Social", percent: 70, delay: "0.2s" },
                  { title: "Applications Mobiles", percent: 75, delay: "0.4s" },
                  { title: "Design & Branding", percent: 85, delay: "0.6s" },
                  { title: "Stratégie SEO", percent: 91, delay: "0.8s" },
                ].map((skill, index) => (
                  <div key={index} className="progress-levels">
                    <div className="progress-box wow fadeInUp" data-wow-delay={skill.delay}>
                      <div className="box-title">
                        <h6>{skill.title}</h6>
                      </div>
                      <div className="percent">{skill.percent}%</div>
                      <div className="inner">
                        <div className="bar">
                          <div className="bar-innner">
                            <div className="bar-fill" data-percent={skill.percent} style={{ width: `${skill.percent}%` }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 stats-column">
              <div className="stats-title">
                <div className="sec-title-two">Nos Réalisations</div>
              </div>
              <div className="stats-outer fact-counter">
                <div className="row">
                  {[
                    { count: "50", label: "Projets Réalisés", icon: "flaticon-growth", delay: "0s" },
                    { count: "30", label: "Sites Web", icon: "flaticon-line-graph", delay: "0.2s" },
                    { count: "15", label: "Applications Web", icon: "flaticon-meeting", delay: "0.4s" },
                    { count: "4", label: "Applications Mobiles", icon: "fa fa-smile-o", delay: "0.6s" },
                  ].map((stat, index) => (
                    <div key={index} className="col-md-6 col-sm-6 col-xs-12 column wow zoomIn" data-wow-delay={stat.delay}>
                      <div className="counter-block">
                        <div className="icon-box">
                          <i className={stat.icon}></i>
                        </div>
                        <div className="counter-number">
                          <span className="counter count-text" data-stop={stat.count} data-speed="1500">{stat.count}</span><span>+</span>
                        </div>
                        <div className="counter-title">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* cta section */}
      <section className="cta-section sec-pad"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-sm-12 col-xs-12 col-md-offset-1 cta-column">
              <div className="cta-content">
                <div className="section-title centred">
                  <h2>Demander un Rappel</h2>
                </div>
                <div className="cta-form">
                  <form method="post" action="#">
                    <div className="row">
                      <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                        <input type="text" name="name" placeholder="Your Name" required />
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                        <input type="email" name="email" placeholder="Your Email" required />
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                        <div className="select-box">
                          <i className="fa fa-angle-down"></i>
                          <select className="form-control" name="form_subject">
                            <option value="0">I Would like to Discuss</option>
                            <option value="1">Business Planning</option>
                            <option value="2">Marketing Strategy</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                        <input type="text" name="phone" placeholder="Your Phone" required />
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                        <div className="cta-btn centred">
                          <button type="submit" className="btn-one">Envoyer Message</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* news section */}
      <section className="news-section sec-pad">
        <div className="container">
          <div className="news-title centred">
            <div className="section-title">
              <h2>Actualités Récentes</h2>
            </div>
          </div>
          <div className="row">
            {[
              { title: "Intelligence Artificielle", date: "15 Décembre 2025", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=370&h=220&q=80" },
              { title: "Transformation Digitale", date: "10 Décembre 2025", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=370&h=220&q=80" },
              { title: "Cybersécurité", date: "5 Décembre 2025", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=370&h=220&q=80" },
            ].map((news, index) => (
              <div key={index} className="col-md-4 col-sm-6 col-xs-12 news-column">
                <div className="single-item">
                  <div className="single-item-overlay">
                    <div className="img-box">
                      <Image
                        src={news.img}
                        alt={news.title}
                        width={370}
                        height={220}
                        style={{ width: '100%', height: 'auto' }}
                      />
                      <div className="overlay">
                        <div className="inner-box">
                          <ul className="content">
                            <li><Link href="/blog-details"><i className="fa fa-link"></i></Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lower-content">
                    <h3><Link href="/blog-details">{news.title}</Link></h3>
                    <ul className="meta">
                      <li><i className="fa fa-calendar"></i>{news.date}</li>
                    </ul>
                    <div className="text">
                      <p>Découvrez comment les nouvelles technologies impactent votre business...</p>
                    </div>
                    <div className="button">
                      <Link href="/blog-details" className="btn-one">Lire Plus</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* bye now section */}
      <section className="bye-now">
        <div className="container">
          <div className="bye-now-content">
            <div className="title">
              <h3>Nous sommes les meilleurs en innovation digitale.</h3>
            </div>
            <div className="button"><Link href="/contact" className="btn-one">CONTACTEZ-NOUS</Link></div>
          </div>
        </div>
      </section>
    </main>
  );
}
