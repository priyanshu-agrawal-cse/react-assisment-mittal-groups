import image from "../assets/image.png";

export default function Pathways() {
  return (
    <section className="relative w-full bg-[#00264D] text-white py-[150px] overflow-hidden">

      {/* Background blur */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1500px] h-[800px] bg-blue-700 blur-[100px] opacity-60" />
      <div className="absolute left-1/2 -translate-x-1/2 top-[40px] w-[1500px] h-[800px] bg-green-700 blur-[225px] opacity-60" />

      <div className="relative max-w-[1280px] mx-auto px-[100px] flex flex-col gap-[100px]">

        {/* ===== HEADER ===== */}
        <div className="text-center max-w-[1080px] mx-auto flex flex-col gap-[28px]">
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <span className="w-[10px] h-[10px] bg-white block" />
            BUILT ON SOLID GROUND
          </div>

          <h2 className="font-serif text-[54px] leading-[58px]">
            One Vision. Four Pathways to Impact.
          </h2>

          <p className="max-w-[844px] mx-auto text-[20px] leading-[26px] text-white/90">
            The Institute of Trusted Leadership operates through an integrated
            ecosystem of specialized divisions, each designed to address
            different aspects of leadership development and organizational
            transformation.
          </p>
        </div>

        {/* ===== CONTENT ROW ===== */}
        <div className="flex gap-[24px] items-stretch justify-center">

          {/* ===== MAIN CARD (LEFT) ===== */}
          <div className="relative w-[572px] bg-black/60 border border-blue-500/30 rounded-[12px] p-[32px] flex flex-col gap-[16px]">

            {/* Badge */}
            <div className="absolute top-0 left-0 bg-blue-500/40 backdrop-blur-md px-4 py-2 rounded-br-[12px] text-xs uppercase flex items-center gap-2">
              <span className="w-[6px] h-[6px] bg-white block" />
              Open to All
            </div>

            {/* Image */}
            <div className="w-full h-[330px] rounded-[6px] overflow-hidden">
              <img
                src={image}
                alt="LUCA The Leader"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-serif text-[32px] leading-[36px]">
                  LUCA The Leader
                </h3>
                <p className="font-serif text-[20px] leading-[26px]">
                  Where Leadership Awareness Begins
                </p>
              </div>
              <span className="text-2xl">↗</span>
            </div>

            <p className="text-[14px] leading-[18px] text-white/40">
              Our flagship CSR initiative bringing trusted leadership awareness
              to communities, organizations, and emerging leaders. Start your
              journey with free resources, assessments, and community
              connection.
            </p>
          </div>

          {/* ===== RIGHT BLOCKS (3) ===== */}
          <div className="flex gap-[24px]">

            {/* Block 1 */}
            <div className="w-[148px] bg-black/60 rounded-[12px] relative flex items-center justify-center">
              <div className="absolute top-0 left-0 w-full h-[80px] bg-blue-500/30 px-4 flex items-center rounded-t-[12px]">
                <div className="flex items-center gap-2 text-xs uppercase">
                  <span className="w-[6px] h-[6px] bg-white block" />
                  For Organizations
                </div>
              </div>

              <div className="-rotate-90 text-center">
                <p className="font-serif text-[28px]">
                  Martinich Consulting
                </p>
                <p className="font-serif text-[20px]">
                  Strategic Leadership Partnerships
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="w-[144px] bg-black/60 rounded-[12px] flex items-center justify-center">
              <div className="-rotate-90 text-center">
                <p className="font-serif text-[28px]">
                  Martinich Institute
                </p>
                <p className="font-serif text-[20px]">
                  Learning That Transforms
                </p>
              </div>
            </div>

            {/* Block 3 */}
            <div className="w-[144px] bg-black/60 rounded-[12px] flex items-center justify-center">
              <div className="-rotate-90 text-center">
                <p className="font-serif text-[28px]">
                  Martinich R&amp;D
                </p>
                <p className="font-serif text-[20px]">
                  Innovation Meets Insight
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
