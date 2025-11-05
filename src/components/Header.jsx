const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__inner">
          <div className="header__logo-wrapper">
            <img src="/assets/Logo_SG.svg" alt="ShiftGears" className="header__logo" />
          </div>
          <div>
            <button className="header__button">
              Join the Alpha
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

