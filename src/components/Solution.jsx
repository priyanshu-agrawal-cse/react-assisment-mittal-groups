export default function Solution() {
  return (
    <section className="relative w-full bg-[#0A0A0A] text-white py-[150px]">

      {/* ===== HEADING ===== */}
      <div className="max-w-[720px] mx-auto text-center flex flex-col gap-[20px]">

        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <span className="w-[12px] h-[12px] bg-gray-300 block" />
          THE SOLUTION
        </div>

        <h2 className="font-serif italic text-[54px] leading-[58px] text-white/60">
          This is Why We Exist
        </h2>

        <p className="text-[20px] leading-[26px] text-white/60">
          Trust transforms everything—engagement, innovation, performance, &
          culture. The Institute of Trusted Leadership scales this impact through
          research-backed methods, turning trusted leadership into the global
          standard.
        </p>
      </div>

      {/* ===== 3 PILLARS ===== */}
      <div className="relative max-w-[1080px] mx-auto mt-[118px] grid grid-cols-1 md:grid-cols-3 gap-[118px]">

        {/* ===== COLUMN 1 ===== */}
        <div className="relative text-left">
          <span className="absolute -left-[90px] bottom-0 text-[128px] font-serif bg-gradient-to-tr from-transparent to-white bg-clip-text text-transparent">
            1
          </span>

          <h3 className="font-serif text-[28px] leading-[36px] mb-2">
            ITL Approach
          </h3>

          <p className="text-[16px] leading-[21px] text-white/40">
            Evidence-based methodology combining research, training, and
            consulting to build trusted leaders.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block absolute left-1/3 top-0 h-full w-px bg-white/20" />

        {/* ===== COLUMN 2 ===== */}
        <div className="relative text-left">
          <span className="absolute -left-[90px] bottom-0 text-[128px] font-serif bg-gradient-to-tr from-transparent to-white bg-clip-text text-transparent">
            2
          </span>

          <h3 className="font-serif text-[28px] leading-[36px] mb-2">
            Our Ecosystem
          </h3>

          <p className="text-[16px] leading-[21px] text-white/40">
            Four integrated divisions delivering comprehensive leadership
            solutions from awareness to transformation.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block absolute left-2/3 top-0 h-full w-px bg-white/20" />

        {/* ===== COLUMN 3 ===== */}
        <div className="relative text-left">
          <span className="absolute -left-[90px] bottom-0 text-[128px] font-serif bg-gradient-to-tr from-transparent to-white bg-clip-text text-transparent">
            3
          </span>

          <h3 className="font-serif text-[28px] leading-[36px] mb-2">
            Global Impact
          </h3>

          <p className="text-[16px] leading-[21px] text-white/40">
            UN SDG-aligned programs ensuring every initiative creates measurable
            social value.
          </p>
        </div>

      </div>
    </section>
  );
}
