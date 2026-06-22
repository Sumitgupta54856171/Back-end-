import { Pencil, Calendar, BarChart3, MoreHorizontal, TrendingUp, MapPin, Star } from 'lucide-react';

interface Listing {
  id: number;
  status: 'Active' | 'Paused' | 'Pending review';
  boosted?: boolean;
  isNew?: boolean;
  title: string;
  rating: number | null;
  location: string;
  price: string;
  views: string;
  bookings: string;
  revenue: string;
  occupancy: number | null;
}

interface ListingCardProps {
  listing: Listing;
  viewMode: 'grid' | 'list';
}

const statusColors = {
  Active: 'bg-[#00685f]',
  Paused: 'bg-[#5f5e5e]',
  'Pending review': 'bg-[#ba0036]',
};

export default function ListingCard({ listing, viewMode }: ListingCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border border-[#e3e2e2] bg-white transition-shadow hover:shadow-[0px_6px_16px_rgba(0,0,0,0.12)]">
      {/* Image Area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f5f3f3]">
        <img
          src={`https://placehold.co/600x450/f5f3f3/e3e2e2?text=${encodeURIComponent(listing.title)}`}
          alt={listing.title}
          className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[12px] font-semibold text-[#1b1c1c] backdrop-blur-sm">
            <span className={`h-2 w-2 rounded-full ${statusColors[listing.status]}`}></span>
            {listing.status}
          </span>
          {listing.boosted && (
            <span className="flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[12px] font-semibold text-[#ba0036] backdrop-blur-sm">
              <TrendingUp className="h-3 w-3" /> Boost listing
            </span>
          )}
          {listing.isNew && (
            <span className="rounded-full bg-[#1b1c1c] px-2.5 py-1 text-[12px] font-semibold text-white">
              New
            </span>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="truncate text-[18px] font-semibold text-[#1b1c1c]">
              {listing.title}
            </h3>
            <div className="mt-0.5 flex items-center gap-1 text-[14px] text-[#5f5e5e]">
              <MapPin className="h-3.5 w-3.5" />
              {listing.location}
            </div>
          </div>
          {listing.rating && (
            <div className="flex items-center gap-1 text-[14px] font-medium text-[#1b1c1c]">
              <Star className="h-3.5 w-3.5 fill-current" /> {listing.rating}
            </div>
          )}
        </div>

        <p className="mt-2 text-[16px] font-semibold text-[#1b1c1c]">
          {listing.price} <span className="text-[14px] font-normal text-[#5f5e5e]">/ night</span>
        </p>

        {/* Stats */}
        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-[#e3e2e2] pt-4">
          <div>
            <p className="text-[12px] text-[#5f5e5e]">Views</p>
            <p className="text-[14px] font-semibold text-[#1b1c1c]">{listing.views}</p>
          </div>
          <div>
            <p className="text-[12px] text-[#5f5e5e]">Bookings</p>
            <p className="text-[14px] font-semibold text-[#1b1c1c]">{listing.bookings}</p>
          </div>
          <div>
            <p className="text-[12px] text-[#5f5e5e]">Revenue</p>
            <p className="text-[14px] font-semibold text-[#1b1c1c]">{listing.revenue}</p>
          </div>
        </div>

        {/* Occupancy */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-[12px]">
            <span className="text-[#5f5e5e]">Occupancy (30d)</span>
            <span className="font-semibold text-[#1b1c1c]">
              {listing.occupancy !== null ? `${listing.occupancy}%` : '-'}
            </span>
          </div>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[#f5f3f3]">
            <div
              className="h-full rounded-full bg-[#ba0036]"
              style={{ width: `${listing.occupancy ?? 0}%` }}
            ></div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-4 flex items-center justify-between border-t border-[#e3e2e2] pt-4">
          <div className="flex gap-2">
            <button className="rounded-full p-2 text-[#5f5e5e] hover:bg-[#f5f3f3] hover:text-[#1b1c1c]">
              <Pencil className="h-4 w-4" />
            </button>
            <button className="rounded-full p-2 text-[#5f5e5e] hover:bg-[#f5f3f3] hover:text-[#1b1c1c]">
              <Calendar className="h-4 w-4" />
            </button>
            <button className="rounded-full p-2 text-[#5f5e5e] hover:bg-[#f5f3f3] hover:text-[#1b1c1c]">
              <BarChart3 className="h-4 w-4" />
            </button>
          </div>
          {listing.status === 'Paused' ? (
            <button className="rounded-full border border-[#e3e2e2] bg-white px-3 py-1.5 text-[12px] font-semibold text-[#1b1c1c] hover:bg-[#f5f3f3]">
              Reactivate
            </button>
          ) : (
            <button className="rounded-full p-2 text-[#5f5e5e] hover:bg-[#f5f3f3] hover:text-[#1b1c1c]">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
