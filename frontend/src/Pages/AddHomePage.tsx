import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddHomePage: React.FC = () => {
  const navigate = useNavigate();
  const [propertyType, setPropertyType] = useState('house');
  const [spaceType, setSpaceType] = useState('entire');
  const [guestCount, setGuestCount] = useState(1);

  return (
    <>
      <div className="w-full flex flex-col gap-8 md:gap-12">
        {/* Headers */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-headline font-semibold tracking-tight text-on-surface">Tell us about your place</h1>
          <p className="text-base md:text-lg text-secondary font-body">Choose the property type and what guests will have access to</p>
        </div>

        {/* Section 1: Property Type */}
        <section aria-labelledby="property-type-heading" className="flex flex-col gap-4 md:gap-6">
          <h2 className="text-lg md:text-xl font-headline font-semibold" id="property-type-heading">What type of property do you have?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {/* Option 1 */}
            <label className="cursor-pointer group relative">
              <input 
                checked={propertyType === 'house'}
                onChange={() => setPropertyType('house')}
                className="sr-only peer" 
                name="property_type" 
                type="radio" 
                value="house"
              />
              <div className="border border-surface-variant rounded-xl p-4 md:p-6 flex flex-col items-start gap-3 md:gap-4 transition-all duration-200 peer-checked:border-[2px] peer-checked:border-on-surface peer-checked:bg-surface-container-lowest hover:border-on-surface bg-surface-container-lowest">
                <span className="material-symbols-outlined text-2xl md:text-3xl text-on-surface">house</span>
                <span className="font-label font-semibold text-sm md:text-base">House</span>
              </div>
            </label>
            {/* Option 2 */}
            <label className="cursor-pointer group relative">
              <input 
                checked={propertyType === 'apartment'}
                onChange={() => setPropertyType('apartment')}
                className="sr-only peer" 
                name="property_type" 
                type="radio" 
                value="apartment"
              />
              <div className="border border-surface-variant rounded-xl p-4 md:p-6 flex flex-col items-start gap-3 md:gap-4 transition-all duration-200 peer-checked:border-[2px] peer-checked:border-on-surface peer-checked:bg-surface-container-lowest hover:border-on-surface bg-surface-container-lowest">
                <span className="material-symbols-outlined text-2xl md:text-3xl text-on-surface">apartment</span>
                <span className="font-label font-semibold text-sm md:text-base">Apartment</span>
              </div>
            </label>
            {/* Option 3 */}
            <label className="cursor-pointer group relative">
              <input 
                checked={propertyType === 'condo'}
                onChange={() => setPropertyType('condo')}
                className="sr-only peer" 
                name="property_type" 
                type="radio" 
                value="condo"
              />
              <div className="border border-surface-variant rounded-xl p-4 md:p-6 flex flex-col items-start gap-3 md:gap-4 transition-all duration-200 peer-checked:border-[2px] peer-checked:border-on-surface peer-checked:bg-surface-container-lowest hover:border-on-surface bg-surface-container-lowest">
                <span className="material-symbols-outlined text-2xl md:text-3xl text-on-surface">domain</span>
                <span className="font-label font-semibold text-sm md:text-base">Condo</span>
              </div>
            </label>
            {/* Option 4 */}
            <label className="cursor-pointer group relative">
              <input 
                checked={propertyType === 'villa'}
                onChange={() => setPropertyType('villa')}
                className="sr-only peer" 
                name="property_type" 
                type="radio" 
                value="villa"
              />
              <div className="border border-surface-variant rounded-xl p-4 md:p-6 flex flex-col items-start gap-3 md:gap-4 transition-all duration-200 peer-checked:border-[2px] peer-checked:border-on-surface peer-checked:bg-surface-container-lowest hover:border-on-surface bg-surface-container-lowest">
                <span className="material-symbols-outlined text-2xl md:text-3xl text-on-surface">holiday_village</span>
                <span className="font-label font-semibold text-sm md:text-base">Villa</span>
              </div>
            </label>
            {/* Option 5 */}
            <label className="cursor-pointer group relative">
              <input 
                checked={propertyType === 'cabin'}
                onChange={() => setPropertyType('cabin')}
                className="sr-only peer" 
                name="property_type" 
                type="radio" 
                value="cabin"
              />
              <div className="border border-surface-variant rounded-xl p-4 md:p-6 flex flex-col items-start gap-3 md:gap-4 transition-all duration-200 peer-checked:border-[2px] peer-checked:border-on-surface peer-checked:bg-surface-container-lowest hover:border-on-surface bg-surface-container-lowest">
                <span className="material-symbols-outlined text-2xl md:text-3xl text-on-surface">cabin</span>
                <span className="font-label font-semibold text-sm md:text-base">Cabin</span>
              </div>
            </label>
            {/* Option 6 */}
            <label className="cursor-pointer group relative">
              <input 
                checked={propertyType === 'unique'}
                onChange={() => setPropertyType('unique')}
                className="sr-only peer" 
                name="property_type" 
                type="radio" 
                value="unique"
              />
              <div className="border border-surface-variant rounded-xl p-4 md:p-6 flex flex-col items-start gap-3 md:gap-4 transition-all duration-200 peer-checked:border-[2px] peer-checked:border-on-surface peer-checked:bg-surface-container-lowest hover:border-on-surface bg-surface-container-lowest">
                <span className="material-symbols-outlined text-2xl md:text-3xl text-on-surface">castle</span>
                <span className="font-label font-semibold text-sm md:text-base">Unique space</span>
              </div>
            </label>
          </div>
        </section>

        {/* Section 2: Space Access */}
        <section aria-labelledby="space-type-heading" className="flex flex-col gap-4 md:gap-6">
          <h2 className="text-lg md:text-xl font-headline font-semibold" id="space-type-heading">What best describes your place?</h2>
          <div className="flex flex-col gap-3 md:gap-4">
            {/* Option 1 */}
            <label className="cursor-pointer group relative">
              <input 
                checked={spaceType === 'entire'}
                onChange={() => setSpaceType('entire')}
                className="sr-only peer" 
                name="space_type" 
                type="radio" 
                value="entire"
              />
              <div className="border border-surface-variant rounded-xl p-4 md:p-6 flex items-center justify-between transition-all duration-200 peer-checked:border-[2px] peer-checked:border-on-surface peer-checked:bg-surface-container-low hover:border-on-surface bg-surface-container-lowest">
                <div className="flex flex-col gap-1 pr-4">
                  <span className="font-label font-semibold text-base md:text-lg">An entire place</span>
                  <span className="text-secondary text-xs md:text-sm">Guests have the whole place to themselves.</span>
                </div>
                <span className="material-symbols-outlined text-3xl md:text-4xl text-on-surface shrink-0">door_front</span>
              </div>
            </label>
            {/* Option 2 */}
            <label className="cursor-pointer group relative">
              <input 
                checked={spaceType === 'private'}
                onChange={() => setSpaceType('private')}
                className="sr-only peer" 
                name="space_type" 
                type="radio" 
                value="private"
              />
              <div className="border border-surface-variant rounded-xl p-4 md:p-6 flex items-center justify-between transition-all duration-200 peer-checked:border-[2px] peer-checked:border-on-surface peer-checked:bg-surface-container-low hover:border-on-surface bg-surface-container-lowest">
                <div className="flex flex-col gap-1 pr-4">
                  <span className="font-label font-semibold text-base md:text-lg">A private room</span>
                  <span className="text-secondary text-xs md:text-sm">Guests sleep in a private room but some areas may be shared.</span>
                </div>
                <span className="material-symbols-outlined text-3xl md:text-4xl text-on-surface shrink-0">meeting_room</span>
              </div>
            </label>
            {/* Option 3 */}
            <label className="cursor-pointer group relative">
              <input 
                checked={spaceType === 'shared'}
                onChange={() => setSpaceType('shared')}
                className="sr-only peer" 
                name="space_type" 
                type="radio" 
                value="shared"
              />
              <div className="border border-surface-variant rounded-xl p-4 md:p-6 flex items-center justify-between transition-all duration-200 peer-checked:border-[2px] peer-checked:border-on-surface peer-checked:bg-surface-container-low hover:border-on-surface bg-surface-container-lowest">
                <div className="flex flex-col gap-1 pr-4">
                  <span className="font-label font-semibold text-base md:text-lg">A shared room</span>
                  <span className="text-secondary text-xs md:text-sm">Guests sleep in a room or common area that may be shared.</span>
                </div>
                <span className="material-symbols-outlined text-3xl md:text-4xl text-on-surface shrink-0">chair</span>
              </div>
            </label>
          </div>
        </section>

        {/* Section 3: Capacity Stepper */}
        <section aria-labelledby="capacity-heading" className="flex flex-col gap-4 md:gap-6">
          <h2 className="text-lg md:text-xl font-headline font-semibold" id="capacity-heading">How many guests can your place accommodate?</h2>
          <div className="flex items-center justify-between py-4 md:py-6 border-b border-surface-variant">
            <span className="font-label font-semibold text-base md:text-lg">Guests</span>
            <div className="flex items-center gap-3 md:gap-4">
              <button 
                aria-label="Decrease guests" 
                className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-surface-variant flex items-center justify-center text-on-surface hover:border-on-surface transition-colors disabled:opacity-30 disabled:hover:border-surface-variant" 
                disabled={guestCount <= 1}
                onClick={() => setGuestCount(guestCount - 1)}
              >
                <span className="material-symbols-outlined text-lg md:text-xl">remove</span>
              </button>
              <span className="font-body text-base md:text-lg w-6 text-center">{guestCount}</span>
              <button 
                aria-label="Increase guests" 
                className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-surface-variant flex items-center justify-center text-on-surface hover:border-on-surface transition-colors" 
                onClick={() => setGuestCount(guestCount + 1)}
              >
                <span className="material-symbols-outlined text-lg md:text-xl">add</span>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Fixed Bottom Navigation (Transactional Layout) */}
      <footer className="fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-surface-variant py-3 md:py-4 px-4 md:px-6 z-50 lg:pl-[22rem]">
        <div className="max-w-[720px] mx-auto w-full flex items-center justify-between gap-3">
          <button className="px-4 md:px-6 py-3 rounded-xl font-label font-semibold text-on-surface hover:bg-surface-container-low transition-colors border border-transparent underline hover:border-surface-variant underline-offset-4 decoration-2 text-sm md:text-base">
            Back
          </button>
          <div className="flex items-center gap-2 md:gap-4">
            <button className="hidden md:block px-6 py-3 rounded-xl font-label font-semibold text-secondary hover:bg-surface-container-low transition-colors">
              Save as draft
            </button>
            <button 
              onClick={() => navigate('/add-homepage-2')}
              className="px-6 md:px-8 py-3 rounded-xl font-label font-semibold text-on-primary bg-primary hover:brightness-95 transition-all shadow-sm active:scale-[0.98] text-sm md:text-base">
              Continue
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AddHomePage;
