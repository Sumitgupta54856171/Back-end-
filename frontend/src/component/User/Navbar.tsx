import { useState } from 'react';
import LocationSelector from './LocationSelector';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [location, setLocation] = useState({
    country: '',
    state: '',
    city: ''
  });

  const handleLocationSelect = (newLocation: {
    country: string;
    state: string;
    city: string;
  }) => {
    setLocation(newLocation);
    
  };

  return (
    <div className="bg-white font-sans text-[#181111]">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4f0f0] px-10 py-3 bg-white">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-[#181111] cursor-pointer">
            <div className="w-4 h-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-[#181111] text-lg font-bold leading-tight tracking-[-0.015em]">
              StayAway
            </h2>
          </div>
            </div>
          {/* Location Selector */}
          

        <div className="flex flex-1 justify-end gap-8 items-center">
          <div className="flex items-center gap-9 hidden md:flex">
            <a className="text-[#181111] text-sm font-medium leading-normal hover:text-gray-600 transition-colors cursor-pointer">
              Explore
            </a>
            <a className="text-[#181111] text-sm font-medium leading-normal hover:text-gray-600 transition-colors cursor-pointer">
                            Wishlists
                        </a>
                        <a className="text-[#181111] text-sm font-medium leading-normal hover:text-gray-600 transition-colors cursor-pointer">
                            Trips
                        </a>
                    </div>

                    {/* CTA Button */}
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#ea2a33] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#d9252d] transition-colors">
                        <span className="truncate">StayAway your home</span>
                    </button>

                    {/* Profile Image */}
                    <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 cursor-pointer border border-gray-200"
                        style={{
                            backgroundImage:
                                'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80")',
                        }}
                    ></div>
                </div>
            </header>
           
        </div>
    );
}