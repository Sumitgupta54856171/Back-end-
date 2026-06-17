import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddHomePage3: React.FC = () => {
  const navigate = useNavigate();

  const [guests, setGuests] = useState(4);
  const [bedrooms, setBedrooms] = useState(2);
  const [beds, setBeds] = useState(3);
  const [bathrooms, setBathrooms] = useState(1.5);

  const [highlights, setHighlights] = useState<string[]>([]);
  const toggleHighlight = (item: string) => {
    setHighlights(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const [showBedroomDetails, setShowBedroomDetails] = useState(false);

  const [bedroom1, setBedroom1] = useState({ double: 1, queen: 0 });
  const [bedroom2, setBedroom2] = useState({ single: 2 });

  const updateBedCounter = (
    bedroom: any,
    setBedroom: React.Dispatch<React.SetStateAction<any>>,
    key: string,
    change: number
  ) => {
    const newVal = bedroom[key] + change;
    if (newVal >= 0) {
      setBedroom({ ...bedroom, [key]: newVal });
    }
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col antialiased">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-4 sm:px-6 py-4 sm:py-6 max-w-[1280px] mx-auto sticky top-0 bg-surface z-50">
        <div className="text-xl sm:text-2xl font-extrabold text-primary tracking-tight font-headline cursor-pointer">StayHub</div>
        <button className="px-3 sm:px-4 py-2 rounded-full font-label text-xs sm:text-sm font-semibold hover:bg-surface-container-low transition-colors text-on-surface border border-surface-variant">Save &amp; exit</button>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center w-full px-4 sm:px-6 py-8 sm:py-12 lg:py-24 max-w-[640px] mx-auto pb-32">
        <div className="w-full space-y-8 sm:space-y-12">
          {/* Header Section */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-[28px] sm:text-[32px] md:text-[48px] font-bold leading-tight tracking-tight font-headline text-on-surface">Share some basics about your place</h1>
            <p className="text-[16px] sm:text-[18px] text-secondary font-body">Help guests know what to expect</p>
          </div>

          {/* Steppers Section */}
          <div className="space-y-4 sm:space-y-6 w-full pb-6 sm:pb-8 border-b border-surface-container-highest">
            <StepperRow label="Guests" value={guests} onChange={setGuests} min={1} max={16} step={1} />
            <StepperRow label="Bedrooms" value={bedrooms} onChange={setBedrooms} min={0} max={50} step={1} />
            <StepperRow label="Beds" value={beds} onChange={setBeds} min={1} max={50} step={1} />
            <StepperRow label="Bathrooms" value={bathrooms} onChange={setBathrooms} min={0} max={50} step={0.5} />
          </div>

          {/* Property Highlights */}
          <div className="space-y-4 sm:space-y-6 pb-6 sm:pb-8 border-b border-surface-container-highest">
            <h2 className="text-lg sm:text-xl font-bold font-headline">Property highlights</h2>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {['Kitchen', 'WiFi', 'Pool', 'Free parking', 'Air conditioning', 'Pets allowed'].map((item) => (
                <button
                  key={item}
                  onClick={() => toggleHighlight(item)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full border flex items-center space-x-2 text-xs sm:text-sm font-label font-semibold text-on-surface cursor-pointer transition-all duration-200 ${
                    highlights.includes(item)
                      ? 'border-on-surface bg-surface-container-highest'
                      : 'border-surface-dim bg-surface hover:border-on-surface'
                  }`}
                >
                  <span className="material-symbols-outlined text-base sm:text-lg">
                    {item === 'Kitchen' && 'kitchen'}
                    {item === 'WiFi' && 'wifi'}
                    {item === 'Pool' && 'pool'}
                    {item === 'Free parking' && 'directions_car'}
                    {item === 'Air conditioning' && 'ac_unit'}
                    {item === 'Pets allowed' && 'pets'}
                  </span>
                  <span>{item}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Expandable Bedroom Details */}
          <div className="space-y-4">
            <button
              className="w-full flex justify-between items-center py-3 sm:py-4 text-left group"
              onClick={() => setShowBedroomDetails(!showBedroomDetails)}
            >
              <span className="text-lg sm:text-xl font-bold font-headline text-on-surface group-hover:text-primary transition-colors">Bedroom details</span>
              <span
                className={`material-symbols-outlined text-on-surface transition-transform duration-200 ${showBedroomDetails ? 'rotate-180' : 'rotate-0'}`}
              >
                expand_more
              </span>
            </button>
            
            {showBedroomDetails && (
              <div className="space-y-4 sm:space-y-6 pt-2 pb-4">
                <div className="p-4 sm:p-6 border border-surface-dim rounded-xl bg-surface-container-lowest">
                  <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 font-headline">Bedroom 1</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <BedStepperRow label="Double bed" value={bedroom1.double} onDecrement={() => updateBedCounter(bedroom1, setBedroom1, 'double', -1)} onIncrement={() => updateBedCounter(bedroom1, setBedroom1, 'double', 1)} />
                    <BedStepperRow label="Queen bed" value={bedroom1.queen} onDecrement={() => updateBedCounter(bedroom1, setBedroom1, 'queen', -1)} onIncrement={() => updateBedCounter(bedroom1, setBedroom1, 'queen', 1)} />
                  </div>
                </div>
                <div className="p-4 sm:p-6 border border-surface-dim rounded-xl bg-surface-container-lowest">
                  <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 font-headline">Bedroom 2</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <BedStepperRow label="Single bed" value={bedroom2.single} onDecrement={() => updateBedCounter(bedroom2, setBedroom2, 'single', -1)} onIncrement={() => updateBedCounter(bedroom2, setBedroom2, 'single', 1)} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-surface border-t border-surface-dim z-50 px-4 sm:px-6 py-4">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-surface-container-highest">
          <div className="h-full bg-on-surface transition-all duration-300" style={{ width: '30%' }}></div>
        </div>
        <div className="max-w-[1280px] mx-auto flex justify-between items-center h-12">
          <button
            onClick={() => navigate('/add-homepage-2')}
            className="font-label text-xs sm:text-sm font-semibold underline text-on-surface hover:bg-surface-container-low px-3 sm:px-4 py-2 rounded-full transition-colors -ml-3 sm:-ml-4"
          >
            Back
          </button>
          <button 
            onClick={() => navigate('/add-homepage-4')}
            className="bg-primary hover:bg-primary-container text-on-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-label text-sm sm:text-base font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const StepperRow = ({ label, value, onChange, min, max, step }: { label: string, value: number, onChange: (val: number) => void, min: number, max: number, step: number }) => {
  const handleDecrement = () => {
    const newVal = Math.round((value - step) * 10) / 10;
    if (newVal >= min) onChange(newVal);
  };
  const handleIncrement = () => {
    const newVal = Math.round((value + step) * 10) / 10;
    if (newVal <= max) onChange(newVal);
  };

  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-base sm:text-lg font-body">{label}</span>
      <div className="flex items-center space-x-3 sm:space-x-4">
        <button
          disabled={value <= min}
          onClick={handleDecrement}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-outline-variant flex items-center justify-center text-secondary transition-colors hover:border-on-surface hover:text-on-surface disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-outline-variant disabled:hover:text-secondary"
        >
          <span className="material-symbols-outlined text-lg sm:text-xl">remove</span>
        </button>
        <span className="text-base sm:text-lg w-6 sm:w-8 text-center font-body">{value}</span>
        <button
          disabled={value >= max}
          onClick={handleIncrement}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-outline-variant flex items-center justify-center text-secondary transition-colors hover:border-on-surface hover:text-on-surface disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-outline-variant disabled:hover:text-secondary"
        >
          <span className="material-symbols-outlined text-lg sm:text-xl">add</span>
        </button>
      </div>
    </div>
  );
};

const BedStepperRow = ({ label, value, onDecrement, onIncrement }: { label: string, value: number, onDecrement: () => void, onIncrement: () => void }) => (
  <div className="flex items-center justify-between">
    <span className="text-sm sm:text-base text-secondary font-body">{label}</span>
    <div className="flex items-center space-x-2 sm:space-x-3">
      <button
        disabled={value <= 0}
        onClick={onDecrement}
        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-outline-variant flex items-center justify-center text-secondary hover:border-on-surface hover:text-on-surface disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-outline-variant disabled:hover:text-secondary"
      >
        <span className="material-symbols-outlined text-base sm:text-lg">remove</span>
      </button>
      <span className="w-4 text-center text-xs sm:text-sm font-body">{value}</span>
      <button
        onClick={onIncrement}
        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-outline-variant flex items-center justify-center text-secondary hover:border-on-surface hover:text-on-surface"
      >
        <span className="material-symbols-outlined text-base sm:text-lg">add</span>
      </button>
    </div>
  </div>
);

export default AddHomePage3;
