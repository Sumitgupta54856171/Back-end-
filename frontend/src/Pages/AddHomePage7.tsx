import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddHomePage7: React.FC = () => {
  const navigate = useNavigate();

  const [basePrice, setBasePrice] = useState(150);
  const [smartPricing, setSmartPricing] = useState(true);
  const [cleaningFee, setCleaningFee] = useState(50);
  const [securityDeposit, setSecurityDeposit] = useState(200);
  
  const [weeklyDiscountEnabled, setWeeklyDiscountEnabled] = useState(true);
  const [weeklyDiscount, setWeeklyDiscount] = useState(10);
  
  const [monthlyDiscountEnabled, setMonthlyDiscountEnabled] = useState(true);
  const [monthlyDiscount, setMonthlyDiscount] = useState(20);

  const [minStayDefault, setMinStayDefault] = useState(2);
  const [minStayWeekends, setMinStayWeekends] = useState(3);
  const [prepTime, setPrepTime] = useState("1");

  // Preview calculations
  const nights = 3;
  const baseTotal = basePrice * nights;
  const serviceFee = Math.round(baseTotal * 0.10);
  const guestTotal = baseTotal + cleaningFee + serviceFee;

  return (
    <>
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 lg:py-12 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        {/* Form Section */}
        <div className="flex-1 w-full max-w-3xl space-y-10 sm:space-y-12">
          {/* Header */}
          <div className="space-y-3">
            <h1 className="font-headline text-3xl md:text-4xl font-bold text-on-surface tracking-tight">Set your price and availability</h1>
            <p className="text-on-surface-variant text-base sm:text-lg">You can change this anytime after publishing.</p>
          </div>

          {/* Pricing Section */}
          <section className="space-y-8 bg-surface-container-lowest p-5 sm:p-6 md:p-8 rounded-xl border border-outline-variant shadow-sm">
            <h2 className="font-headline text-xl sm:text-2xl font-semibold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">sell</span>
              Pricing Details
            </h2>
            
            {/* Base Price */}
            <div className="space-y-4">
              <label className="block font-label text-sm sm:text-base font-semibold text-on-surface">Base price per night</label>
              <div className="relative flex items-center max-w-sm">
                <span className="absolute left-4 text-on-surface-variant font-bold text-lg">$</span>
                <input 
                  className="w-full pl-10 pr-12 py-3 sm:py-4 bg-surface rounded-lg border-2 border-outline-variant focus:border-primary focus:ring-0 text-lg sm:text-xl font-bold text-on-surface transition-colors" 
                  placeholder="0" 
                  type="number" 
                  value={basePrice}
                  onChange={(e) => setBasePrice(Number(e.target.value))}
                />
                <span className="absolute right-4 text-on-surface-variant text-sm font-medium">USD</span>
              </div>
              
              {/* Smart Pricing Toggle */}
              <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg border border-surface-dim mt-4">
                <div className="space-y-1 pr-4">
                  <h3 className="font-semibold text-on-surface text-sm sm:text-base">Use smart pricing</h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant">Automatically adjust price based on demand to maximize earnings.</p>
                </div>
                <button 
                  type="button"
                  onClick={() => setSmartPricing(!smartPricing)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${smartPricing ? 'bg-primary' : 'bg-surface-dim'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${smartPricing ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
            </div>

            <hr className="border-outline-variant"/>

            {/* Additional Fees */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block font-label text-sm font-semibold text-on-surface">Cleaning fee (optional)</label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-on-surface-variant">$</span>
                  <input 
                    className="w-full pl-8 pr-4 py-3 bg-surface rounded-lg border border-outline-variant focus:border-primary focus:ring-0 text-md text-on-surface transition-colors" 
                    type="number" 
                    value={cleaningFee}
                    onChange={(e) => setCleaningFee(Number(e.target.value))}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block font-label text-sm font-semibold text-on-surface">Security deposit (optional)</label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-on-surface-variant">$</span>
                  <input 
                    className="w-full pl-8 pr-4 py-3 bg-surface rounded-lg border border-outline-variant focus:border-primary focus:ring-0 text-md text-on-surface transition-colors" 
                    type="number" 
                    value={securityDeposit}
                    onChange={(e) => setSecurityDeposit(Number(e.target.value))}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Discounts Section */}
          <section className="space-y-6">
            <h2 className="font-headline text-xl sm:text-2xl font-semibold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">percent</span>
              Discounts
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base">Encourage longer stays by offering discounts.</p>
            <div className="space-y-4">
              {/* Weekly Discount */}
              <div className="flex items-start gap-4 p-4 sm:p-5 bg-surface-container-lowest rounded-xl border border-outline-variant hover:border-outline transition-colors cursor-pointer group">
                <div className="mt-1">
                  <input 
                    checked={weeklyDiscountEnabled}
                    onChange={(e) => setWeeklyDiscountEnabled(e.target.checked)}
                    className="w-5 h-5 text-primary border-outline-variant rounded focus:ring-primary" 
                    type="checkbox"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-on-surface group-hover:text-primary transition-colors text-sm sm:text-base">Weekly discount</h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant mt-1">For stays of 7 nights or more.</p>
                  <div className="mt-3 flex items-center gap-2 w-32">
                    <input 
                      className="w-full px-3 py-2 bg-surface rounded-lg border border-outline-variant focus:border-primary focus:ring-0 text-md text-center" 
                      type="number" 
                      value={weeklyDiscount}
                      onChange={(e) => setWeeklyDiscount(Number(e.target.value))}
                    />
                    <span className="text-on-surface-variant font-medium">%</span>
                  </div>
                </div>
              </div>
              {/* Monthly Discount */}
              <div className="flex items-start gap-4 p-4 sm:p-5 bg-surface-container-lowest rounded-xl border border-outline-variant hover:border-outline transition-colors cursor-pointer group">
                <div className="mt-1">
                  <input 
                    checked={monthlyDiscountEnabled}
                    onChange={(e) => setMonthlyDiscountEnabled(e.target.checked)}
                    className="w-5 h-5 text-primary border-outline-variant rounded focus:ring-primary" 
                    type="checkbox"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-on-surface group-hover:text-primary transition-colors text-sm sm:text-base">Monthly discount</h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant mt-1">For stays of 28 nights or more.</p>
                  <div className="mt-3 flex items-center gap-2 w-32">
                    <input 
                      className="w-full px-3 py-2 bg-surface rounded-lg border border-outline-variant focus:border-primary focus:ring-0 text-md text-center" 
                      type="number" 
                      value={monthlyDiscount}
                      onChange={(e) => setMonthlyDiscount(Number(e.target.value))}
                    />
                    <span className="text-on-surface-variant font-medium">%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Availability Section */}
          <section className="space-y-8 bg-surface-container-lowest p-5 sm:p-6 md:p-8 rounded-xl border border-outline-variant shadow-sm">
            <h2 className="font-headline text-xl sm:text-2xl font-semibold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">calendar_month</span>
              Availability
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Minimum Stay */}
              <div className="space-y-4">
                <label className="block font-label text-sm sm:text-base font-semibold text-on-surface">Minimum stay</label>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface text-sm">Default</span>
                    <div className="flex items-center gap-2 w-24">
                      <input 
                        className="w-full px-3 py-2 bg-surface rounded-lg border border-outline-variant focus:border-primary focus:ring-0 text-center" 
                        type="number" 
                        value={minStayDefault}
                        onChange={(e) => setMinStayDefault(Number(e.target.value))}
                      />
                      <span className="text-on-surface-variant text-sm">nights</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface text-sm">Weekends</span>
                    <div className="flex items-center gap-2 w-24">
                      <input 
                        className="w-full px-3 py-2 bg-surface rounded-lg border border-outline-variant focus:border-primary focus:ring-0 text-center" 
                        type="number" 
                        value={minStayWeekends}
                        onChange={(e) => setMinStayWeekends(Number(e.target.value))}
                      />
                      <span className="text-on-surface-variant text-sm">nights</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Prep Time */}
              <div className="space-y-4">
                <label className="block font-label text-sm sm:text-base font-semibold text-on-surface">Preparation time</label>
                <p className="text-xs sm:text-sm text-on-surface-variant">Block nights between reservations to clean.</p>
                <select 
                  className="w-full px-4 py-3 bg-surface rounded-lg border border-outline-variant focus:border-primary focus:ring-0 text-on-surface appearance-none cursor-pointer"
                  value={prepTime}
                  onChange={(e) => setPrepTime(e.target.value)}
                >
                  <option value="0">None</option>
                  <option value="1">1 night before and after each reservation</option>
                  <option value="2">2 nights before and after each reservation</option>
                </select>
              </div>
            </div>
          </section>
        </div>

        {/* Sticky Summary Sidebar */}
        <aside className="w-full lg:w-96 lg:sticky lg:top-28 space-y-6">
          <div className="bg-surface-container-lowest p-5 sm:p-6 rounded-2xl border border-outline-variant shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>receipt_long</span>
              <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface">Price Preview</h3>
            </div>
            <p className="text-sm text-on-surface-variant mb-6 pb-4 border-b border-outline-variant">Sample for a {nights}-night stay</p>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center text-on-surface text-sm sm:text-base">
                <span>${basePrice} x {nights} nights</span>
                <span className="font-medium">${baseTotal}</span>
              </div>
              <div className="flex justify-between items-center text-on-surface text-sm sm:text-base">
                <span>Cleaning fee</span>
                <span className="font-medium">${cleaningFee}</span>
              </div>
              <div className="flex justify-between items-center text-on-surface text-sm sm:text-base">
                <span>Service fee (10%)</span>
                <span className="font-medium">${serviceFee}</span>
              </div>
            </div>
            <div className="pt-4 border-t border-outline-variant flex justify-between items-center">
              <span className="font-headline text-base sm:text-lg font-bold text-on-surface">Guest total</span>
              <span className="font-headline text-lg sm:text-xl font-bold text-primary">${guestTotal}</span>
            </div>
            <div className="mt-6 p-4 bg-primary-container/10 rounded-xl flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-0.5 shrink-0">tips_and_updates</span>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">Hosts who use Smart Pricing earn on average 15% more per year.</p>
            </div>
          </div>
        </aside>
      </div>

      {/* BottomNavBar */}
      <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 md:px-8 bg-surface border-t border-outline-variant shadow-[0_-4px_20px_rgba(0,0,0,0.05)] lg:pl-[22rem]">
        <button 
          onClick={() => navigate('/add-homepage-5')}
          className="flex items-center gap-2 text-secondary font-medium px-3 sm:px-4 py-2 hover:bg-surface-container-low rounded-lg transition-colors group"
        >
          <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
          <span className="hidden sm:inline">Back</span>
        </button>
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="hidden md:block text-secondary font-medium px-3 sm:px-4 py-2 hover:bg-surface-container-low rounded-lg transition-colors">
            Save as draft
          </button>
          <button 
            onClick={() => navigate('/add-homepage-8')}
            className="bg-primary text-on-primary rounded-lg sm:rounded-xl px-6 sm:px-8 py-2.5 sm:py-3 font-bold hover:bg-primary/90 transition-all hover:shadow-md flex items-center gap-2"
          >
            Continue
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </footer>
    </>
  );
};

export default AddHomePage7;
