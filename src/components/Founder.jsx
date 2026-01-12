export default function Founder() {
  return (
    <section className="relative w-full bg-[#0A0A0A] text-white overflow-hidden">

      {/* Container */}
      <div className="relative max-w-[1280px] mx-auto">

        {/* ===== TOP GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* LEFT TOP */}
          <div className="px-[100px] py-[100px] flex flex-col gap-[12px]">
            <div className="flex items-center gap-2 text-sm font-medium">
              <span className="w-[10px] h-[10px] bg-white block" />
              MEET OUR FOUNDER
            </div>

            <h2 className="font-serif text-[54px] leading-[58px]">
              Leslie Martinich
            </h2>
          </div>

          {/* RIGHT TOP IMAGE */}
          <div className="relative h-[600px]">
            <img
              src="/image1.png"
              alt="Leslie Martinich"
              className="w-full h-full object-cover"
            />
          </div>

          {/* LEFT BOTTOM DESCRIPTION */}
          <div className="px-[100px] py-[60px] bg-white/5 backdrop-blur-md">
            <p className="text-[20px] leading-[26px] max-w-[440px]">
              Leslie Martinich is a leadership expert with 20+ years of experience
              who founded the Institute of Trusted Leadership to address the
              global crisis of trust in organizations.
              <br /><br />
              Through evidence-based, practical approaches, her work develops
              leaders, transforms cultures, and scales trusted leadership
              worldwide.
            </p>
          </div>

          {/* RIGHT BOTTOM CTA */}
          <div className="relative flex items-center justify-start px-[42px]">
            <a className="flex items-center gap-2 font-serif text-[42px] cursor-pointer hover:opacity-80">
              Meet Leslie <span>↗</span>
            </a>
          </div>

        </div>

        {/* ===== STEP INDICATOR ===== */}
        <div className="border-t border-white/30 py-[24px] flex justify-center">
          <div className="flex items-center gap-4 text-white">

            <span className="text-[24px]">01</span>

            <div className="flex flex-col gap-2">
              <div className="w-[200px] border-t-4 border-dashed border-white/30" />
              <div className="w-[200px] border-t-4 border-dashed border-white/30" />
            </div>

            <span className="text-[24px] text-white/60">02</span>

            <div className="flex flex-col gap-2">
              <div className="w-[200px] border-t-4 border-dashed border-white/30" />
              <div className="w-[200px] border-t-4 border-dashed border-white/30" />
            </div>

            <span className="text-[24px] text-white/60">03</span>

          </div>
        </div>

      </div>
    </section>
  );
}
