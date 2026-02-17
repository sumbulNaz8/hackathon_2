export default function Home() {
  return (
    <main className="min-h-screen bg-animated flex items-center justify-center p-4 overflow-hidden relative">
      {/* Floating orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Main content */}
      <div className="glass-card rounded-3xl p-8 sm:p-12 max-w-2xl w-full relative z-10 shadow-premium">
        {/* Logo with glow */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full bg-gradient-primary shadow-glow-purple flex items-center justify-center float">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
        </div>

        {/* Title with gradient */}
        <h1 className="text-5xl sm:text-6xl font-black text-center mb-4 text-gradient text-shadow">
          Todo Luxury
        </h1>

        <p className="text-xl sm:text-2xl text-white/80 text-center mb-12">
          Experience task management at its finest
        </p>

        {/* Buttons with premium effects */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="/signup"
            className="btn-premium text-white px-8 py-4 rounded-xl text-lg font-bold text-center hover-lift"
          >
            Get Started Free
          </a>
          <a
            href="/login"
            className="glass-dark text-white px-8 py-4 rounded-xl text-lg font-bold text-center hover-lift border border-white/30"
          >
            Sign In
          </a>
        </div>

        {/* Features with icons */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6">
          <div className="text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 rounded-full bg-gradient-accent shadow-glow-blue flex items-center justify-center hover-scale">
              <span className="text-2xl sm:text-3xl">⚡</span>
            </div>
            <p className="text-white/70 text-xs sm:text-sm font-semibold">Lightning Fast</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 rounded-full bg-gradient-secondary shadow-glow-pink flex items-center justify-center hover-scale">
              <span className="text-2xl sm:text-3xl">🎨</span>
            </div>
            <p className="text-white/70 text-xs sm:text-sm font-semibold">Beautiful UI</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 rounded-full bg-gradient-primary shadow-glow-purple flex items-center justify-center hover-scale">
              <span className="text-2xl sm:text-3xl">🔒</span>
            </div>
            <p className="text-white/70 text-xs sm:text-sm font-semibold">Secure</p>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 text-sm">
        Made with ✨ by you
      </div>
    </main>
  )
}
