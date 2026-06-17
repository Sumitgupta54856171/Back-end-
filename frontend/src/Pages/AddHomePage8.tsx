import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddHomePage8: React.FC = () => {
  const navigate = useNavigate();

  const [rules, setRules] = useState({
    children: false,
    infants: false,
    pets: false,
    smoking: false,
    parties: false,
    photography: true,
  });

  const toggleRule = (key: keyof typeof rules) => {
    setRules(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12">
        <header className="mb-10 sm:mb-12">
          <h1 className="font-headline text-3xl sm:text-4xl font-semibold text-on-surface mb-2 tracking-tight">Set the rules for your place</h1>
          <p className="text-base sm:text-lg text-secondary">Help guests know what to expect and what's allowed.</p>
        </header>

        <section className="mb-10 sm:mb-12">
          <h2 className="font-headline text-xl sm:text-2xl font-semibold text-on-surface mb-6">Standard rules</h2>
          <div className="space-y-4">
            <RuleItem label="Suitable for children (2-12 years)" checked={rules.children} onChange={() => toggleRule('children')} />
            <RuleItem label="Suitable for infants (under 2 years)" checked={rules.infants} onChange={() => toggleRule('infants')} />
            <RuleItem label="Suitable for pets" checked={rules.pets} onChange={() => toggleRule('pets')} />
            <RuleItem label="Smoking allowed" checked={rules.smoking} onChange={() => toggleRule('smoking')} />
            <RuleItem label="Parties/events allowed" checked={rules.parties} onChange={() => toggleRule('parties')} />
            <RuleItem label="Photography allowed" checked={rules.photography} onChange={() => toggleRule('photography')} />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-headline text-xl sm:text-2xl font-semibold text-on-surface mb-6">Additional rules (optional)</h2>
          <p className="text-sm text-secondary mb-4">Add any specific house rules, building regulations, or neighborhood guidelines.</p>
          <div className="h-64 sm:h-96 w-full rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant flex items-center justify-center cursor-pointer hover:bg-surface-container-high transition-colors">
            <div className="text-center text-secondary px-4">
              <span className="material-symbols-outlined text-4xl mb-2">add_photo_alternate</span>
              <p className="text-sm font-medium">Add images or documents of building rules</p>
            </div>
          </div>
        </section>
      </div>

      {/* BottomNavBar */}
      <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 py-4 md:px-20 bg-surface shadow-floating border-t border-outline-variant lg:pl-[22rem]">
        <button 
          onClick={() => navigate('/add-homepage-7')}
          className="font-label text-sm text-secondary font-medium px-4 py-2 hover:bg-secondary-container transition-all flex items-center gap-2 rounded-lg"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span> 
          <span className="hidden sm:inline">Back</span>
        </button>
        <button 
          onClick={() => navigate('/host/dashboard')}
          className="font-label text-sm bg-primary text-on-primary rounded-xl px-6 py-3 font-bold hover:scale-95 transition-transform flex items-center gap-2 shadow-md"
        >
          Publish Listing 
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </footer>
    </>
  );
};

const RuleItem = ({ label, checked, onChange }: { label: string, checked: boolean, onChange: () => void }) => (
  <div 
    className="flex items-center justify-between p-4 sm:p-5 bg-surface-container-lowest border border-surface-variant rounded-lg hover:border-outline transition-colors cursor-pointer" 
    onClick={onChange}
  >
    <span className="text-base sm:text-lg text-on-surface font-medium">{label}</span>
    <input 
      type="checkbox" 
      checked={checked}
      onChange={onChange}
      onClick={(e) => e.stopPropagation()}
      className="h-6 w-6 text-primary border-outline rounded focus:ring-primary cursor-pointer shrink-0" 
    />
  </div>
);

export default AddHomePage8;
