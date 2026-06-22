import { Pencil, Calendar, BarChart3, MoreHorizontal, TrendingUp } from 'lucide-react';

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
  Active: 'bg-[#00A699]',
  Paused: 'bg-[#717171]',
  'Pending review': 'bg-[#FF385C]',
};

export default function ListingCard({ listing, viewMode }: ListingCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border border-[#DDDDDD] bg-white transition-shadow hover:shadow-[0px_6px_16px_rgba(0,0,0,0.12)]">
      {/* Image Area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F7F7F7]">
        <img
          src={`https://placehold.co/600x450/F7F7F7/DDDDDD?text=${encodeURIComponent(listing.title)}`}
          alt={listing.title}
          className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-[#222222] backdrop-blur-sm">
            <span className={`h-2 w-2 rounded-full ${statusColors[listing.status]}`}></span>
            {listing.status}
          </span>
          {listing.boosted && (
            <span className="flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-[#FF385C] backdrop-blur-sm">
              <TrendingUp className="h-3 w-3" /> Boost listing
            </span>
          )}
          {listing.isNew && (
            <span className="rounded-full bg-[#222222] px-2.5 py-1 text-xs font-semibold text-white">
              New
            </span>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="truncate text-[18px] font-semibold text-[#222222]">
              {listing.title}
            </h3>
            <p className="mt-0.5 text-sm text-[#717171]">{listing.location}</p>
          </div>
          {listing.rating && (
            <div className="flex items-center gap-1 text-sm font-medium text-[#222222]">
              <span>★</span> {listing.rating}
            </div>
          )}
        </div>

        <p className="mt-2 text-[16px] font-semibold text-[#222222]">
          {listing.price} <span className="text-sm font-normal text-[#717171]">/ night</span>
        </p>

        {/* Stats */}
        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-[#DDDDDD] pt-4">
          <div>
            <p className="text-xs text-[#717171]">Views</p>
            <p className="text-sm font-semibold text-[#222222]">{listing.views}</p>
          </div>
          <div>
            <p className="text-xs text-[#717171]">Bookings</p>
            <p className="text-sm font-semibold text-[#222222]">{listing.bookings}</p>
          </div>
          <div>
            <p className="text-xs text-[#717171]">Revenue</p>
            <p className="text-sm font-semibold text-[#222222]">{listing.revenue}</p>
          </div>
        </div>

        {/* Occupancy */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#717171]">Occupancy (30d)</span>
            <span className="font-semibold text-[#222222]">
              {listing.occupancy !== null ? `${listing.occupancy}%` : '-'}
            </span>
          </div>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[#F7F7F7]">
            <div
              className="h-full rounded-full bg-[#FF385C]"
              style={{ width: `${listing.occupancy ?? 0}%` }}
            ></div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-4 flex items-center justify-between border-t border-[#DDDDDD] pt-4">
          <div className="flex gap-2">
            <button className="rounded-full p-2 text-[#717171] hover:bg-[#F7F7F7] hover:text-[#222222]">
              <Pencil className="h-4 w-4" />
            </button>
            <button className="rounded-full p-2 text-[#717171] hover:bg-[#F7F7F7] hover:text-[#222222]">
              <Calendar className="h-4 w-4" />
            </button>
            <button className="rounded-full p-2 text-[#717171] hover:bg-[#F7F7F7] hover:text-[#222222]">
              <BarChart3 className="h-4 w-4" />
            </button>
          </div>
          {listing.status === 'Paused' ? (
            <button className="rounded-full border border-[#DDDDDD] bg-white px-3 py-1.5 text-xs font-medium text-[#222222] hover:bg-[#F7F7F7]">
              Reactivate
            </button>
          ) : (
            <button className="rounded-full p-2 text-[#717171] hover:bg-[#F7F7F7] hover:text-[#222222]">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
