const HomePage = () => {
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
                <span className="hero__highlight-purple">voice.</span>
              </h1>
              <p className="hero__description">
                No more boring "live chats". Turn browsing into a conversation.
              </p>
              <div className="hero__buttons">
                <button className="hero__button-primary">
                  Join the Alpha
                </button>
                <button className="hero__button-outline">
                  Watch 30s Demo
                </button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hero__visual">
              <div className="hero__circles">
                <div className="hero__circle-outer"></div>
                <div className="hero__circle-middle"></div>
                <div className="hero__circle-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section how-it-works">
        <div className="section__container">
          <h2 className="section__title">How It Works</h2>
          <div className="section__grid-3">
            {/* Speak */}
            <div className="how-it-works__card how-it-works__card--highlighted">
              <div className="how-it-works__emoji">🗣️</div>
              <h3 className="how-it-works__card-title">Speak</h3>
              <p className="how-it-works__card-text">Voice, gestures, or text — the AI understands it all.</p>
            </div>
            {/* Tap */}
            <div className="how-it-works__card">
              <div className="how-it-works__emoji">☝️</div>
              <h3 className="how-it-works__card-title">Tap</h3>
              <p className="how-it-works__card-text">Users find what they want faster with intuitive guidance.</p>
            </div>
            {/* Type */}
            <div className="how-it-works__card">
              <div className="how-it-works__emoji">💬</div>
              <h3 className="how-it-works__card-title">Type</h3>
              <p className="how-it-works__card-text">Seamless, conversational experiences without clunky chatbots.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="section why-it-matters">
        <div className="section__container">
          <h2 className="section__title">Why It Matters</h2>
          <div className="why-it-matters__grid">
            {/* More intuitive */}
            <div>
              <div className="why-it-matters__item-emoji">🧭</div>
              <h3 className="why-it-matters__item-title">More intuitive</h3>
              <p className="why-it-matters__item-text">Users find what they want faster.</p>
            </div>
            {/* More immersive */}
            <div>
              <div className="why-it-matters__item-emoji">🌐</div>
              <h3 className="why-it-matters__item-title">More immersive</h3>
              <p className="why-it-matters__item-text">The web feels alive.</p>
            </div>
            {/* More connected */}
            <div>
              <div className="why-it-matters__item-emoji">💡</div>
              <h3 className="why-it-matters__item-title">More connected</h3>
              <p className="why-it-matters__item-text">Websites finally listen and respond.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta__container">
          <div className="cta__box">
            <h2 className="cta__title">
              Be part of the next web experience.
            </h2>
            <div className="cta__form">
              <input
                type="email"
                placeholder="Enter your email"
                className="cta__input"
              />
              <button className="cta__button">
                Get Early Access
              </button>
            </div>
            <p className="cta__note">
              Limited alpha access — launching at Web Summit.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

