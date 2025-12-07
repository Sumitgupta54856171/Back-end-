
import { useState, useCallback } from 'react';
import LocationSelector from './LocationSelector';

interface Listing {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
}

export default function HomeListings() {
  const [location, setLocation] = useState({
    country: '',
    state: '',
    city: ''
  });

  // Sample data with location information
  const listings: Listing[] = [
    {
      id: 1,
      title: "Cozy Cabin Retreat",
      subtitle: "Entire cabin · 2 beds",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2F27DbrxWnH0YZlRbNS2npfUGnBobqvAhwHLV0sppQ7IZk9AfndnLjPbTa0SuTbad6x-wnGaMsGdxzZ6waVbC3KlG3SiE1hLKPOTjD-cvO_-GtprUBut-aroidQgYbO3cSpTYfIFXHELYRS31gEPh3ePB--GrJTr7zCNLkSdqzh2NHuqBT992p_P3Q_ZY_b_k9V6jDAMYpOa-31_whgIBE1Jc1tJyEhCR4bewUi43eLPngJ72SxkNCiVSCJM0uXQaHcwuPIlZu9Od",
      location: {
        city: "Denver",
        state: "Colorado",
        country: "United States"
      }
    },
    {
      id: 2,
      title: "Modern City Apartment",
      subtitle: "Entire apartment · 1 bed",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhb9uhkeqTkF7-qk4FF8ZFJRwZYYukGfvZzPMXBQrwkZjOn6YlWdcUIxLX9nJ1ipCIHq_3h2ns9ysFsmS2aH6F4wx7PGiJD2upNmA9foIfiffCp6vSYEkBcPFzIydElsqJOAaCwsIkuWeT9g25CojuSHNo5D8wmyywbxr1wVRl7ytoPOGTDHWdjTeUgRKxxfz99KcK6NQn8ZSGqKE3QimMoHZf5NfsvWdv_k9brY2Kcna63vctRVC6XM4Rt5XT6CzqOAg5xeM1dMsC",
      location: {
        city: "New York",
        state: "New York",
        country: "United States"
      }
    },
    {
      id: 3,
      title: "Beachfront Villa Escape",
      subtitle: "Entire villa · 4 beds",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYVoAQOPfvklnmSrAyIZIie31qMuU9CMKy3AKqWNbbcXQo5QyOq1ayK3TxNR7XXbPSJjcFpSFhyc26ARtYCDDtwRQTjEMO_yiOlngjQsDENHAOkfXwcMjKuZ4ehJs8dnUnov85cI1Ab0KFi27NDhbvcVfEQioxHpMcaNZQRsFLXta1bzUIzHlI_NBTj9d90VYtVlxTsMBG5en8-_lplQm7pNs73hLt_4OCeph08h_cgoqfW_F5ZisuaYfjdtukxk4emDBcXdpJpzCO",
      location: {
        city: "Miami",
        state: "Florida",
        country: "United States"
      }
    },
    {
      id: 4,
      title: "Rustic Farmhouse Getaway",
      subtitle: "Entire farmhouse · 3 beds",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwTWX1o3DjKX9ahOAbxM8leSrWwieDtuEj9Bgy8Fkf9cBIbbmVqpdYOeCLr5C4qODpqCg0oBiFSvqaMZoWuM-VYNDeWAGqAnt2-0JbA9deUjZqZ4UKTKHWoFMHAovqoSO9qhZW2oiw6jBj8rEsefk9tYPuPx70RXSSsTXeH-UM5i43NlqZ-NcGV73HsZZY8nekEdVOKaq6Rw5ywxUST7hmBZGT4sorSuQlB6XRyIk7Pf2BN5VAl8w51GqTzgjFQfXXNCmlBn3uJqyu",
      location: {
        city: "Austin",
        state: "Texas",
        country: "United States"
      }
    },
    {
      id: 5,
      title: "Luxury Mountain Chalet",
      subtitle: "Entire chalet · 5 beds",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEQEMsKpX-AZoAOiIZ8GxxItw82u7o2Zm1TvO6FDrUCyiYMAu3RfEyK_UF8g382HC7JuqRMvpUKAYA-HpxAqtcqvmeccL85C8LLq-QIFrBYLRllMDg2v1smR3JxLDiIQMrKv6seK-RzsfW7vwnLhL9UcdopSavQ9HiQ4j4DcKDMy5QE6nRT4BAxcmRn0fpT781YrglFkaG4IDWBxefgSNAmoyHXgYcNEO9OQq8kNTWi2VOVJkXPFDJx5uLrV8EtGyZxhIGfVVax3Hv",
      location: {
        city: "Aspen",
        state: "Colorado",
        country: "United States"
      }
    },
    {
      id: 6,
      title: "Secluded Lakeside Cottage",
      subtitle: "Entire cottage · 2 beds",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1Wpin4egQDn9jTzVq_Hial-GH3tePZDS9bu2PTKuYK9D5BhVBeMH99xxT4wx4Ocisqt0KWqBWLkufpXLmPc1qgzwBM8DWHaHUpeI8S0VTAx0i6KRegvmMWxk-0f7t87N0KUtf7R0VxVWb4mzz3VNHfvItVIhNAanpVWD4sV3zJekRWCoPAiLYeviPHSLVltFkOGf2p2JaPecDzVclTWTZns2TTTZuK7dBcs0A03OoZXcgtVtxzp3MES6PPQ9gycvBEvinCJhD5Owx",
      location: {
        city: "Lake Tahoe",
        state: "California",
        country: "United States"
      }
    }
  ];

  // Filter listings based on selected location
  const filteredListings = listings.filter(listing => {
    if (!location.country && !location.state && !location.city) return true;
    
    return (
      (!location.country || listing.location.country.toLowerCase().includes(location.country.toLowerCase())) &&
      (!location.state || listing.location.state.toLowerCase().includes(location.state.toLowerCase())) &&
      (!location.city || listing.location.city.toLowerCase().includes(location.city.toLowerCase()))
    );
  });

  const handleLocationSelect = useCallback((newLocation: {
    country: string;
    state: string;
    city: string;
  }) => {
    setLocation(newLocation);
  }, []);

  return (
   
    <div className="flex flex-1 justify-center py-5 bg-white font-sans text-[#181111] top-20">
      <div className="flex flex-col max-w-[960px] flex-1 w-full">
        
        {/* Location Selector */}
        <div className="p-4 bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto">
            <LocationSelector onLocationSelect={handleLocationSelect} />
          </div>
        </div>

        {/* Location Info */}
        {location.city && (
          <div className="px-6 py-3 bg-gray-50">
            <h2 className="text-lg font-medium text-gray-800">
              {location.city ? `Stays in ${location.city}` : 'All Stays'}
              {location.state && `, ${location.state}`}
              {location.country && `, ${location.country}`}
            </h2>
            <p className="text-sm text-gray-600">
              {filteredListings.length} {filteredListings.length === 1 ? 'stay' : 'stays'} found
            </p>
          </div>
        )}

        {/* Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {filteredListings.length > 0 ? (
            filteredListings.map((item) => (
              <div key={item.id} className="flex flex-col gap-3 pb-3 cursor-pointer group">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ backgroundImage: `url("${item.image}")` }}
                ></div>
                <div>
                  <p className="text-[#181111] text-base font-medium leading-normal">
                    {item.title}
                  </p>
                  <p className="text-[#886364] text-sm font-normal leading-normal">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {item.location.city}, {item.location.state}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <h3 className="text-lg font-medium text-gray-900">No stays found</h3>
              <p className="mt-1 text-gray-500">
                Try adjusting your search or filters to find what you're looking for.
              </p>
            </div>
          )}
        </div>
        
      </div>
    
    </div>
  );
}