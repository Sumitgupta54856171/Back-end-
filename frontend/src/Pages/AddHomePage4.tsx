import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Amenity {
  id: string;
  name: string;
  icon: string;
  selected: boolean;
}

interface AmenityCategory {
  category: string;
  icon: string;
  items: Amenity[];
}

const AddHomePage4: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
  const [amenities, setAmenities] = useState<AmenityCategory[]>([
    {
      category: 'Essentials',
      icon: 'star',
      items: [
        { id: 'wifi', name: 'WiFi', icon: 'wifi', selected: true },
        { id: 'ac', name: 'Air conditioning', icon: 'ac_unit', selected: true },
        { id: 'heating', name: 'Heating', icon: 'heat_pump', selected: true },
      ]
    },
    {
      category: 'Featured',
      icon: 'hotel_class',
      items: [
        { id: 'kitchen', name: 'Kitchen', icon: 'kitchen', selected: true },
        { id: 'parking', name: 'Free parking', icon: 'local_parking', selected: false },
        { id: 'pool', name: 'Pool', icon: 'pool', selected: false },
      ]
    }
  ]);

  const toggleAmenity = (categoryId: string, itemId: string) => {
    setAmenities(prev => prev.map(cat => 
      cat.category === categoryId 
        ? { ...cat, items: cat.items.map(item => item.id === itemId ? { ...item, selected: !item.selected } : item) }
        : cat
    ));
  };

  const totalSelected = amenities.reduce((acc, cat) => acc + cat.items.filter(i => i.selected).length, 0);
  const totalAmenities = amenities.reduce((acc, cat) => acc + cat.items.length, 0);
  const progressPercent = totalAmenities > 0 ? (totalSelected / totalAmenities) * 100 : 0;

  return (
    <>
      <div className="mb-6 sm:mb-10">
        <h1 className="text-3xl sm:text-4xl font-headline font-bold tracking-tight text-on-surface mb-2">What amenities do you offer?</h1>
        <p className="text-secondary text-base sm:text-lg">Guests look for these essential amenities when choosing a place to stay.</p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <span className="material-symbols-outlined">analytics</span>
          </div>
          <div>
            <p className="font-semibold text-on-surface">{totalSelected} amenities selected</p>
            <p className="text-sm text-secondary">out of {totalAmenities}+ available options</p>
          </div>
        </div>
        <div className="w-full sm:w-1/3 sm:max-w-xs h-2 bg-surface-container-highest rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${progressPercent}%` }}></div>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-6 sm:mb-10">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <span className="material-symbols-outlined text-secondary">search</span>
        </div>
        <input 
          className="block w-full pl-12 pr-4 py-3 sm:py-4 bg-surface-container-lowest border border-outline-variant rounded-xl text-on-surface placeholder-secondary focus:ring-2 focus:ring-primary focus:border-primary transition-all text-base sm:text-lg shadow-sm" 
          placeholder="Search amenities..." 
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Amenities Categories */}
      <div className="space-y-8 sm:space-y-12">
        {amenities.map((cat, catIdx) => (
          <section key={catIdx}>
            <h3 className="text-lg sm:text-xl font-headline font-semibold mb-4 sm:mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">{cat.icon}</span>
              {cat.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {cat.items.map((item) => (
                <label key={item.id} className="cursor-pointer group relative">
                  <input 
                    type="checkbox" 
                    className="peer sr-only" 
                    checked={item.selected}
                    onChange={() => toggleAmenity(cat.category, item.id)}
                  />
                  <div className={`h-full p-4 sm:p-5 border-2 rounded-xl flex flex-col items-start gap-3 sm:gap-4 transition-all hover:shadow-md ${
                    item.selected 
                      ? 'border-primary bg-primary/5' 
                      : 'border-outline-variant bg-surface-container-lowest hover:border-secondary'
                  }`}>
                    <span className={`material-symbols-outlined text-2xl sm:text-3xl ${item.selected ? 'text-primary' : 'text-secondary group-hover:text-on-surface'}`} style={item.selected ? { fontVariationSettings: "'FILL' 1" } : {}}>
                      {item.icon}
                    </span>
                    <span className={`font-medium ${item.selected ? 'text-on-surface' : 'text-secondary group-hover:text-on-surface'}`}>
                      {item.name}
                    </span>
                    <div className={`absolute top-3 sm:top-4 right-3 sm:right-4 text-primary transition-opacity ${item.selected ? 'opacity-100' : 'opacity-0'}`}>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </section>
        ))}

        <div className="pt-6 border-t border-outline-variant/50 flex justify-center">
          <button className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-outline-variant text-on-surface hover:bg-surface-container-low transition-colors font-semibold text-sm sm:text-base">
            <span className="material-symbols-outlined">add</span>
            Add custom amenity
          </button>
        </div>
      </div>

      {/* BottomNavBar */}
      <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 md:px-20 bg-surface border-t border-outline-variant shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] lg:pl-[22rem]">
        <button 
          onClick={() => navigate('/add-homepage-3')}
          className="text-secondary font-medium px-3 sm:px-4 py-2 hover:bg-surface-container-low rounded-lg transition-all flex items-center gap-1 sm:gap-2"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          <span className="font-label hidden sm:inline">Back</span>
        </button>
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="text-secondary font-medium px-3 sm:px-4 py-2 hover:bg-surface-container-low rounded-lg transition-all flex items-center gap-1 sm:gap-2">
            <span className="material-symbols-outlined text-lg">save</span>
            <span className="font-label hidden sm:inline">Save as draft</span>
          </button>
          <button 
            onClick={() => navigate('/add-homepage-6')}
            className="bg-primary text-on-primary rounded-lg sm:rounded-xl px-6 sm:px-8 py-2.5 sm:py-3 font-bold font-label text-sm sm:text-base hover:bg-primary/90 transition-all active:scale-95 flex items-center gap-2 shadow-sm"
          >
            <span>Continue</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </div>
      </footer>
    </>
  );
};

export default AddHomePage4;
