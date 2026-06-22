export default function ListingFooter() {
  return (
    <footer className="mt-12 border-t border-[#DDDDDD] bg-[#F7F7F7]">
      <div className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h4 className="text-[16px] font-bold text-[#222222]">StayHub</h4>
            <p className="mt-2 text-sm text-[#717171]">© 2024 StayHub, Inc.</p>
          </div>
          <div>
            <ul className="space-y-2 text-sm text-[#717171]">
              <li><a href="#" className="hover:text-[#222222]">Privacy</a></li>
              <li><a href="#" className="hover:text-[#222222]">Terms</a></li>
              <li><a href="#" className="hover:text-[#222222]">Sitemap</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 text-sm text-[#717171]">
              <li><a href="#" className="hover:text-[#222222]">Company details</a></li>
              <li><a href="#" className="hover:text-[#222222]">Destinations</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
