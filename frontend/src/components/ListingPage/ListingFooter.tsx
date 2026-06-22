export default function ListingFooter() {
  return (
    <footer className="mt-12 border-t border-[#e3e2e2] bg-[#f5f3f3]">
      <div className="mx-auto max-w-[1280px] px-6 py-8 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h4 className="text-[16px] font-bold text-[#1b1c1c]">StayHub</h4>
            <p className="mt-2 text-[14px] text-[#5f5e5e]">© 2024 StayHub, Inc.</p>
          </div>
          <div>
            <ul className="space-y-2 text-[14px] text-[#5f5e5e]">
              <li><a href="#" className="hover:text-[#1b1c1c]">Privacy</a></li>
              <li><a href="#" className="hover:text-[#1b1c1c]">Terms</a></li>
              <li><a href="#" className="hover:text-[#1b1c1c]">Sitemap</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 text-[14px] text-[#5f5e5e]">
              <li><a href="#" className="hover:text-[#1b1c1c]">Company details</a></li>
              <li><a href="#" className="hover:text-[#1b1c1c]">Destinations</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
