const Header = () => {
  return (
    <header className="bg-[#0a0e27] border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/assets/Logo_SG.svg" alt="ShiftGears" className="h-12 brightness-0 invert" />
          </div>

          {/* Right Button */}
          <div>
            <button className="border border-gray-700 text-white px-6 py-2.5 rounded-lg font-medium hover:border-gray-600 transition">
              Join the Alpha
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

