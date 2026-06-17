import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Photo {
  id: number;
  src: string;
  category: string;
  isCover: boolean;
}

const AddHomePage6: React.FC = () => {
  const navigate = useNavigate();
  const categories = ["Living Room", "Kitchen", "Bedroom", "Bathroom", "Exterior"];

  const [photos, setPhotos] = useState<Photo[]>([
    {
      id: 1,
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjNok4_lRmZguLXzRS2FT8Z52Td9-E4xMKJYQl1GVHb-g21_bpq5txrpMEKDRiXgcc4BAxm6eyzn3fe7VsbfCFKMY7m6AzK2lzEGBXN3fG6-kdt9K57UZ22p3Gj--whAwMY123eD0MM5_dhZfO2qsBPqL5Xme9MGrL_dKfthQ2p0HMFCVf3p2VFMQ5IH8KFR3tEm11w6_RfYH2KKV1YaAB-a598qw9UZmgpjHHVWySSu1C9ANnOu_EgVfCqbydlr57BZskzG7EXA",
      category: "Living Room",
      isCover: true
    },
    {
      id: 2,
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9Kt9lBpnlT6awHs0WE0MyDNb5f-9yVkBW9MLUOclUWpOjYfKq8J3m4T-hd4dkFDgb7s141gvvxCyr8lMrWUVvWAX41h1Ku3pFH0_LDmZUPt6d9h6CRZtul23OzKgnVcUYj2cziOzy93pwrpUsfIWMm0uMmwxN_9a1f5ffeS8iyOR4hZ-FBlFuH-gPnZEfg82vLkxH11biAWfOPOVfdiKghB0JP8z4BwF_n0vL7qFKKoGxrmMdpjc0a4Sa-k-NK445-xDbIJ1YmQ",
      category: "Kitchen",
      isCover: false
    },
    {
      id: 3,
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA80NmCx1WSXNMZPwi8Nx_QjSmOXkaCuUrACzrLg-eLb4Q8m2ZA1HMBkpvxr-6Y8RzqZrUV9ha5A2iOEzlBAQ7vgWCqw-gz6Db28Lync4aGz6cNxmB9G5hyUQ74NtCjiV7rb-4oRJC9DpXD9JI66QUC8q5SDtxXe571ihNiivdY6jq0LO8qV3EqGa-xbSaaVuM7atKAW0swwIgeiqSxiQM7pdtAuWkdbObG7ucKWVKQUQA66Ia4tX6LNCTGVcOgknoPTYybLNjrNQ",
      category: "Bedroom",
      isCover: false
    }
  ]);

  const makeCover = (id: number) => {
    setPhotos(prev => prev.map(p => ({ ...p, isCover: p.id === id })));
  };

  const deletePhoto = (id: number) => {
    setPhotos(prev => {
      const newPhotos = prev.filter(p => p.id !== id);
      if (newPhotos.length > 0 && !newPhotos.some(p => p.isCover)) {
        newPhotos[0].isCover = true;
      }
      return newPhotos;
    });
  };

  const updateCategory = (id: number, category: string) => {
    setPhotos(prev => prev.map(p => p.id === id ? { ...p, category } : p));
  };

  return (
    <>
      <div className="w-full max-w-3xl mx-auto">
        {/* Progress Indicator */}
        <div className="mb-8">
          <p className="text-sm text-secondary font-medium mb-3">Step 5 of 8</p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="h-1.5 flex-1 bg-primary rounded-full"></div>
            ))}
            {[6, 7, 8].map(i => (
              <div key={i} className="h-1.5 flex-1 bg-surface-variant rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-on-surface mb-3 tracking-tight">Showcase your space with photos</h1>
          <p className="text-lg text-secondary font-body">Upload at least 5 photos for best results</p>
        </div>

        {/* Photo Tips Card */}
        <div className="bg-tertiary-container/10 border border-tertiary/20 rounded-xl p-5 mb-8 flex gap-4 items-start">
          <div className="bg-tertiary/10 p-2 rounded-full text-tertiary shrink-0">
            <span className="material-symbols-outlined">lightbulb</span>
          </div>
          <div>
            <h3 className="font-bold text-on-surface mb-1">Photo Tips</h3>
            <p className="text-secondary text-sm">Use natural light when possible. Tidy up beforehand and capture the unique features that make your place special. Landscape orientation (horizontal) works best.</p>
          </div>
        </div>

        {/* Upload Area */}
        <div className="border-2 border-dashed border-outline-variant hover:border-primary transition-colors bg-surface-container-lowest rounded-xl p-8 md:p-12 mb-8 flex flex-col items-center justify-center text-center cursor-pointer group">
          <div className="bg-surface-variant group-hover:bg-primary/10 transition-colors p-4 rounded-full mb-4">
            <span className="material-symbols-outlined text-4xl text-secondary group-hover:text-primary transition-colors">cloud_upload</span>
          </div>
          <h3 className="text-xl font-bold text-on-surface mb-2">Drag and drop photos here</h3>
          <p className="text-secondary mb-6">or browse your device to upload</p>
          <button className="bg-surface border border-outline text-on-surface font-semibold py-2 px-6 rounded-lg hover:bg-surface-container-low transition-colors">
            Choose Photos
          </button>
          <p className="text-xs text-secondary mt-4">JPG, PNG, HEIC up to 10MB each</p>
        </div>

        {/* Photo Grid */}
        {photos.length > 0 && (
          <div>
            <div className="flex justify-between items-end mb-4">
              <h3 className="font-bold text-lg text-on-surface">Uploaded Photos ({photos.length})</h3>
              <span className="text-sm text-secondary">Drag to reorder</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {photos.map(photo => (
                <div key={photo.id} className="relative group rounded-xl overflow-hidden border border-outline-variant aspect-video bg-surface-container">
                  <img alt="Uploaded property photo" className="w-full h-full object-cover" src={photo.src} />
                  
                  {photo.isCover && (
                    <div className="absolute top-3 left-3 bg-surface text-on-surface text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1 z-10">
                      <span className="material-symbols-outlined text-[16px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      Cover Photo
                    </div>
                  )}

                  {/* Controls overlay */}
                  <div className="absolute inset-0 bg-inverse-surface/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
                    <div className="flex justify-between items-start">
                      {!photo.isCover ? (
                        <button 
                          onClick={() => makeCover(photo.id)}
                          className="bg-surface text-on-surface text-xs font-bold px-3 py-1.5 rounded-full shadow-sm hover:bg-surface-container transition-colors">
                          Make cover
                        </button>
                      ) : <div />}
                      <div className="flex gap-2">
                        <button aria-label="Edit" className="bg-surface text-on-surface p-2 rounded-full hover:bg-surface-container transition-colors shadow-sm">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button 
                          onClick={() => deletePhoto(photo.id)}
                          aria-label="Delete" className="bg-surface text-error p-2 rounded-full hover:bg-error-container transition-colors shadow-sm">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="relative">
                        <select 
                          value={photo.category}
                          onChange={(e) => updateCategory(photo.id, e.target.value)}
                          className="appearance-none bg-surface text-on-surface text-sm font-medium py-1.5 pl-3 pr-8 rounded-lg border-none shadow-sm focus:ring-2 focus:ring-primary outline-none">
                          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                        </select>
                        <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-secondary pointer-events-none text-[20px]">expand_more</span>
                      </div>
                      <div className="cursor-move text-surface p-1">
                        <span className="material-symbols-outlined">drag_indicator</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* BottomNavBar */}
      <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 md:px-20 bg-surface border-t border-outline-variant shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] lg:pl-[22rem]">
        <button 
          onClick={() => navigate('/add-homepage-4')}
          className="flex items-center gap-2 text-secondary font-medium px-3 sm:px-4 py-2 hover:bg-secondary-container transition-all rounded-lg group"
        >
          <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
          <span className="hidden sm:inline">Back</span>
        </button>
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="flex items-center gap-2 text-secondary font-medium px-3 sm:px-4 py-2 hover:bg-secondary-container transition-all rounded-lg">
            <span className="material-symbols-outlined">save</span>
            <span className="hidden sm:inline">Save as draft</span>
          </button>
          <button 
            onClick={() => navigate('/add-homepage-5')}
            className="flex items-center gap-2 bg-primary text-on-primary rounded-lg sm:rounded-xl px-6 sm:px-8 py-2.5 sm:py-3 font-bold hover:bg-surface-tint active:scale-95 transition-all shadow-sm"
          >
            <span>Continue</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </footer>
    </>
  );
};

export default AddHomePage6;
