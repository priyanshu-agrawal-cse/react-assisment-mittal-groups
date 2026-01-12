export default function HeaderHero() {
  return (
    <section className="relative w-full h-screen text-white overflow-hidden bg-gradient-to-br from-[#0E3B43] via-[#0E5C63] to-[#062B2F]">

      {/* Gradient Blur Background */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1600px] h-[900px] bg-blue-700 blur-[120px] opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1600px] h-[900px] bg-green-700 blur-[260px] opacity-50" />

      {/* Main Container */}
      <div className="relative max-w-[80rem] mx-auto px-[24px] md:px-[60px] lg:px-[100px] h-full flex flex-col">

        {/* ===== HEADER ===== */}
        <header className="flex justify-between items-center py-[42px] border-b border-white/20">
          {/* Logo */}
          <div className="flex items-center gap-4 font-serif">
            <span className="text-xl italic font-semibold">I.T.L</span>
            <span className="text-sm leading-tight">
              Institute for <br /> Trusted Leadership
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-[42px] font-serif text-[16px] text-white/60">
            <a className="text-white">The Institute</a>
            <a>Our Approach</a>
            <a>Ecosystem</a>
            <a>Insights</a>
            <a>Contact Us</a>
          </nav>
        </header>

        {/* ===== HERO BODY ===== */}
        <div className="flex-1 pt-[64px] relative">

          {/* Label */}
          <div className="flex items-center gap-2 text-sm font-medium tracking-wide mb-[16px]">
            <span className="w-[10px] h-[10px] bg-white block" />
            BUILT ON SOLID GROUND
          </div>

          {/* ===== RESPONSIVE HERO CONTENT ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-[32px] lg:gap-[0px]">

            {/* LEFT: Heading */}
            <h1 className="font-serif text-[40px] mt-[7rem] sm:text-[48px] lg:text-[54px] leading-[1.1] max-w-[540px]">
              Building Leaders –{" "}
              <span className="italic opacity-80">the</span> World Can Trust.
            </h1>

            {/* RIGHT: Description */}
            <p className="
              max-w-[470px]
              text-[18px]
              sm:text-[20px]
              leading-[26px]
              text-white/90
              text-left
              lg:text-right
              lg:justify-self-end
              mt-[9rem] 
            ">
              Where purpose meets people. Where organizations transform through
              trusted leadership, continuous learning, & human responsibility.
            </p>

          </div>

          {/* ===== SCROLL INDICATOR ===== */}
          <div className="absolute bottom-[32px] left-0 w-full flex justify-between items-center border-t border-white/30 pt-[24px]">
            <span className="font-serif text-[16px]">
              Scroll to Discover
            </span>
            <span className="text-xl">↓</span>
          </div>

        </div>
      </div>
    </section>
  );
}
