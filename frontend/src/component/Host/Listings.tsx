


import { Star, MoreHorizontal, Edit, Trash2, Eye } from 'lucide-react';

interface Listing {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  isSuperhost: boolean;
  status: 'active' | 'inactive' | 'pending';
}

const sampleListings: Listing[] = [
  {
    id: '1',
    title: 'Modern Apartment in Downtown',
    location: 'New York, NY',
    price: 150,
    rating: 4.92,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
    isSuperhost: true,
    status: 'active'
  },
  {
    id: '2',
    title: 'Cozy Beach House',
    location: 'Malibu, CA',
    price: 280,
    rating: 4.85,
    reviews: 96,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    isSuperhost: true,
    status: 'active'
  },
  {
    id: '3',
    title: 'Mountain Cabin Retreat',
    location: 'Aspen, CO',
    price: 220,
    rating: 4.78,
    reviews: 64,
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop',
    isSuperhost: false,
    status: 'active'
  },
  {
    id: '4',
    title: 'Urban Loft Studio',
    location: 'San Francisco, CA',
    price: 175,
    rating: 4.88,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
    isSuperhost: true,
    status: 'inactive'
  },
  {
    id: '5',
    title: 'Lakeside Cottage',
    location: 'Lake Tahoe, NV',
    price: 195,
    rating: 4.95,
    reviews: 87,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
    isSuperhost: false,
    status: 'active'
  },
  {
    id: '6',
    title: 'Historic Townhouse',
    location: 'Boston, MA',
    price: 165,
    rating: 4.82,
    reviews: 73,
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&h=600&fit=crop',
    isSuperhost: true,
    status: 'pending'
  }
];

const Listings = () => {
  const getStatusBadge = (status: Listing['status']) => {
    const styles = {
      active: 'bg-[#00A699] text-white',
      inactive: 'bg-[#717171] text-white',
      pending: 'bg-[#FF385C] text-white'
    };
    
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-[#fbf9f9] p-6 md:p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-[32px] font-semibold text-[#1b1c1c] mb-2">Your Listings</h1>
        <p className="text-[16px] text-[#717171]">Manage and edit your property listings</p>
      </div>

      {/* Listings Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleListings.map((listing) => (
          <div
            key={listing.id}
            className="group bg-white rounded-xl overflow-hidden transition-all duration-200 hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)]"
          >
            {/* Image Container */}
            <div className="relative aspect-4/3 overflow-hidden">
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
              />
              
              {/* Status Badge */}
              <div className="absolute top-3 left-3">
                {getStatusBadge(listing.status)}
              </div>

              {/* Superhost Badge */}
              {listing.isSuperhost && (
                <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <span className="text-xs font-semibold text-[#222222]">Superhost</span>
                </div>
              )}

              {/* Action Buttons Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                <button className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <Eye className="w-5 h-5 text-[#222222]" />
                </button>
                <button className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <Edit className="w-5 h-5 text-[#222222]" />
                </button>
                <button className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <Trash2 className="w-5 h-5 text-[#ba1a1a]" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="text-[18px] font-semibold text-[#1b1c1c] mb-1 line-clamp-1">
                    {listing.title}
                  </h3>
                  <p className="text-[14px] text-[#717171]">{listing.location}</p>
                </div>
                <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                  <MoreHorizontal className="w-5 h-5 text-[#717171]" />
                </button>
              </div>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-1 mb-3">
                <Star className="w-4 h-4 fill-[#222222] text-[#222222]" />
                <span className="text-[14px] font-semibold text-[#1b1c1c]">{listing.rating}</span>
                <span className="text-[14px] text-[#717171]">({listing.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1">
                <span className="text-[20px] font-semibold text-[#1b1c1c]">${listing.price}</span>
                <span className="text-[14px] text-[#717171]">/ night</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State (if no listings) */}
      {sampleListings.length === 0 && (
        <div className="max-w-7xl mx-auto text-center py-16">
          <div className="text-[18px] font-semibold text-[#1b1c1c] mb-2">No listings yet</div>
          <p className="text-[16px] text-[#717171] mb-6">Start by adding your first property</p>
          <button className="bg-[#FF385C] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#e0002f] transition-colors">
            Add New Listing
          </button>
        </div>
      )}
    </div>
  );
};

export default Listings;