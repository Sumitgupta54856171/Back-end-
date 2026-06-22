import { CheckCircle2, Circle, MessageSquare, CalendarDays, DollarSign } from 'lucide-react';

export default function ListingSidebar() {
  return (
    <>
      {/* Listing Tips */}
      <div className="rounded-xl border border-[#e3e2e2] bg-[#f5f3f3] p-6">
        <h3 className="text-[18px] font-semibold text-[#1b1c1c]">Listing tips</h3>
        <p className="mt-1 text-[14px] text-[#5f5e5e]">
          Complete your host profile to attract more guests.
        </p>

        <div className="mt-6 flex items-center gap-4">
          <div className="relative h-16 w-16">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-[#e3e2e2]"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                className="text-[#ba0036]"
                strokeDasharray="75, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[12px] font-bold text-[#1b1c1c]">
              75%
            </span>
          </div>
          <div>
            <p className="text-[14px] font-semibold text-[#1b1c1c]">Almost there!</p>
            <p className="text-[12px] text-[#5f5e5e]">2 steps remaining</p>
          </div>
        </div>

        <ul className="mt-6 space-y-4">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#00685f]" />
            <span className="text-[14px] text-[#5f5e5e] line-through">Verify identity</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#00685f]" />
            <span className="text-[14px] text-[#5f5e5e] line-through">Add payout method</span>
          </li>
          <li className="flex items-start gap-3">
            <Circle className="mt-0.5 h-5 w-5 text-[#5f5e5e]" />
            <div>
              <p className="text-[14px] font-medium text-[#1b1c1c]">Add a profile photo</p>
              <button className="text-[12px] font-semibold text-[#ba0036] hover:underline">
                Upload photo
              </button>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <Circle className="mt-0.5 h-5 w-5 text-[#5f5e5e]" />
            <p className="text-[14px] font-medium text-[#1b1c1c]">Write host bio</p>
          </li>
        </ul>
      </div>

      {/* Quick Actions */}
      <div className="rounded-xl border border-[#e3e2e2] bg-white p-6">
        <h3 className="text-[18px] font-semibold text-[#1b1c1c]">Quick actions</h3>
        <ul className="mt-4 space-y-4">
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MessageSquare className="h-5 w-5 text-[#5f5e5e]" />
              <span className="text-[14px] font-medium text-[#1b1c1c]">Message guests</span>
            </div>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ba0036] text-[10px] font-bold text-white">
              3
            </span>
          </li>
          <li className="flex items-center gap-3">
            <CalendarDays className="h-5 w-5 text-[#5f5e5e]" />
            <span className="text-[14px] font-medium text-[#1b1c1c]">Update calendar</span>
          </li>
          <li className="flex items-center gap-3">
            <DollarSign className="h-5 w-5 text-[#5f5e5e]" />
            <span className="text-[14px] font-medium text-[#1b1c1c]">Adjust pricing</span>
          </li>
        </ul>
      </div>
    </>
  );
}
