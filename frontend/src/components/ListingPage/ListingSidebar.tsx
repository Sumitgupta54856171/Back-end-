import { CheckCircle2, Circle, MessageSquare, CalendarDays, DollarSign } from 'lucide-react';

export default function ListingSidebar() {
  return (
    <>
      {/* Listing Tips */}
      <div className="rounded-xl border border-[#DDDDDD] bg-[#F7F7F7] p-6">
        <h3 className="text-[18px] font-semibold text-[#222222]">Listing tips</h3>
        <p className="mt-1 text-sm text-[#717171]">
          Complete your host profile to attract more guests.
        </p>

        <div className="mt-6 flex items-center gap-4">
          <div className="relative h-16 w-16">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-[#E5E5E5]"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                className="text-[#FF385C]"
                strokeDasharray="75, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-[#222222]">
              75%
            </span>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#222222]">Almost there!</p>
            <p className="text-xs text-[#717171]">2 steps remaining</p>
          </div>
        </div>

        <ul className="mt-6 space-y-4">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#00A699]" />
            <span className="text-sm text-[#717171] line-through">Verify identity</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#00A699]" />
            <span className="text-sm text-[#717171] line-through">Add payout method</span>
          </li>
          <li className="flex items-start gap-3">
            <Circle className="mt-0.5 h-5 w-5 text-[#717171]" />
            <div>
              <p className="text-sm font-medium text-[#222222]">Add a profile photo</p>
              <button className="text-xs font-semibold text-[#FF385C] hover:underline">
                Upload photo
              </button>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <Circle className="mt-0.5 h-5 w-5 text-[#717171]" />
            <p className="text-sm font-medium text-[#222222]">Write host bio</p>
          </li>
        </ul>
      </div>

      {/* Quick Actions */}
      <div className="rounded-xl border border-[#DDDDDD] bg-white p-6">
        <h3 className="text-[18px] font-semibold text-[#222222]">Quick actions</h3>
        <ul className="mt-4 space-y-4">
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MessageSquare className="h-5 w-5 text-[#717171]" />
              <span className="text-sm font-medium text-[#222222]">Message guests</span>
            </div>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF385C] text-[10px] font-bold text-white">
              3
            </span>
          </li>
          <li className="flex items-center gap-3">
            <CalendarDays className="h-5 w-5 text-[#717171]" />
            <span className="text-sm font-medium text-[#222222]">Update calendar</span>
          </li>
          <li className="flex items-center gap-3">
            <DollarSign className="h-5 w-5 text-[#717171]" />
            <span className="text-sm font-medium text-[#222222]">Adjust pricing</span>
          </li>
        </ul>
      </div>
    </>
  );
}
