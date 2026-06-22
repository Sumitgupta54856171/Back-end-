import { useState } from 'react';
import ListingCard from '../components/ListingPage/ListingCard';
import ListingSidebar from '../components/ListingPage/ListingSidebar';
import ListingFooter from '../components/ListingPage/ListingFooter';
import { Search, SlidersHorizontal, Grid3x3, List } from 'lucide-react';

const filters = ['All', 'Active', 'Paused', 'Pending review', 'Needs attention'];

const listings = [
  {
    id: 1,
    status: 'Active' as const,
    boosted: true,
    title: 'Sunset Cliff Villa',
    rating: 4.9,
    location: 'Malibu, California',
    price: '₹45,000',
    views: '1,234',
    bookings: '45',
    revenue: '₹1.2L',
    occupancy: 65,
  },
  {
    id: 2,
    status: 'Paused' as const,
    boosted: false,
    title: 'Downtown Artist Loft',
    rating: 4.7,
    location: 'Brooklyn, New York',
    price: '₹18,500',
    views: '892',
    bookings: '12',
    revenue: '₹34K',
    occupancy: 0,
  },
  {
    id: 3,
    status: 'Pending review' as const,
    boosted: false,
    isNew: true,
    title: 'Pine Crest Cabin',
    rating: null,
    location: 'Asheville, NC',
    price: '₹22,000',
    views: '-',
    bookings: '-',
    revenue: '-',
    occupancy: null,
  },
];

export default function ListingPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen bg-white font-sans text-[#1b1c1c]">
      <main className="mx-auto max-w-[1280px] px-6 py-8 md:px-10 lg:px-20">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-[28px] font-semibold leading-[36px] tracking-[-0.01em] text-[#1b1c1c] md:text-[32px] md:leading-[40px]">
              Your listings
            </h1>
            <p className="mt-1 text-[16px] text-[#5f5e5e]">
              Manage and edit your properties
            </p>
          </div>
          <div className="flex gap-3">
            <button className="rounded-full border border-[#e3e2e2] bg-white px-4 py-2 text-[14px] font-semibold text-[#1b1c1c] transition-colors hover:bg-[#f5f3f3]">
              Import listings
            </button>
            <button className="flex items-center rounded-full bg-[#ba0036] px-4 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-[#920029]">
              <span className="mr-2 text-lg leading-none">+</span> Add new listing
            </button>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5f5e5e]" />
              <input
                type="text"
                placeholder="Search listings..."
                className="w-full rounded-full border border-[#e3e2e2] py-2 pl-9 pr-4 text-[14px] outline-none focus:border-[#1b1c1c] focus:ring-1 focus:ring-[#1b1c1c]"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`whitespace-nowrap rounded-full px-4 py-1.5 text-[14px] font-semibold transition-colors ${
                    activeFilter === filter
                      ? 'bg-[#1b1c1c] text-white'
                      : 'border border-[#e3e2e2] bg-white text-[#1b1c1c] hover:bg-[#f5f3f3]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center rounded-full border border-[#e3e2e2] bg-white px-4 py-2 text-[14px] font-semibold text-[#1b1c1c] hover:bg-[#f5f3f3]">
              <SlidersHorizontal className="mr-2 h-4 w-4" /> Sort
            </button>
            <div className="flex rounded-full border border-[#e3e2e2] p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`rounded-full p-1.5 transition-colors ${viewMode === 'grid' ? 'bg-[#f5f3f3] text-[#1b1c1c]' : 'text-[#5f5e5e]'}`}
              >
                <Grid3x3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`rounded-full p-1.5 transition-colors ${viewMode === 'list' ? 'bg-[#f5f3f3] text-[#1b1c1c]' : 'text-[#5f5e5e]'}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          {/* Listings */}
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} viewMode={viewMode} />
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ListingSidebar />
          </div>
        </div>
      </main>

      <ListingFooter />
    </div>
  );
}
