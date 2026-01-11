export default function Methodology() {
  return (
    <section className="relative w-full bg-[#00264D] text-white py-[150px]">

      <div className="max-w-[1280px] mx-auto px-[100px] flex flex-col gap-[175px]">

        {/* ===== TOP CONTENT ===== */}
        <div className="flex flex-col md:flex-row gap-[6px] items-end">

          {/* Left */}
          <div className="max-w-[532px] flex flex-col gap-[16px]">
            <div className="flex items-center gap-2 text-sm font-medium">
              <span className="w-[12px] h-[12px] bg-gray-300 block" />
              OUR METHODOLOGY
            </div>

            <h2 className="font-serif text-[54px] leading-[58px]">
              How We Transform Leadership
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-[532px] pt-[60px]">
            <p className="text-[20px] leading-[26px]">
              Trusted leadership isn&apos;t built on theory alone. Our integrated
              approach combines rigorous research and practical training to
              create lasting organizational change.
            </p>
          </div>
        </div>

        {/* ===== STACKED PANELS ===== */}
        <div className="relative flex justify-between items-start gap-[200px]">

          {/* Panel 1 */}
          <div className="relative w-[299px] h-[673px]">
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent" />
            <div className="absolute top-0 left-[182px]">
              <h3 className="font-serif text-[28px] leading-[36px] mb-4">
                Research & Insights
              </h3>
              <p className="text-[14px] leading-[18px]">
                Evidence-based leadership models<br />
                Continuous innovation<br />
                Data-driven understanding
              </p>
            </div>
          </div>

          {/* Panel 2 */}
          <div className="relative w-[369px] h-[460px] mt-[106px]">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />
            <div className="absolute top-0 left-[182px]">
              <h3 className="font-serif text-[28px] leading-[36px] mb-4">
                Training & Development
              </h3>
              <p className="text-[14px] leading-[18px]">
                Practical skill-building<br />
                Certification programs<br />
                Organizational transformation
              </p>
            </div>
          </div>

          {/* Panel 3 */}
          <div className="relative w-[429px] h-[247px] mt-[213px]">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
            <div className="absolute top-0 left-[182px]">
              <h3 className="font-serif text-[28px] leading-[36px] mb-4">
                Consulting & Implementation
              </h3>
              <p className="text-[14px] leading-[18px]">
                Strategic partnership<br />
                Custom solutions<br />
                Measurable impact
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
