

const PublicFooter =()=>{

  return (
    <footer className="w-full bg-[#f7f7f7] text-gray-800 border-t border-gray-200 ">
      {/* Max-width container for 2K/4K scaling */}
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-20 2xl:px-32 py-12">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Logo, Description & Socials (Takes up 2 columns on medium+ screens) */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {/* Logo */}
            <div className="flex items-center gap-1.5 cursor-pointer w-fit">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-900">
                <path d="M16 4C11.5817 4 8 7.58172 8 12C8 14.5028 9.14959 16.7356 10.9631 18.2255L14.733 24.3146C15.2678 25.1784 16.5161 25.2014 17.0818 24.3582L21.218 18.1925C22.9557 16.6575 24 14.4447 24 12C24 7.58172 20.4183 4 16 4ZM16 15C14.3431 15 13 13.6569 13 12C13 10.3431 14.3431 9 16 9C17.6569 9 19 10.3431 19 12C19 13.6569 17.6569 15 16 15Z" fill="currentColor"/>
                <path d="M24 10.5C24.8284 10.5 25.5 9.82843 25.5 9C25.5 8.17157 24.8284 7.5 24 7.5C23.1716 7.5 22.5 8.17157 22.5 9C22.5 9.82843 23.1716 10.5 24 10.5Z" fill="currentColor"/>
                <path d="M8 24.5C8.82843 24.5 9.5 23.8284 9.5 23C9.5 22.1716 8.82843 21.5 8 21.5C7.17157 21.5 6.5 22.1716 6.5 23C6.5 23.8284 7.17157 24.5 8 24.5Z" fill="currentColor"/>
              </svg>
              <span className="text-gray-900 text-lg font-bold tracking-tight">StayHub</span>
            </div>
            
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
              Empowering your journeys with unique stays and seamless booking experiences worldwide.
            </p>
            
            {/* Social / Action Icons */}
            <div className="flex items-center gap-4 mt-2">
              <button className="text-gray-500 hover:text-gray-900 transition-colors">
                <img src="/home/earth.svg" alt="" />
              </button>
              <button className="text-gray-500 hover:text-gray-900 transition-colors">
                <img src="/home/share.svg" alt="" />
              </button>
            </div>
          </div>

          {/* Column 2: Support */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-gray-900">Support</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 hover:underline transition-all">Help Center</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 hover:underline transition-all">Safety information</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 hover:underline transition-all">Cancellation options</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-gray-900">Company</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 hover:underline transition-all">About us</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 hover:underline transition-all">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 hover:underline transition-all">Investors</a></li>
            </ul>
          </div>

        </div>

        {/* Divider - Thoda sa pinkish/reddish tint jaisa image mein dikh raha hai */}
        <hr className="my-8 border-t border-[#C6003D]/20" />

        {/* Bottom Section */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
          
          {/* Copyright & Legal Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-sm text-gray-500">
            <span>© 2024 StayHub, Inc.</span>
            <span className="hidden sm:inline">·</span>
            <a href="#" className="hover:underline hover:text-gray-900">Privacy</a>
            <span className="hidden sm:inline">·</span>
            <a href="#" className="hover:underline hover:text-gray-900">Terms</a>
            <span className="hidden sm:inline">·</span>
            <a href="#" className="hover:underline hover:text-gray-900">Sitemap</a>
          </div>

          {/* Language & Currency Selection */}
          <div className="flex items-center gap-6 font-medium text-sm text-gray-900">
            <button className="flex items-center gap-2 hover:underline">
              <img src="/home/crossearth" alt="" />
              <span>English (US)</span>
            </button>
            <button className="flex items-center gap-1.5 hover:underline">
              <span className="text-lg font-semibold">$</span>
              <span>USD</span>
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
    
}

export default PublicFooter