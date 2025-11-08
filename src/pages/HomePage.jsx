import { useEffect } from 'react';
import { scrollToElement } from '@/utils/scroll';
import { initBlobScrollEffect } from '@/utils/scrollEffects';
import Features from '@/components/Features';

const HomePage = () => {
  const scrollToCtaTop = () => scrollToElement('.cta-top');
  const scrollToVideo = () => scrollToElement('.why-it-matters');

  useEffect(() => {
    const cleanup = initBlobScrollEffect();
    return cleanup;
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__container">
          <div className="hero__grid">
            {/* Left Content */}
            <div className="hero__content">
              <h1 className="hero__title">
                Meet the AI that gives&nbsp;your&nbsp;website a&nbsp;voice
              </h1>
              <p className="hero__description">
                No more boring "live chats" Turn browsing into a conversation
              </p>
              <div className="hero__buttons">
                <button className="hero__button-outline" onClick={scrollToCtaTop}>
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
                <div className="hero__circle-inner">
                  <img src="/assets/MicGlass.svg?v=3" alt="" className="hero__mic-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* How It Works Section */}
      <section className="section how-it-works">
        <div className="section__container">
          <div className="section__grid-3">
            {/* Speak */}
            <div className="how-it-works__card">
              <h3 className="how-it-works__card-title">Speak</h3>
              <p className="how-it-works__card-text">Voice, or text — a seamless, conversational experience without clunky chatbots.</p>
            </div>
            {/* Navigate */}
            <div className="how-it-works__card">
              <h3 className="how-it-works__card-title">Navigate</h3>
              <p className="how-it-works__card-text">Help users find what they want faster with auto-navigation. A true multi-modal experience.</p>
            </div>
            {/* Act */}
            <div className="how-it-works__card">
              <h3 className="how-it-works__card-title">Act</h3>
              <p className="how-it-works__card-text">Empower your audience to do more by giving your AI agent the necessary tools.</p>
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
                <img src="/assets/Arrow.svg?v=5" alt="" className="why-it-matters__arrow" />
                <h3 className="why-it-matters__item-title">More intuitive</h3>
                <p className="why-it-matters__item-text">Users find what they want faster</p>
              </div>
              {/* More immersive */}
              <div className="why-it-matters__item">
                <img src="/assets/Arrow.svg?v=5" alt="" className="why-it-matters__arrow" />
                <h3 className="why-it-matters__item-title">More immersive</h3>
                <p className="why-it-matters__item-text">The web feels alive</p>
              </div>
              {/* More connected */}
              <div className="why-it-matters__item">
                <img src="/assets/Arrow.svg?v=5" alt="" className="why-it-matters__arrow" />
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
              <img src="/assets/ArrowGlass.svg" alt="" className="cta-top__arrow" />
            </div>
            <div className="cta-top__content">
              <h2 className="cta-top__title">
                Be part of the next web's evolution
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
                <button className="cta-top__button-outline">
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

