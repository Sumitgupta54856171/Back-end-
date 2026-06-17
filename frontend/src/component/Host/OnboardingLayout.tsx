import React from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

const OnboardingLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarSteps = [
    { name: 'Property Type', icon: 'home_work', path: '/add-homepage' },
    { name: 'Location', icon: 'location_on', path: '/add-homepage-2' },
    { name: 'Basic Info', icon: 'info', path: '/add-homepage-3' },
    { name: 'Amenities', icon: 'grid_view', path: '/add-homepage-4' },
    { name: 'Photos', icon: 'photo_library', path: '/add-homepage-6' },
    { name: 'Description', icon: 'description', path: '/add-homepage-5' },
    { name: 'Pricing', icon: 'payments', path: '#' },
    { name: 'House Rules', icon: 'gavel', path: '#' },
  ];

  const currentPath = location.pathname;
  const currentStepIndex = sidebarSteps.findIndex(s => s.path === currentPath);

  return (
    <div className="bg-surface text-on-surface h-full flex flex-col font-body antialiased min-h-screen">
      {/* TopNavBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 h-16 sm:h-20 bg-surface border-b border-outline-variant transition-all duration-200">
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>other_houses</span>
          <span className="text-primary font-bold text-lg sm:text-xl font-headline">StayHub</span>
        </div>
        <div className="flex items-center">
          <button className="text-on-surface-variant font-label font-semibold text-xs sm:text-sm hover:text-primary transition-colors py-2 px-3 sm:px-4 rounded-full hover:bg-surface-container-low">Save and exit</button>
        </div>
      </header>

      <div className="flex flex-1 pt-16 sm:pt-20">
        {/* SideNavBar */}
        <nav className="hidden lg:flex flex-col fixed left-0 top-20 bottom-0 py-8 bg-surface border-r border-outline-variant h-full w-80 overflow-y-auto">
          <div className="px-6 mb-8">
            <p className="text-secondary text-sm font-medium mb-1">Step {currentStepIndex !== -1 ? currentStepIndex + 1 : 5} of 8</p>
            <h2 className="text-2xl font-headline font-semibold text-on-surface">Create your listing</h2>
          </div>
          <ul className="flex flex-col space-y-1 font-body w-full">
            {sidebarSteps.map((step, idx) => {
              const isActive = step.path === currentPath;
              const isStepDone = idx < currentStepIndex;

              return (
                <li key={idx}>
                  <a 
                    className={`flex items-center gap-4 py-3 pl-5 transition-colors w-full cursor-pointer ${
                      isActive 
                        ? 'text-primary font-bold border-l-4 border-primary pl-4 bg-primary/5' 
                        : 'text-secondary hover:bg-surface-container-low'
                    }`} 
                    href={step.path}
                    onClick={(e) => {
                      e.preventDefault();
                      if (step.path !== '#') {
                        navigate(step.path);
                      }
                    }}
                  >
                    <span className="material-symbols-outlined text-xl" style={isStepDone || isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>
                      {step.icon}
                    </span>
                    <span className="font-medium">{step.name}</span>
                    {isStepDone && !isActive && (
                      <span className="material-symbols-outlined text-tertiary ml-auto mr-4 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex-1 w-full lg:ml-80 pb-32 pt-6 sm:pt-8 px-4 sm:px-6 md:px-12 max-w-4xl mx-auto overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default OnboardingLayout;
