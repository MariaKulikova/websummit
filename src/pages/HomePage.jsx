import { scrollToElement } from '@/utils/scroll';

const HomePage = () => {
  const scrollToCtaTop = () => scrollToElement('.cta-top');
  const scrollToVideo = () => scrollToElement('.why-it-matters');

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__container">
          <div className="hero__grid">
            {/* Left Content */}
            <div className="hero__content">
              <h1 className="hero__title">
                Meet the AI that gives your website{' '}
                <span className="hero__highlight-blue">a true</span>{' '}
                <span className="hero__highlight-purple">voice</span>
              </h1>
              <p className="hero__description">
                No more boring "live chats" Turn browsing into a conversation
              </p>
              <div className="hero__buttons">
                <button className="hero__button-primary" onClick={scrollToCtaTop}>
                  Join the Alpha
                </button>
                <button className="hero__button-outline" onClick={scrollToVideo}>
                  Watch 30s Demo
                </button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hero__visual">
              <div className="hero__circles">
                <div className="hero__circle-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section how-it-works">
        <div className="section__container">
          <div className="section__grid-3">
            {/* Speak */}
            <div>
              <h3 className="how-it-works__card-title">Speak</h3>
              <p className="how-it-works__card-text">Voice, gestures, or text — the AI understands it all</p>
            </div>
            {/* Tap */}
            <div>
              <h3 className="how-it-works__card-title">Tap</h3>
              <p className="how-it-works__card-text">Users find what they want faster with intuitive guidance</p>
            </div>
            {/* Type */}
            <div>
              <h3 className="how-it-works__card-title">Type</h3>
              <p className="how-it-works__card-text">Seamless, conversational experiences without clunky chatbots</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="section why-it-matters">
        <div className="section__container">
          <div className="why-it-matters__content">
            <div className="why-it-matters__video-wrapper">
              <video
                className="why-it-matters__video"
                src="/assets/demo.mov"
                autoPlay
                loop
                muted
                playsInline
                controls
              />
            </div>
            <div className="why-it-matters__items">
              {/* More intuitive */}
              <div className="why-it-matters__item">
                <h3 className="why-it-matters__item-title">More intuitive</h3>
                <p className="why-it-matters__item-text">Users find what they want faster</p>
              </div>
              {/* More immersive */}
              <div className="why-it-matters__item">
                <h3 className="why-it-matters__item-title">More immersive</h3>
                <p className="why-it-matters__item-text">The web feels alive</p>
              </div>
              {/* More connected */}
              <div className="why-it-matters__item">
                <h3 className="why-it-matters__item-title">More connected</h3>
                <p className="why-it-matters__item-text">Websites finally listen and respond</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-top">
        <div className="section__container">
          <div className="cta-top__card">
            <div className="cta-top__arrow-wrapper">
              <svg className="cta-top__arrow" viewBox="0 0 270 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M269.554 0.0358887V50.5311H256.24V22.771L228.48 50.5311L219.059 41.119L246.819 13.359H219.059V0.0358887H269.554Z" fill="url(#paint0_linear_cta)"/>
                <defs>
                  <linearGradient id="paint0_linear_cta" x1="273.537" y1="-7.02704" x2="211.236" y2="70.4496" gradientUnits="userSpaceOnUse">
                    <stop offset="0.115385" stopColor="#2A01F8"/>
                    <stop offset="0.524038" stopColor="#2F83FF"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="cta-top__content">
              <h2 className="cta-top__title">
                Be part of the next web experience
              </h2>
              <p className="cta-top__note">
                Limited alpha access — launching at Web Summit
              </p>
              <div className="cta-top__form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="cta-top__input"
                />
                <button className="cta-top__button">
                  Get Early Access
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;

