import { useEffect, useState } from 'react';
import { scrollToElement } from '@/utils/scroll';
import { initBlobScrollEffect } from '@/utils/scrollEffects';
import Features from '@/components/Features';
import AnimatedBackground from '@/components/AnimatedBackground';
import Button from '@/components/Button';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const scrollToCtaTop = () => scrollToElement('.cta-top');
  const scrollToVideo = () => scrollToElement('.why-it-matters');

  useEffect(() => {
    const cleanup = initBlobScrollEffect();
    return cleanup;
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) return;

    try {
      // Google Apps Script Web App URL - замени на свой URL после деплоя
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwsVIcRNdB6h3-IvfndoH00bxqCDdf826wg1btMHoTde7pHMXUMKyXN6GWIoOHOsjGzyA/exec';

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString()
        })
      });

      setIsSubmitted(true);
      setEmail('');
    } catch (error) {
      console.error('Error submitting email:', error);
      // Показываем сообщение даже если произошла ошибка
      setIsSubmitted(true);
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__container">
          <div className="hero__grid">
            {/* Left Content */}
            <div className="hero__content">
              <h1 className="hero__title">
                Meet the AI that gives your website a&nbsp;voice
              </h1>
              <p className="hero__description">
                No more boring "live chats" Turn browsing into a conversation
              </p>
              <div className="hero__buttons">
                <Button variant="primary" onClick={scrollToCtaTop}>
                  Join the Alpha
                </Button>
                <Button variant="outline" onClick={scrollToVideo}>
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Right Visual - removed for cleaner layout */}
            <div className="hero__visual">
              <div className="hero__circles">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Background with microphone - below hero on mobile */}
      <div className="hero__circle-inner">
        <AnimatedBackground />
      </div>

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
              <p className="how-it-works__card-text">Empower your visitors to do more without leaving your website.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Why It Matters Section */}
      <section className="section why-it-matters">
        <div className="section__container">
          <h2 className="why-it-matters__section-title">Watch Demo</h2>
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
            <div className="cta-top__content">
              <h2 className="cta-top__title">
                Be part of the next web's evolution
              </h2>
              <p className="cta-top__note">
                Limited alpha access — launching at Web Summit
              </p>
              {!isSubmitted ? (
                <form className="cta-top__form" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="cta-top__input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button variant="primary" className="cta-top__button" type="submit">
                    Get Early Access
                  </Button>
                </form>
              ) : (
                <div className="cta-top__form">
                  <p className="cta-top__success-message">
                    Thanks! We will write you soon
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;

