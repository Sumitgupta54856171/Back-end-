import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddHomePage5: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');

  return (
    <>
      <div className="space-y-8 animate-[fadeIn_0.5s_ease-out]">
        <header className="space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline tracking-tight text-on-surface">Create your listing description</h1>
          <p className="text-base sm:text-lg text-secondary">Make your place stand out to guests.</p>
        </header>
        
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl p-4 sm:p-6 md:p-8 space-y-8 shadow-sm">
          {/* AI Assistant Banner */}
          <div className="bg-primary-container/10 border border-primary-container/20 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary-container text-on-primary-container p-2 rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
              </div>
              <div>
                <h3 className="font-semibold text-on-surface">Writer's block?</h3>
                <p className="text-sm text-secondary">Let AI generate a professional description based on your basic info and amenities.</p>
              </div>
            </div>
            <button className="bg-primary text-on-primary font-semibold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2 whitespace-nowrap w-full sm:w-auto justify-center">
              <span className="material-symbols-outlined text-sm">magic_button</span>
              <span>Improve with AI</span>
            </button>
          </div>

          {/* Listing Title */}
          <div className="space-y-2">
            <div className="flex justify-between items-end">
              <label className="block font-semibold text-on-surface" htmlFor="listing-title">Listing title</label>
              <span className="text-xs text-secondary">{title.length}/50</span>
            </div>
            <p className="text-sm text-secondary mb-2">Catch guests' attention with a listing title that highlights what makes your place special.</p>
            <input 
              className="w-full bg-surface-bright border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-on-surface" 
              id="listing-title" 
              maxLength={50} 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Cozy Cabin with Mountain Views" 
              type="text"
            />
          </div>

          <hr className="border-surface-variant"/>

          {/* Summary */}
          <div className="space-y-2">
            <div className="flex justify-between items-end">
              <label className="block font-semibold text-on-surface" htmlFor="listing-summary">Summary</label>
              <span className="text-xs text-secondary">{summary.length}/500</span>
            </div>
            <p className="text-sm text-secondary mb-2">Provide a brief overview of your property. This appears in search results.</p>
            <textarea 
              className="w-full bg-surface-bright border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-on-surface resize-none" 
              id="listing-summary" 
              maxLength={500} 
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Describe the vibe, key features, and neighborhood..." 
              rows={4}
            />
          </div>

          <hr className="border-surface-variant"/>

          {/* Detailed Description */}
          <div className="space-y-2">
            <label className="block font-semibold text-on-surface">Detailed description</label>
            <p className="text-sm text-secondary mb-2">Share more details about your place, what makes it unique, and any special amenities.</p>
            <div className="border border-outline-variant rounded-lg overflow-hidden flex flex-col bg-surface-bright">
              <div className="flex flex-wrap items-center gap-1 p-2 bg-surface border-b border-outline-variant">
                <button className="p-2 rounded hover:bg-surface-variant transition-colors text-on-surface bg-surface-variant" type="button"><span className="material-symbols-outlined text-sm">format_bold</span></button>
                <button className="p-2 rounded hover:bg-surface-variant transition-colors text-secondary" type="button"><span className="material-symbols-outlined text-sm">format_italic</span></button>
                <button className="p-2 rounded hover:bg-surface-variant transition-colors text-secondary" type="button"><span className="material-symbols-outlined text-sm">format_underlined</span></button>
                <div className="w-px h-6 bg-outline-variant mx-1"></div>
                <button className="p-2 rounded hover:bg-surface-variant transition-colors text-secondary" type="button"><span className="material-symbols-outlined text-sm">format_list_bulleted</span></button>
                <button className="p-2 rounded hover:bg-surface-variant transition-colors text-secondary" type="button"><span className="material-symbols-outlined text-sm">format_list_numbered</span></button>
                <div className="w-px h-6 bg-outline-variant mx-1"></div>
                <button className="p-2 rounded hover:bg-surface-variant transition-colors text-secondary" type="button"><span className="material-symbols-outlined text-sm">link</span></button>
              </div>
              <textarea 
                className="w-full p-4 border-none focus:ring-0 outline-none resize-y min-h-[150px] text-on-surface bg-transparent" 
                placeholder="Tell guests about the layout, sleeping arrangements, and any quirks..." 
                rows={6}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Space */}
            <div className="space-y-2">
              <label className="block font-semibold text-on-surface" htmlFor="the-space">The space (optional)</label>
              <textarea 
                className="w-full bg-surface-bright border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-on-surface resize-none" 
                id="the-space" 
                placeholder="Provide details about rooms and spaces." 
                rows={3}
              />
            </div>
            {/* Guest Access */}
            <div className="space-y-2">
              <label className="block font-semibold text-on-surface" htmlFor="guest-access">Guest access (optional)</label>
              <textarea 
                className="w-full bg-surface-bright border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-on-surface resize-none" 
                id="guest-access" 
                placeholder="Let guests know what parts of the space they can use." 
                rows={3}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 py-4 md:px-20 bg-surface border-t border-outline-variant shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] lg:pl-[22rem]">
        <button 
          onClick={() => navigate('/add-homepage-4')}
          className="text-secondary font-medium px-3 sm:px-4 py-2 flex items-center gap-2 hover:bg-surface-container-low transition-all rounded-lg"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          <span className="hidden sm:inline">Back</span>
        </button>
        <div className="flex gap-2 sm:gap-4">
          <button className="text-secondary font-medium px-3 sm:px-4 py-2 hidden md:flex items-center gap-2 hover:bg-surface-container-low transition-all rounded-lg">
            <span className="material-symbols-outlined text-lg">save</span>
            <span className="hidden sm:inline">Save as draft</span>
          </button>
          <button 
            onClick={() => navigate('/add-homepage-6')}
            className="bg-primary text-on-primary rounded-lg sm:rounded-xl px-6 py-3 font-bold flex items-center gap-2 hover:bg-primary/90 transition-all active:scale-95 duration-200 shadow-md"
          >
            <span>Continue</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default AddHomePage5;
