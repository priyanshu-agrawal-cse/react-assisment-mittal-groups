// src/components/HeaderHero.jsx
export default function HeaderHero() {
  return (
    <section className="relative w-full min-h-screen bg-[#0A0A0A] text-white overflow-hidden">

      {/* ===== Gradient Blur Background ===== */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1500px] h-[800px] bg-blue-700 blur-[100px] opacity-70" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1500px] h-[800px] bg-green-700 blur-[225px] opacity-60" />

      {/* ===== Main Container ===== */}
      <div className="relative max-w-[1280px] mx-auto px-[100px]">

        {/* ===== HEADER ===== */}
        <header className="flex justify-between items-center py-[42px] border-b border-white/20">
          
          {/* Logo */}
          <div className="flex items-center gap-4 font-serif">
            <span className="text-xl italic font-semibold">I.T.L</span>
            <span className="text-sm leading-tight">
              Institute for <br /> Trusted Leadership
            </span>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex gap-[42px] font-serif text-[16px] text-white/60">
            <a className="text-white">The Institute</a>
            <a>Our Approach</a>
            <a>Ecosystem</a>
            <a>Insights</a>
            <a>Contact Us</a>
          </nav>
        </header>

        {/* ===== HERO CONTENT ===== */}
        <div className="flex flex-col gap-[125px] py-[100px]">

          {/* Top Content */}
          <div className="flex flex-col gap-[12px]">
            
            {/* Label */}
            <div className="flex items-center gap-2 text-sm font-medium tracking-wide">
              <span className="w-[10px] h-[10px] bg-white block" />
              BUILT ON SOLID GROUND
            </div>

            {/* Heading */}
            <h1 className="font-serif text-[54px] leading-[58px] max-w-[1080px]">
              Building Leaders – <span className="italic">the</span> World Can Trust.
            </h1>

            {/* Right aligned text */}
            <div className="flex justify-end">
              <p className="max-w-[470px] text-[20px] leading-[26px] text-right text-white">
                Where purpose meets people. Where organizations transform through
                trusted leadership, continuous learning, & human responsibility.
              </p>
            </div>
          </div>

          {/* ===== HERO FOOT ===== */}
          <div className="flex justify-between items-center border-t border-white/30 pt-[42px]">
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
