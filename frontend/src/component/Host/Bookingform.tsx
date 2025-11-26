import { Plus, Trash2, Home, MapPin, DollarSign, Image as ImageIcon, CheckSquare } from 'lucide-react';
import { useState } from 'react';

export default function HostListingForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'Entire home',
    location: {
      address: '',
      city: '',
      state: '',
      country: ''
    },
    stats: {
      guests: 1,
      bedrooms: 1,
      beds: 1,
      baths: 1
    },
    price: {
      amount: '',
      currency: 'USD'
    },
    amenities: [],
    images: [''] 
  });

  const [isLoading, setIsLoading] = useState(false);

  // Available amenities options
  const amenityOptions = [
    "Wifi", "Kitchen", "Washer", "TV", "Free parking on premises", 
    "Indoor fireplace", "Air conditioning", "Pool", "Hot tub", "Patio"
  ];

  const handleBasicChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNestedChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleAmenityToggle = (amenity) => {
    setFormData(prev => {
      const newAmenities = prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity];
      return { ...prev, amenities: newAmenities };
    });
  };

  const handleImageChange = (index, value) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData(prev => ({ ...prev, images: newImages }));
  };

  const addImageField = () => {
    setFormData(prev => ({ ...prev, images: [...prev.images, ''] }));
  };

  const removeImageField = (index) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, images: newImages }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Form Data Submitted:", formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert("Listing created successfully!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] font-sans text-[#181111] py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-[#e5e5e5] overflow-hidden">
        
        {/* Header */}
        <div className="px-8 py-6 border-b border-[#f4f0f0]">
          <h1 className="text-2xl font-bold text-[#ea2a33]">Host your home</h1>
          <p className="text-[#886364] mt-1">Fill in the details to publish your listing on StayAway.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-10">
          
          {/* Section 1: Basic Info */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Home className="text-[#ea2a33]" size={20} />
              <h2 className="text-lg font-bold">Basic Information</h2>
            </div>
            
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">Listing Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleBasicChange}
                  placeholder="e.g. Charming Victorian House"
                  className="w-full bg-white border border-[#dadada] rounded-lg px-4 py-3 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                   <label className="block text-sm font-medium mb-1.5">Property Type</label>
                   <select
                      name="type"
                      value={formData.type}
                      onChange={handleBasicChange}
                      className="w-full bg-white border border-[#dadada] rounded-lg px-4 py-3 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all appearance-none"
                   >
                     <option>Entire home</option>
                     <option>Private room</option>
                     <option>Shared room</option>
                     <option>Hotel room</option>
                   </select>
                </div>
                <div>
                   <label className="block text-sm font-medium mb-1.5">Price per night ($)</label>
                   <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#886364]"><DollarSign size={16}/></div>
                      <input
                        type="number"
                        value={formData.price.amount}
                        onChange={(e) => handleNestedChange('price', 'amount', e.target.value)}
                        placeholder="100"
                        className="w-full pl-8 bg-white border border-[#dadada] rounded-lg px-4 py-3 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                        required
                      />
                   </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleBasicChange}
                  rows="4"
                  placeholder="Describe your place to guests..."
                  className="w-full bg-white border border-[#dadada] rounded-lg px-4 py-3 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                  required
                />
              </div>
            </div>
          </section>

          <hr className="border-[#f4f0f0]" />

          {/* Section 2: Location */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="text-[#ea2a33]" size={20} />
              <h2 className="text-lg font-bold">Location</h2>
            </div>
            
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">Street Address</label>
                <input
                  type="text"
                  value={formData.location.address}
                  onChange={(e) => handleNestedChange('location', 'address', e.target.value)}
                  placeholder="123 Main St"
                  className="w-full bg-white border border-[#dadada] rounded-lg px-4 py-3"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">City</label>
                  <input
                    type="text"
                    value={formData.location.city}
                    onChange={(e) => handleNestedChange('location', 'city', e.target.value)}
                    placeholder="San Francisco"
                    className="w-full bg-white border border-[#dadada] rounded-lg px-4 py-3"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">State</label>
                  <input
                    type="text"
                    value={formData.location.state}
                    onChange={(e) => handleNestedChange('location', 'state', e.target.value)}
                    placeholder="CA"
                    className="w-full bg-white border border-[#dadada] rounded-lg px-4 py-3"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Country</label>
                  <input
                    type="text"
                    value={formData.location.country}
                    onChange={(e) => handleNestedChange('location', 'country', e.target.value)}
                    placeholder="USA"
                    className="w-full bg-white border border-[#dadada] rounded-lg px-4 py-3"
                    required
                  />
                </div>
              </div>
            </div>
          </section>

          <hr className="border-[#f4f0f0]" />

          {/* Section 3: Property Details */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Home className="text-[#ea2a33]" size={20} />
              <h2 className="text-lg font-bold">Property Details</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['guests', 'bedrooms', 'beds', 'baths'].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium mb-1.5 capitalize">{field}</label>
                  <input
                    type="number"
                    min="0"
                    step={field === 'baths' ? 0.5 : 1}
                    value={formData.stats[field]}
                    onChange={(e) => handleNestedChange('stats', field, e.target.value)}
                    className="w-full bg-white border border-[#dadada] rounded-lg px-4 py-3 text-center"
                  />
                </div>
              ))}
            </div>
          </section>

          <hr className="border-[#f4f0f0]" />

          {/* Section 4: Amenities */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <CheckSquare className="text-[#ea2a33]" size={20} />
              <h2 className="text-lg font-bold">Amenities</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {amenityOptions.map((amenity) => (
                <label key={amenity} className="flex items-center gap-3 p-3 border border-[#dadada] rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.amenities.includes(amenity)}
                    onChange={() => handleAmenityToggle(amenity)}
                    className="w-5 h-5 text-[#ea2a33] border-gray-300 rounded focus:ring-[#ea2a33]"
                  />
                  <span className="text-sm font-medium">{amenity}</span>
                </label>
              ))}
            </div>
          </section>

          <hr className="border-[#f4f0f0]" />

          {/* Section 5: Photos */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <ImageIcon className="text-[#ea2a33]" size={20} />
              <h2 className="text-lg font-bold">Photos</h2>
            </div>
            
            <div className="space-y-3">
               {formData.images.map((url, index) => (
                 <div key={index} className="flex gap-2">
                   <input
                     type="url"
                     value={url}
                     onChange={(e) => handleImageChange(index, e.target.value)}
                     placeholder="https://example.com/image.jpg"
                     className="flex-1 bg-white border border-[#dadada] rounded-lg px-4 py-3"
                   />
                   {formData.images.length > 1 && (
                     <button
                       type="button"
                       onClick={() => removeImageField(index)}
                       className="p-3 text-[#886364] hover:text-[#ea2a33] hover:bg-red-50 rounded-lg transition-colors"
                     >
                       <Trash2 size={20} />
                     </button>
                   )}
                 </div>
               ))}
               
               <button
                 type="button"
                 onClick={addImageField}
                 className="flex items-center gap-2 text-sm font-bold text-[#181111] hover:underline mt-2"
               >
                 <Plus size={16} /> Add another photo
               </button>
            </div>
          </section>

          {/* Submit Button */}
          <div className="pt-6 border-t border-[#f4f0f0]">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#ea2a33] hover:bg-[#d9252d] text-white font-bold py-4 rounded-lg text-lg transition-all transform active:scale-[0.99] disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isLoading ? 'Creating Listing...' : 'Publish Listing'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}