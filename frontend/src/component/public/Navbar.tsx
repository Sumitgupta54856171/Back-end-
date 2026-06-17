import  {Link} from 'react-router-dom'
import PublicFooter from './Footer'


const PublicNavbar = ({children})=>{
     return (<>
  <div className="">
   
      <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
        
    
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-20 2xl:px-32 flex items-center justify-between h-[80px]">

          
          <div className="flex items-center gap-1.5 cursor-pointer min-w-[150px]">
            {/* Custom Logo SVG mimicking the StayHub icon */}
            <img src="/home/StayHub.svg" alt="" />
            <span className="text-[#C6003D] text-xl font-bold tracking-tight hidden sm:block">StayHub</span>
          </div>

       
          <div className="hidden md:flex items-center border border-gray-300 rounded-full py-2 px-2  hover:shadow-md transition-shadow duration-200 cursor-pointer max-w-full shadow-2xl">
            <button className=" font-medium px-4 text-[#1B1C1C] hover:text-black">Anywhere</button>
            <span className="w-[1px] h-6 bg-gray-300"></span>
            <button className=" font-medium px-4 text-[#1B1C1C] hover:text-black">Any week</button>
            <span className="w-[1px] h-6 bg-gray-300"></span>
            <div className="flex items-center pl-4 pr-1 gap-3">
              <span className="font-light text-[#5F5E5E] whitespace-nowrap font-normal">Add guests</span>
              <button className="bg-[#C6003D] text-white p-2 rounded-full hover:bg-[#a10032] transition-colors">
             
              </button>
            </div>
          </div>

          
          <div className="flex items-center justify-end gap-2 sm:gap-4 min-w-[150px]">
            
            <div className="hidden lg:flex items-center gap-2 mr-2">
              <div className="relative flex flex-col items-center group cursor-pointer text-black">
                <span className="text-sm font-semibold">Explore</span>
               
              </div>
              <div className="text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-100 px-2 py-2 rounded-full transition-colors cursor-pointer">
                <Link to='/wish'>Wishlists</Link>
              </div>
              <div className="text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-100 px-2 py-2 rounded-full transition-colors cursor-pointer">
                Trips
              </div>
              <div className="text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-100 px-2 py-2 rounded-full transition-colors cursor-pointer">
                Inbox
              </div>
            </div>

            {/* Globe Icon Button */}
            <button className="p-3 hover:bg-gray-100 rounded-full transition-colors hidden sm:flex items-center justify-center">
             
            </button>

            {/* User Profile Menu */}
            <button className="flex items-center gap-3 border border-gray-300 rounded-full py-1.5 px-2 pl-3 hover:shadow-md transition-shadow bg-white ml-2">
              
            </button>
          </div>

        </div>
      </nav>
      {children}
      <main className="max-w-[2560px] bottom-0">
      <PublicFooter/>
      </main>
    </div>
     </>
     )
}
export default PublicNavbar;
