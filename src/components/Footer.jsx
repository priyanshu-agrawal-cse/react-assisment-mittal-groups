export default function Footer() {
  return (
    <footer className="w-full bg-[#0A0A0A] text-white">

      {/* Divider */}
      <div className="border-t border-white/30" />

      {/* Content */}
      <div className="max-w-[1280px] mx-auto px-[100px] py-[80px] flex flex-col gap-[48px]">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Brand */}
          <div className="font-serif">
            <h3 className="text-[24px] italic">I.T.L</h3>
            <p className="text-sm leading-tight text-white/60">
              Institute for <br /> Trusted Leadership
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-[42px] text-[16px] font-serif text-white/60">
            <a className="hover:text-white cursor-pointer">The Institute</a>
            <a className="hover:text-white cursor-pointer">Our Approach</a>
            <a className="hover:text-white cursor-pointer">Ecosystem</a>
            <a className="hover:text-white cursor-pointer">Insights</a>
            <a className="hover:text-white cursor-pointer">Contact Us</a>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between text-sm text-white/50">
          <span>© {new Date().getFullYear()} Institute for Trusted Leadership</span>
          <span>All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}
