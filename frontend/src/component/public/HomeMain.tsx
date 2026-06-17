import { categoriesData } from "./publicdata/data";
import { useState } from "react";

const HomeMain = ()=>{
    const [activeCategory, setActiveCategory] = useState('Amazing views');

    return (<>
    <div className="grid grid-cols-1 grid-rows-2 w-full h-[1200px]">
        <div className="h-[600px] bg-red-500">
              
        </div>
        <div className="border-2 h-[600px] bg-white justify-center">
            <div className="max-w-[2560px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-20 2xl:px-32 pt-6">
      
      {/* Horizontal Scroll Container (Scrollbar hidden) */}
      <div className="flex items-center gap-8 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        
        {categoriesData.map((category) => {
          const isActive = activeCategory === category.label;
          
          return (
            <div
              key={category.label}
              onClick={() => setActiveCategory(category.label)}
              className={`flex flex-col items-center justify-center gap-2 min-w-max cursor-pointer pb-3 border-b-2 transition-all duration-200 outline-none ${
                isActive
                  ? 'border-[#C6003D] text-black' // Active state: Black text & Red bottom border
                  : 'border-transparent text-gray-500 hover:text-black hover:border-gray-300' // Inactive state: Grey text, hover par change
              }`}
            >
              {/* Icon */}
              <img 
                src={category.icon} 
                alt={category.label} 
                className={`w-6 h-6 transition-opacity duration-200 ${
                  isActive ? 'opacity-100' : 'opacity-60' 
                }`} 
              />
              
              {/* Label */}
              <span className={`text-sm ${isActive ? 'font-semibold' : 'font-medium'}`}>
                {category.label}
              </span>
            </div>
          );
        })}
        
      </div>
    </div>

        </div>
      
    </div>
    
    </>)
}

export default HomeMain;