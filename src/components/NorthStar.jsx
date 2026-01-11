export default function NorthStar() {
  return (
    <section className="relative w-full bg-[#0A0A0A] text-white overflow-hidden py-[100px]">

      {/* Background Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1500px] h-[800px] bg-blue-700 blur-[100px] opacity-60" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1500px] h-[800px] bg-green-700 blur-[225px] opacity-60" />

      {/* Container */}
      <div className="relative max-w-[1280px] mx-auto px-[100px] grid grid-cols-1 md:grid-cols-2 gap-[84px] items-center">

        {/* ===== LEFT: COMPASS ===== */}
        <div className="relative w-[451px] h-[444px]">

          {/* Dashed Circle */}
          <div className="absolute inset-0 rounded-full border border-dashed border-white/50 bg-white/5 shadow-[0_4px_100px_rgba(255,255,255,0.1)]" />

          {/* Center Star */}
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[156px] h-[156px] bg-white rounded-sm shadow-[0_0_42px_rgba(255,255,255,0.16),0_0_150px_rgba(255,255,255,0.64)]" />
{/* Eye Icon */}
<div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[88px] h-[88px] rounded-full bg-blue-500/60 backdrop-blur-md flex items-center justify-center border border-blue-400 shadow-lg">
  <span className="text-[40px]">👁️</span>
</div>

{/* Target Icon */}
<div className="absolute bottom-[20px] left-[30px] w-[96px] h-[96px] rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center">
  <span className="text-[42px]">🎯</span>
</div>

{/* Trophy Icon */}
<div className="absolute bottom-[20px] right-[30px] w-[96px] h-[96px] rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center">
  <span className="text-[42px]">🏆</span>
</div>


        </div>

        {/* ===== RIGHT: CONTENT ===== */}
        <div className="flex flex-col gap-[32px] max-w-[525px]">

          {/* Label */}
          <div className="flex items-center gap-2 text-sm font-medium tracking-wide">
            <span className="w-[10px] h-[10px] bg-white block" />
            WHAT DRIVES US
          </div>

          {/* Heading */}
          <h2 className="font-serif text-[54px] leading-[58px]">
            Our North Star
          </h2>

          {/* Vision */}
          <div className="flex flex-col gap-[6px]">
            <span className="font-serif italic text-[32px] leading-[42px]">
              Vision
            </span>
            <p className="text-[20px] leading-[26px] text-white/40">
              A world in which organizations are led by trust and committed to
              the continuous development of people and purpose.
            </p>
          </div>

          {/* Progress */}
          <div className="flex items-center gap-3 mt-4">
            <span className="font-serif text-sm">1/3</span>
            <div className="relative w-[100px] h-[2px] bg-white/20">
              <div className="absolute left-0 top-0 h-full w-1/3 bg-blue-500" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
