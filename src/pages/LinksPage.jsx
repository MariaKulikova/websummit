const LinksPage = () => {
  const links = [
    {
      title: 'Demo',
      url: 'https://demo.shiftgears.ai',
      description: 'Experience voice AI in action'
    },
    {
      title: 'WebVoice',
      url: 'https://webvoice.shiftgears.ai',
      description: 'AI voice assistant for websites'
    },
    {
      title: 'ShiftGears',
      url: 'https://shiftgears.ai',
      description: 'Main website'
    },
    {
      title: 'LinkedIn',
      url: 'https://linkedin.com/company/shiftgears',
      description: 'Connect with us'
    },
    {
      title: 'Email Us',
      url: 'mailto:websummit@shiftgears.ai',
      description: 'Get in touch'
    }
  ];

  return (
    <div className="links-page">
      <div className="links-page__container">
        <div className="links-page__logo">
          <img src="/assets/Logo_SG.svg" alt="ShiftGears" />
        </div>

        <div className="links-page__list">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="links-page__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="links-page__link-content">
                <h3 className="links-page__link-title">{link.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinksPage;
