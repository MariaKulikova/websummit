const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/assets/Logo_demo.svg" alt="Logo" className="h-8" />
          </div>

          {/* Desktop Navigation */}
          <nav className="flex space-x-8">
            <a href="#features" className="px-3 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Features
            </a>
            <a href="#about" className="px-3 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#contact" className="px-3 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

