import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddHomePage2: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col max-w-[800px] mx-auto w-full py-6 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-10 text-center md:text-left">
          <h1 className="text-[28px] sm:text-[32px] md:text-[48px] font-bold text-on-surface leading-tight tracking-tight mb-2">Where's your place located?</h1>
          <p className="text-[14px] sm:text-[16px] text-secondary">Guests will only get your exact address after they book</p>
        </div>

        {/* Form Layout */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 w-full">
          {/* Address Form Container */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 sm:p-6 shadow-sm">
            <form className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-1" htmlFor="country">Country/Region</label>
                <select className="w-full border-outline-variant rounded-lg focus:border-on-surface focus:ring-1 focus:ring-on-surface bg-surface-bright text-on-surface h-12 px-4 shadow-sm" id="country">
                  <option selected value="IN">India</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-1" htmlFor="street">Street address</label>
                <input className="w-full border-outline-variant rounded-lg focus:border-on-surface focus:ring-1 focus:ring-on-surface h-12 px-4 shadow-sm placeholder:text-secondary-fixed-dim" id="street" placeholder="House name/number + street/road" type="text" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-1" htmlFor="apt">Apt, suite, etc. <span className="text-secondary font-normal">(optional)</span></label>
                <input className="w-full border-outline-variant rounded-lg focus:border-on-surface focus:ring-1 focus:ring-on-surface h-12 px-4 shadow-sm placeholder:text-secondary-fixed-dim" id="apt" placeholder="Apt, suite, building access code" type="text" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-1" htmlFor="city">City / Town</label>
                  <input className="w-full border-outline-variant rounded-lg focus:border-on-surface focus:ring-1 focus:ring-on-surface h-12 px-4 shadow-sm" id="city" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-1" htmlFor="state">State / Province</label>
                  <input className="w-full border-outline-variant rounded-lg focus:border-on-surface focus:ring-1 focus:ring-on-surface h-12 px-4 shadow-sm" id="state" type="text" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-1" htmlFor="zip">ZIP / Postal code</label>
                <input className="w-full border-outline-variant rounded-lg focus:border-on-surface focus:ring-1 focus:ring-on-surface h-12 px-4 shadow-sm" id="zip" type="text" />
              </div>
            </form>
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden relative shadow-sm border border-outline-variant bg-surface-container-low group">
            <img alt="Map View" className="w-full h-full object-cover" data-location="India" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNmRItn8PqqTke34s50cikxSlHRRdEY6qI3W18Hw7XcusXijN9mixJI3ID3dYWjV0-FvOGO7xsrqO-ho5dLWM_eKgckJ7P1I_3Pjr5c6DCpXsrhlQSOc6NH9LOk1UjGEWfEDlwpOcQOXSeEYN6uVQt_1YnUSYLIvpKmruEkXEuvRCQXEUOoVFqpbR6cQGP8rh2LEGkbYSUVGHs0JNyvhR-yME6uyQXgYyyAeS_EdanGp9vYtiM9Pam-uHYvHsjUjzDOLngoEy-ow" />
            {/* Draggable Pin Placeholder */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full cursor-pointer hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[48px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center px-4">
              <button className="bg-surface-container-lowest text-on-surface px-6 py-2 rounded-full shadow-floating font-semibold text-sm hover:scale-105 transition-transform border border-outline-variant">
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
      </div>

      {/* Bottom Transactional Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-surface border-t border-outline-variant px-4 sm:px-6 py-4 z-50 flex justify-between items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] lg:pl-[22rem]">
        <button 
          onClick={() => navigate('/add-homepage')}
          className="text-on-surface font-semibold underline hover:text-secondary transition-colors"
        >
          Back
        </button>
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-secondary hover:text-on-surface font-semibold transition-colors">Save as draft</button>
          <button 
            onClick={() => navigate('/add-homepage-3')}
            className="bg-primary text-on-primary px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-on-primary-fixed-variant transition-colors shadow-sm hover:shadow-md transform hover:scale-[1.02] active:scale-95 duration-200">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default AddHomePage2;
