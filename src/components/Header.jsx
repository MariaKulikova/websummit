import { scrollToElement } from '@/utils/scroll';

const Header = () => {
  const scrollToCtaTop = () => scrollToElement('.cta-top');

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__inner">
          <div className="header__logo-wrapper">
            <img src="/assets/Logo_SG.svg" alt="ShiftGears" className="header__logo" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

