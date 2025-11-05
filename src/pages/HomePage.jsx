const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0a0e27]">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-32">
            {/* Left Content */}
            <div className="text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Meet the AI that gives your website{' '}
                <span className="text-blue-400">a true</span>{' '}
                <span className="text-purple-400">voice.</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                No more boring "live chats". Turn browsing into a conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition">
                  Join the Alpha
                </button>
                <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-gray-500 transition">
                  Watch 30s Demo
                </button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-96 h-96">
                {/* Outer Circle */}
                <div className="absolute inset-0 rounded-full border border-purple-500/30"></div>
                {/* Middle Circle */}
                <div className="absolute inset-8 rounded-full border border-purple-500/50 bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
                {/* Inner Circle - Glowing */}
                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl shadow-purple-500/50 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Speak */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8">
              <div className="text-5xl mb-4">🗣️</div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Speak</h3>
              <p className="text-gray-400">Voice, gestures, or text — the AI understands it all.</p>
            </div>
            {/* Tap */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8">
              <div className="text-5xl mb-4">☝️</div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Tap</h3>
              <p className="text-gray-400">Users find what they want faster with intuitive guidance.</p>
            </div>
            {/* Type */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Type</h3>
              <p className="text-gray-400">Seamless, conversational experiences without clunky chatbots.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Why It Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* More intuitive */}
            <div>
              <div className="text-6xl mb-4">🧭</div>
              <h3 className="text-2xl font-bold mb-4">More intuitive</h3>
              <p className="text-gray-400">Users find what they want faster.</p>
            </div>
            {/* More immersive */}
            <div>
              <div className="text-6xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold mb-4">More immersive</h3>
              <p className="text-gray-400">The web feels alive.</p>
            </div>
            {/* More connected */}
            <div>
              <div className="text-6xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-4">More connected</h3>
              <p className="text-gray-400">Websites finally listen and respond.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Be part of the next web experience.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900/80 border border-gray-700 text-white px-6 py-4 rounded-lg w-full sm:w-96 focus:outline-none focus:border-blue-500 transition"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition whitespace-nowrap">
                Get Early Access
              </button>
            </div>
            <p className="text-gray-400 text-sm">
              Limited alpha access — launching at Web Summit.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

