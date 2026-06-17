import { useNavigate } from 'react-router-dom';

const AddHomeLocation = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="w-full bg-surface shadow-sm px-6 h-20 flex justify-between items-center z-50 sticky top-0">
        <div className="text-2xl font-extrabold text-primary tracking-tight">
          StayHub
        </div>
        <button
          className="text-secondary hover:bg-surface-container-low rounded-full p-2 transition-colors"
          onClick={() => navigate('/add-homepage')}
        >
          <span className="material-symbols-outlined text-on-surface">close</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col max-w-[800px] mx-auto w-full px-6 py-8 pb-32">
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-[32px] md:text-[48px] font-bold text-on-surface leading-tight tracking-tight mb-2">
            Where's your place located?
          </h1>
          <p className="text-[16px] text-secondary">
            Guests will only get your exact address after they book
          </p>
        </div>

        {/* Form Layout */}
        <div className="grid grid-cols-1 gap-8 w-full">
          {/* Address Form Container */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-1" htmlFor="country">
                  Country/Region
                </label>
                <select
                  className="w-full border-outline-variant rounded-lg focus:border-on-surface focus:ring-1 focus:ring-on-surface bg-surface-bright text-on-surface h-12 px-4 shadow-sm"
                  id="country"
                  defaultValue="IN"
                >
                  <option value="IN">India</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-on-surface mb-1" htmlFor="street">
                  Street address
                </label>
                <input
                  className="w-full border-outline-variant rounded-lg focus:border-on-surface focus:ring-1 focus:ring-on-surface h-12 px-4 shadow-sm placeholder:text-secondary-fixed-dim"
                  id="street"
                  placeholder="House name/number + street/road"
                  type="text"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-on-surface mb-1" htmlFor="apt">
                  Apt, suite, etc. <span className="text-secondary font-normal">(optional)</span>
                </label>
                <input
                  className="w-full border-outline-variant rounded-lg focus:border-on-surface focus:ring-1 focus:ring-on-surface h-12 px-4 shadow-sm placeholder:text-secondary-fixed-dim"
                  id="apt"
                  placeholder="Apt, suite, building access code"
                  type="text"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-1" htmlFor="city">
                    City / Town
                  </label>
                  <input
                    className="w-full border-outline-variant rounded-lg focus:border-on-surface focus:ring-1 focus:ring-on-surface h-12 px-4 shadow-sm"
                    id="city"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-1" htmlFor="state">
                    State / Province
                  </label>
                  <input
                    className="w-full border-outline-variant rounded-lg focus:border-on-surface focus:ring-1 focus:ring-on-surface h-12 px-4 shadow-sm"
                    id="state"
                    type="text"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-on-surface mb-1" htmlFor="zip">
                  ZIP / Postal code
                </label>
                <input
                  className="w-full border-outline-variant rounded-lg focus:border-on-surface focus:ring-1 focus:ring-on-surface h-12 px-4 shadow-sm"
                  id="zip"
                  type="text"
                />
              </div>
            </form>
          </div>

          {/* Map Placeholder (no large image) */}
          <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden relative shadow-sm border border-outline-variant bg-surface-container-low group">
            {/* Gray background with pin icon */}
            <div className="flex items-center justify-center w-full h-full">
              <span
                className="material-symbols-outlined text-[64px] text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                location_on
              </span>
            </div>

            {/* Draggable Pin Placeholder */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full cursor-pointer hover:scale-110 transition-transform">
              <span
                className="material-symbols-outlined text-[48px] text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                location_on
              </span>
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center px-4">
              <button className="bg-surface-container-lowest text-on-surface px-6 py-2 rounded-full shadow-floating font-semibold text-sm hover:scale-102 transition-transform border border-outline-variant">
                Confirm location
              </button>
            </div>
          </div>

          {/* Contextual Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-surface-container-low p-4 rounded-xl border border-outline-variant">
            <div className="flex items-center gap-3 text-secondary">
              <span className="material-symbols-outlined text-2xl">my_location</span>
              <span className="text-sm">Use my current location</span>
            </div>
            <button className="text-sm font-semibold text-on-surface underline hover:text-primary transition-colors">
              What3Words info
            </button>
          </div>
        </div>
      </main>

      {/* Bottom Transactional Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-surface border-t border-outline-variant px-6 py-4 z-50 flex justify-between items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <button
          className="text-on-surface font-semibold underline hover:text-secondary transition-colors"
          onClick={() => navigate('/add-homepage')}
        >
          Back
        </button>
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-secondary hover:text-on-surface font-semibold transition-colors">
            Save as draft
          </button>
          <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-semibold hover:bg-on-primary-fixed-variant transition-colors shadow-sm hover:shadow-md transform hover:scale-[1.02] active:scale-95 duration-200">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddHomeLocation;
