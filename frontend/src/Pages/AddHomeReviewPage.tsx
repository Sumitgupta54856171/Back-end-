import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddHomeReviewPage: React.FC = () => {
  const [publishOption, setPublishOption] = useState('now');

  return (
    <div className="bg-surface text-on-surface font-body antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
      {/* TopNavBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-20 bg-surface border-b border-outline-variant font-headline text-[18px] font-semibold transition-all duration-200">
        <div className="text-primary font-bold text-xl tracking-tight">StayHub</div>
        <div className="hidden md:block text-secondary">Search</div>
        <button className="text-primary hover:text-primary/80 transition-colors text-[14px]">Save and exit</button>
      </header>
      
      <div className="flex flex-1 pt-20 pb-24">
        {/* SideNavBar */}
        <aside className="hidden lg:flex flex-col fixed left-0 top-20 bottom-0 w-80 py-8 bg-surface border-r border-outline-variant font-body text-[16px] overflow-y-auto">
          <div className="px-8 mb-8">
            <h2 className="text-on-surface font-bold text-[24px] mb-1">Create your listing</h2>
            <p className="text-secondary text-[14px]">Step 8 of 8</p>
          </div>
          <nav className="flex flex-col gap-1">
            <Link className="flex items-center gap-4 py-3 text-secondary pl-8 hover:bg-surface-container-low transition-colors" to="#">
              <span className="material-symbols-outlined text-[20px]">home_work</span>
              <span>Property Type</span>
            </Link>
            <Link className="flex items-center gap-4 py-3 text-secondary pl-8 hover:bg-surface-container-low transition-colors" to="#">
              <span className="material-symbols-outlined text-[20px]">location_on</span>
              <span>Location</span>
            </Link>
            <Link className="flex items-center gap-4 py-3 text-secondary pl-8 hover:bg-surface-container-low transition-colors" to="#">
              <span className="material-symbols-outlined text-[20px]">info</span>
              <span>Basic Info</span>
            </Link>
            <Link className="flex items-center gap-4 py-3 text-secondary pl-8 hover:bg-surface-container-low transition-colors" to="#">
              <span className="material-symbols-outlined text-[20px]">grid_view</span>
              <span>Amenities</span>
            </Link>
            <Link className="flex items-center gap-4 py-3 text-secondary pl-8 hover:bg-surface-container-low transition-colors" to="#">
              <span className="material-symbols-outlined text-[20px]">photo_library</span>
              <span>Photos</span>
            </Link>
            <Link className="flex items-center gap-4 py-3 text-secondary pl-8 hover:bg-surface-container-low transition-colors" to="#">
              <span className="material-symbols-outlined text-[20px]">description</span>
              <span>Description</span>
            </Link>
            <Link className="flex items-center gap-4 py-3 text-secondary pl-8 hover:bg-surface-container-low transition-colors" to="#">
              <span className="material-symbols-outlined text-[20px]">payments</span>
              <span>Pricing</span>
            </Link>
            <Link className="flex items-center gap-4 py-3 text-primary font-bold border-l-4 border-primary pl-7 bg-primary-container/10 transition-colors" to="#">
              <span className="material-symbols-outlined text-[20px]">gavel</span>
              <span>House Rules</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-80 px-6 md:px-12 lg:px-24 py-12 max-w-[1280px] mx-auto w-full">
          <header className="mb-12">
            <h1 className="font-headline text-[32px] md:text-[48px] font-bold text-on-surface tracking-tight mb-2">Review your listing</h1>
            <p className="text-[18px] text-secondary">Check everything before publishing to guests.</p>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
            {/* Left Column: Preview */}
            <div className="xl:col-span-5 flex flex-col gap-8">
              <div>
                <h3 className="font-headline text-[18px] font-semibold text-on-surface mb-4">Preview</h3>
                {/* Glassmorphism Preview Card */}
                <div className="bg-surface-container-lowest rounded-[1.5rem] p-4 shadow-[0_8px_28px_rgba(0,0,0,0.08)] border border-surface-variant transition-transform duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1">
                  <div className="relative w-full aspect-[4/3] rounded-[1rem] overflow-hidden mb-4">
                    <img 
                      alt="Listing Preview" 
                      className="w-full h-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0jkbCaecsPelXXMcpC4REvJJ_k8ofepvU9AoHdPXNc6eXxNlKJD4xSgfk2Sa-jdWQEUbyHuk1g4CviUnAsaAmwxrKc_MrYuC7bGps4SNbDO4YTzFmK2bDxCwQg0l8IN_TYqJkJSHMOXx1eka3MaDveI6dnajc5rMkTWqUwTeGMkkqcKsMhX8IUMh1Sqz8CxAoeoT7-NpeC8ML-izRol7Qnw0exrEbfWIrtxANuRSnka_nRGSFFJv9-U0SX2e8j1qhdN506lYwgA" 
                    />
                    <button className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm p-2 rounded-full text-on-surface hover:scale-105 transition-transform shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">favorite</span>
                    </button>
                    <div className="absolute bottom-3 left-3 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full text-[12px] font-semibold flex items-center gap-1 shadow-sm">
                      <span className="material-symbols-outlined text-[14px] fill">star</span>
                      New
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-headline font-semibold text-[16px] text-on-surface truncate pr-4">Modern Villa with Private Pool</h4>
                    </div>
                    <p className="text-secondary text-[14px] mb-2">Bali, Indonesia</p>
                    <div className="flex items-baseline gap-1 mt-3">
                      <span className="font-headline font-bold text-[16px] text-on-surface">$250</span>
                      <span className="text-secondary text-[14px]">night</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Details & Publish */}
            <div className="xl:col-span-7 flex flex-col gap-10">
              {/* Editable Summary */}
              <section>
                <h3 className="font-headline text-[18px] font-semibold text-on-surface mb-4">Listing Details</h3>
                <div className="bg-surface-container-lowest border border-outline-variant rounded-[1rem] divide-y divide-outline-variant shadow-sm">
                  <div className="flex justify-between items-center p-5 hover:bg-surface-container-low transition-colors rounded-t-[1rem]">
                    <div>
                      <p className="text-secondary text-[12px] font-semibold uppercase tracking-wider mb-1">Property Type</p>
                      <p className="text-on-surface text-[16px]">Entire Villa</p>
                    </div>
                    <button className="text-on-surface underline text-[14px] font-medium hover:text-primary transition-colors">Edit</button>
                  </div>
                  <div className="flex justify-between items-center p-5 hover:bg-surface-container-low transition-colors">
                    <div>
                      <p className="text-secondary text-[12px] font-semibold uppercase tracking-wider mb-1">Location</p>
                      <p className="text-on-surface text-[16px]">Ubud, Bali, Indonesia</p>
                    </div>
                    <button className="text-on-surface underline text-[14px] font-medium hover:text-primary transition-colors">Edit</button>
                  </div>
                  <div className="flex justify-between items-center p-5 hover:bg-surface-container-low transition-colors">
                    <div>
                      <p className="text-secondary text-[12px] font-semibold uppercase tracking-wider mb-1">Guests &amp; Rooms</p>
                      <p className="text-on-surface text-[16px]">4 guests · 2 bedrooms · 2 baths</p>
                    </div>
                    <button className="text-on-surface underline text-[14px] font-medium hover:text-primary transition-colors">Edit</button>
                  </div>
                  <div className="flex justify-between items-center p-5 hover:bg-surface-container-low transition-colors rounded-b-[1rem]">
                    <div>
                      <p className="text-secondary text-[12px] font-semibold uppercase tracking-wider mb-1">Pricing</p>
                      <p className="text-on-surface text-[16px]">$250 / night base price</p>
                    </div>
                    <button className="text-on-surface underline text-[14px] font-medium hover:text-primary transition-colors">Edit</button>
                  </div>
                </div>
              </section>

              {/* Publish Options */}
              <section>
                <h3 className="font-headline text-[18px] font-semibold text-on-surface mb-4">Publishing Options</h3>
                <div className="grid grid-cols-1 gap-4">
                  <label className={`relative flex items-start p-5 cursor-pointer rounded-[1rem] transition-all ${publishOption === 'now' ? 'border-2 border-primary bg-primary-container/5' : 'border border-outline-variant hover:border-outline bg-surface-container-lowest'}`}>
                    <div className="flex items-center h-6">
                      <input 
                        checked={publishOption === 'now'} 
                        onChange={() => setPublishOption('now')} 
                        className="w-5 h-5 text-primary border-outline focus:ring-primary focus:ring-offset-surface" 
                        name="publish_option" 
                        type="radio" 
                        value="now" 
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <span className="block text-on-surface font-semibold text-[16px]">Publish immediately</span>
                      <span className="block text-secondary text-[14px] mt-1">Your listing will be visible to guests right away.</span>
                    </div>
                  </label>

                  <label className={`relative flex items-start p-5 cursor-pointer rounded-[1rem] transition-all ${publishOption === 'later' ? 'border-2 border-primary bg-primary-container/5' : 'border border-outline-variant hover:border-outline bg-surface-container-lowest'}`}>
                    <div className="flex items-center h-6">
                      <input 
                        checked={publishOption === 'later'} 
                        onChange={() => setPublishOption('later')} 
                        className="w-5 h-5 text-primary border-outline focus:ring-primary focus:ring-offset-surface" 
                        name="publish_option" 
                        type="radio" 
                        value="later" 
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <span className="block text-on-surface font-semibold text-[16px]">Schedule for later</span>
                      <span className="block text-secondary text-[14px] mt-1">Choose a specific date to make your listing go live.</span>
                    </div>
                  </label>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>

      {/* BottomNavBar */}
      <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 md:px-20 bg-surface border-t border-outline-variant shadow-[0_-4px_16px_rgba(0,0,0,0.05)] font-label text-[14px]">
        <button className="text-secondary font-medium px-4 py-2 hover:bg-secondary-container rounded-[0.5rem] transition-all flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          Back
        </button>
        <div className="flex items-center gap-4">
          <button className="text-secondary font-medium px-4 py-2 hover:bg-secondary-container rounded-[0.5rem] transition-all hidden md:flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">save</span>
            Save as draft
          </button>
          <button className="bg-primary text-on-primary rounded-[0.75rem] px-6 md:px-8 py-3 font-bold hover:scale-95 hover:bg-[#a60030] transition-transform flex items-center gap-2 shadow-sm">
            Continue
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default AddHomeReviewPage;
