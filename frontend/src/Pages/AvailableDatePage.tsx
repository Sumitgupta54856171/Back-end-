import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ChevronLeft, ChevronRight, Sync, Download, MessageSquare, CalendarDays, Banknote } from 'lucide-react';

const calendarData: Record<string, { status: 'available' | 'booked' | 'blocked'; price?: string }> = {
  '2024-10-01': { status: 'available', price: '$120' },
  '2024-10-02': { status: 'booked', price: '$120' },
  '2024-10-03': { status: 'blocked' },
  '2024-10-04': { status: 'available', price: '$120' },
  '2024-10-05': { status: 'available', price: '$150' },
  '2024-10-06': { status: 'available', price: '$150' },
  '2024-10-07': { status: 'booked' },
  '2024-10-08': { status: 'booked' },
  '2024-10-09': { status: 'available', price: '$120' },
  '2024-10-10': { status: 'available', price: '$120' },
  '2024-10-11': { status: 'available', price: '$140' },
  '2024-10-12': { status: 'available', price: '$140' },
};

const getStatusStyle = (status?: string) => {
  switch (status) {
    case 'booked': return 'bg-[#ffdad6] text-[#ba1a1a]';
    case 'blocked': return 'bg-[#efeded] text-[#636262]';
    case 'available': return 'bg-[#008379]/10 text-[#00685f] border border-[#008379]/30';
    default: return '';
  }
};

export default function AvailableDatePage() {
  const [date, setDate] = useState(new Date(2024, 9, 1));
  const [viewMode, setViewMode] = useState('Month');

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view !== 'month') return null;
    const dateStr = date.toISOString().split('T')[0];
    const data = calendarData[dateStr];
    
    return (
      <div className="flex h-full w-full flex-col p-2">
        <span className="text-[14px] font-semibold text-[#1b1c1c]">{date.getDate()}</span>
        {data?.price && (
          <div className={`mt-2 text-center text-[16px] font-semibold ${data.status === 'booked' ? 'text-[#5f5e5e] line-through' : 'text-[#1b1c1c]'}`}>
            {data.price}
          </div>
        )}
        {data?.status && (
          <div className={`mt-auto rounded py-1 text-center text-[12px] font-semibold ${getStatusStyle(data.status)}`}>
            {data.status === 'available' ? 'Available' : data.status === 'booked' ? 'Booked' : 'Blocked'}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <style>{`
        .custom-calendar {
          width: 100%;
          border: none;
          font-family: 'Inter', sans-serif;
          background: transparent;
        }
        .custom-calendar .react-calendar__navigation {
          display: none;
        }
        .custom-calendar .react-calendar__month-view__weekdays {
          text-align: center;
          text-transform: uppercase;
          font-weight: 600;
          font-size: 12px;
          color: #5f5e5e;
          margin-bottom: 0;
          border-bottom: 1px solid #e3e2e2;
          background: #f5f3f3;
        }
        .custom-calendar .react-calendar__month-view__weekdays__weekday {
          padding: 12px 0;
        }
        .custom-calendar .react-calendar__month-view__days {
          border-left: 1px solid #e3e2e2;
          border-bottom: 1px solid #e3e2e2;
        }
        .custom-calendar .react-calendar__month-view__days__day {
          height: 120px;
          display: flex;
          flex-direction: column;
          border-right: 1px solid #e3e2e2;
          border-top: 1px solid #e3e2e2;
          position: relative;
        }
        .custom-calendar .react-calendar__tile {
          max-width: 100%;
          text-align: left;
          background: none;
          color: #1b1c1c;
          padding: 0;
        }
        .custom-calendar .react-calendar__tile:enabled:hover,
        .custom-calendar .react-calendar__tile:enabled:focus {
          background-color: #f5f3f3;
          border-radius: 0;
        }
        .custom-calendar .react-calendar__tile--active {
          background: #ba0036 !important;
          color: white !important;
          border-radius: 0;
        }
        .custom-calendar .react-calendar__tile--active .text-[#1b1c1c],
        .custom-calendar .react-calendar__tile--active .text-[#5f5e5e] {
          color: white !important;
        }
        .custom-calendar .react-calendar__tile--now {
          background: #f5f3f3;
          border-radius: 0;
        }
        .custom-calendar .react-calendar__month-view__days__day--weekend {
          color: #1b1c1c;
        }
        .custom-calendar .react-calendar__month-view__days__day--neighboringMonth {
          color: #5f5e5e;
          opacity: 0.5;
          background: #f5f3f3;
        }
      `}</style>
      <div className="min-h-screen bg-[#fbf9f9] font-sans text-[#1b1c1c]">
        <main className="mx-auto max-w-[1280px] px-6 py-8 md:px-10 lg:px-20">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-[28px] font-semibold leading-[36px] md:text-[32px] md:leading-[40px] md:tracking-[-0.01em] text-[#1b1c1c] mb-1">
                Availability calendar
              </h1>
              <p className="text-[16px] text-[#5f5e5e]">Manage dates and pricing</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <select className="bg-white border border-[#dbdad9] rounded-lg px-4 py-2 text-[14px] font-semibold focus:border-[#1b1c1c] focus:ring-0 outline-none h-10">
                <option>Seaside Villa</option>
                <option>Downtown Loft</option>
              </select>
              <div className="flex bg-[#f5f3f3] rounded-lg p-1 h-10">
                {['Month', 'Week', 'Day'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setViewMode(mode)}
                    className={`px-4 py-1 rounded text-[14px] font-semibold transition-colors ${
                      viewMode === mode 
                        ? 'bg-white shadow-sm text-[#1b1c1c]' 
                        : 'text-[#5f5e5e] hover:text-[#1b1c1c]'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
              <button className="h-10 px-4 border border-[#dbdad9] rounded-lg text-[14px] font-semibold hover:bg-[#f5f3f3] transition-colors">
                Today
              </button>
            </div>
          </div>

          {/* Toolbar */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 bg-white rounded-xl p-4 shadow-sm border border-[#e3e2e2]">
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-[#f5f3f3] rounded-full transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="text-[18px] font-semibold min-w-[120px] text-center">October 2024</span>
              <button className="p-2 hover:bg-[#f5f3f3] rounded-full transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-[#5f5e5e] hover:text-[#1b1c1c] border border-[#e3e2e2] rounded-lg text-[14px] font-semibold transition-colors h-10">
                <Sync className="h-[18px] w-[18px]" /> Sync with Google
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-[#5f5e5e] hover:text-[#1b1c1c] border border-[#e3e2e2] rounded-lg text-[14px] font-semibold transition-colors h-10">
                <Download className="h-[18px] w-[18px]" /> Import
              </button>
              <button className="px-4 py-2 bg-[#1b1c1c] text-white rounded-lg text-[14px] font-semibold hover:bg-[#303031] transition-colors h-10">
                Set pricing
              </button>
              <button className="px-4 py-2 bg-[#ba0036] text-white rounded-lg text-[14px] font-semibold hover:bg-[#920029] transition-colors h-10 shadow-sm hover:shadow-md">
                Block dates
              </button>
            </div>
          </div>

          {/* Content Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-4">
            {/* Calendar Grid */}
            <div className="lg:col-span-3 bg-white rounded-xl border border-[#e3e2e2] shadow-sm overflow-hidden flex flex-col">
              <Calendar
                onChange={setDate}
                value={date}
                view="month"
                tileContent={tileContent}
                className="custom-calendar"
              />
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              {/* Legend */}
              <div className="bg-white rounded-xl p-6 border border-[#e3e2e2] shadow-sm">
                <h3 className="text-[18px] font-semibold mb-4">Legend</h3>
                <div className="flex flex-col gap-3 text-[14px] text-[#5f5e5e]">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded bg-[#008379]/20 border border-[#008379]/50"></div> Available
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded bg-[#ffdad6] border border-[#ba1a1a]"></div> Booked
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded bg-[#efeded] border border-[#e2dfde]"></div> Blocked
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#ba0036] mx-1"></div> Custom Price
                  </div>
                </div>
              </div>

              {/* Pricing Rules */}
              <div className="bg-white rounded-xl p-6 border border-[#e3e2e2] shadow-sm">
                <h3 className="text-[18px] font-semibold mb-4">Pricing Rules</h3>
                <div className="mb-6">
                  <label className="block text-[12px] font-semibold text-[#5f5e5e] mb-2">Base Price</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-[#1b1c1c] font-semibold">$</span>
                    <input
                      className="w-full pl-8 pr-4 py-2 border border-[#e3e2e2] rounded-lg focus:border-[#1b1c1c] focus:ring-0 outline-none text-[16px]"
                      type="number"
                      defaultValue="120"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] font-semibold">Seasonal (Summer)</span>
                    <span className="text-[14px] text-[#008379]">+30%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] font-semibold">Weekend Premium</span>
                    <span className="text-[14px] text-[#008379]">+$30</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-[#e3e2e2]">
                    <span className="text-[14px] font-semibold">Minimum Stay</span>
                    <select className="bg-white border border-[#e3e2e2] rounded py-1 px-2 text-[12px] font-semibold outline-none">
                      <option>2 nights</option>
                      <option>3 nights</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full py-12 px-6 md:px-10 lg:px-20 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 bg-[#f5f3f3] border-t border-[#e3e2e2] mt-12">
          <div className="col-span-1 flex flex-col gap-4">
            <span className="text-[18px] font-bold text-[#1b1c1c]">StayHub</span>
            <span className="text-[14px] text-[#5f5e5e]">© 2024 StayHub, Inc.</span>
          </div>
          <div className="col-span-1 md:col-span-3 flex flex-wrap gap-x-8 gap-y-4">
            <a className="text-[#5f5e5e] hover:text-[#ba0036] text-[14px] font-semibold transition-colors" href="#">Privacy</a>
            <a className="text-[#5f5e5e] hover:text-[#ba0036] text-[14px] font-semibold transition-colors" href="#">Terms</a>
            <a className="text-[#5f5e5e] hover:text-[#ba0036] text-[14px] font-semibold transition-colors" href="#">Sitemap</a>
            <a className="text-[#5f5e5e] hover:text-[#ba0036] text-[14px] font-semibold transition-colors" href="#">Company details</a>
            <a className="text-[#5f5e5e] hover:text-[#ba0036] text-[14px] font-semibold transition-colors" href="#">Destinations</a>
          </div>
        </footer>
      </div>
    </>
  );
}
