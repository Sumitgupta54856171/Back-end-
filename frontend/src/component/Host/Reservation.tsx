import { useState } from "react"
import {
  Calendar,
  Search,
  Home,
  Filter,
  ClipboardList,
  LogIn,
  LogOut,
  Users,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
} from "lucide-react"

type ReservationStatus = "Confirmed" | "Pending" | "Cancelled"

interface Reservation {
  id: string
  guestName: string
  guestType: "New guest" | "Returning guest"
  guestAvatar?: string
  guestInitials?: string
  propertyName: string
  propertyImage: string
  checkIn: string
  checkOut: string
  nights: number
  guests: number
  total: string
  status: ReservationStatus
}

const reservations: Reservation[] = [
  {
    id: "1",
    guestName: "Elena Rodriguez",
    guestType: "New guest",
    guestAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    propertyName: "Sunset Villa",
    propertyImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=100&h=100&fit=crop",
    checkIn: "Oct 12",
    checkOut: "Oct 16",
    nights: 4,
    guests: 3,
    total: "$1,240",
    status: "Confirmed",
  },
  {
    id: "2",
    guestName: "James Dawson",
    guestType: "Returning guest",
    guestInitials: "JD",
    propertyName: "Downtown Loft",
    propertyImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=100&h=100&fit=crop",
    checkIn: "Nov 02",
    checkOut: "Nov 05",
    nights: 3,
    guests: 2,
    total: "$850",
    status: "Pending",
  },
]

const tabs = ["Upcoming", "Current", "Past", "Cancelled", "Requests"]

const stats = [
  { label: "Pending requests", value: "3", icon: ClipboardList, color: "text-orange-500" },
  { label: "Check-ins today", value: "2", icon: LogIn, color: "text-green-500" },
  { label: "Check-outs today", value: "1", icon: LogOut, color: "text-blue-500" },
  { label: "Total booked nights", value: "234", icon: Home, color: "text-purple-500" },
]

export default function Reservations() {
  const [activeTab, setActiveTab] = useState("Upcoming")

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-10 md:px-10 md:py-12 lg:px-20 lg:py-16">
        {/* Header */}
        <div className="flex flex-col gap-6 border-b border-[#DDDDDD] pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-[28px] font-semibold leading-9 text-[#222222] md:text-[32px] md:leading-10">
              Reservations
            </h1>
            <p className="mt-2 text-base text-[#717171]">
              Manage guest bookings and requests
            </p>
          </div>
          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  activeTab === tab
                    ? "bg-[#222222] text-white"
                    : "bg-white text-[#222222] hover:bg-[#F7F7F7]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-[#DDDDDD] bg-white p-6"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#717171]">
                  {stat.label}
                </span>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <p className="mt-4 text-[32px] font-semibold leading-10 text-[#222222]">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Filter Bar */}
        <div className="mt-6 rounded-xl bg-[#F7F7F7] p-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="flex flex-1 items-center gap-2 rounded-lg border border-[#DDDDDD] bg-white px-3 py-2.5">
              <Calendar className="h-4 w-4 text-[#717171]" />
              <input
                type="text"
                placeholder="Date range"
                className="w-full bg-transparent text-sm text-[#222222] placeholder:text-[#717171] focus:outline-none"
              />
            </div>
            <div className="flex flex-1 items-center gap-2 rounded-lg border border-[#DDDDDD] bg-white px-3 py-2.5">
              <Search className="h-4 w-4 text-[#717171]" />
              <input
                type="text"
                placeholder="Search guest name"
                className="w-full bg-transparent text-sm text-[#222222] placeholder:text-[#717171] focus:outline-none"
              />
            </div>
            <div className="flex flex-1 items-center gap-2 rounded-lg border border-[#DDDDDD] bg-white px-3 py-2.5">
              <Home className="h-4 w-4 text-[#717171]" />
              <select className="w-full bg-transparent text-sm text-[#222222] focus:outline-none">
                <option>All properties</option>
              </select>
            </div>
            <div className="flex flex-1 items-center gap-2 rounded-lg border border-[#DDDDDD] bg-white px-3 py-2.5">
              <Filter className="h-4 w-4 text-[#717171]" />
              <select className="w-full bg-transparent text-sm text-[#222222] focus:outline-none">
                <option>Any status</option>
              </select>
            </div>
            <button className="rounded-lg bg-[#222222] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#000000]">
              Apply filters
            </button>
          </div>
        </div>

        {/* Table - Desktop */}
        <div className="mt-6 hidden overflow-hidden rounded-xl border border-[#DDDDDD] bg-white md:block">
          <div className="grid grid-cols-[1.5fr_1.5fr_1.2fr_0.8fr_0.8fr_1fr_0.5fr] gap-4 border-b border-[#DDDDDD] bg-white px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#717171]">
            <div>Guest</div>
            <div>Property</div>
            <div>Dates</div>
            <div>Guests</div>
            <div>Total</div>
            <div>Status</div>
            <div className="text-right">Actions</div>
          </div>
          {reservations.map((reservation) => (
            <div
              key={reservation.id}
              className="grid grid-cols-[1.5fr_1.5fr_1.2fr_0.8fr_0.8fr_1fr_0.5fr] gap-4 border-b border-[#DDDDDD] px-6 py-4 last:border-b-0"
            >
              {/* Guest */}
              <div className="flex items-center gap-3">
                {reservation.guestAvatar ? (
                  <img
                    src={reservation.guestAvatar}
                    alt={reservation.guestName}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DDDDDD] text-sm font-semibold text-[#222222]">
                    {reservation.guestInitials}
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold text-[#222222]">
                    {reservation.guestName}
                  </p>
                  <p className="text-xs text-[#717171]">{reservation.guestType}</p>
                </div>
              </div>
              {/* Property */}
              <div className="flex items-center gap-3">
                <img
                  src={reservation.propertyImage}
                  alt={reservation.propertyName}
                  className="h-10 w-10 rounded-lg object-cover"
                />
                <span className="text-sm text-[#222222]">
                  {reservation.propertyName}
                </span>
              </div>
              {/* Dates */}
              <div>
                <p className="text-sm text-[#222222]">
                  {reservation.checkIn} - {reservation.checkOut}
                </p>
                <p className="text-xs text-[#717171]">
                  {reservation.nights} nights
                </p>
              </div>
              {/* Guests */}
              <div className="flex items-center gap-1 text-sm text-[#222222]">
                <Users className="h-4 w-4 text-[#717171]" />
                {reservation.guests}
              </div>
              {/* Total */}
              <div className="text-sm font-semibold text-[#222222]">
                {reservation.total}
              </div>
              {/* Status */}
              <div>
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                    reservation.status === "Confirmed"
                      ? "bg-[#E6F7F4] text-[#00A699]"
                      : reservation.status === "Pending"
                      ? "bg-[#FFF4E6] text-[#FF8C00]"
                      : "bg-[#FFE6E6] text-[#BA1A1A]"
                  }`}
                >
                  {reservation.status}
                </span>
              </div>
              {/* Actions */}
              <div className="flex justify-end">
                <button className="rounded-md p-1 hover:bg-[#F7F7F7]">
                  <MoreVertical className="h-4 w-4 text-[#717171]" />
                </button>
              </div>
            </div>
          ))}
          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4">
            <p className="text-sm text-[#717171]">
              Showing 1 to 2 of 24 entries
            </p>
            <div className="flex gap-2">
              <button className="rounded-md border border-[#DDDDDD] p-2 hover:bg-[#F7F7F7]">
                <ChevronLeft className="h-4 w-4 text-[#717171]" />
              </button>
              <button className="rounded-md border border-[#DDDDDD] p-2 hover:bg-[#F7F7F7]">
                <ChevronRight className="h-4 w-4 text-[#717171]" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="mt-6 space-y-4 md:hidden">
          {reservations.map((reservation) => (
            <div
              key={reservation.id}
              className="rounded-xl border border-[#DDDDDD] bg-white p-4"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {reservation.guestAvatar ? (
                    <img
                      src={reservation.guestAvatar}
                      alt={reservation.guestName}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DDDDDD] text-sm font-semibold text-[#222222]">
                      {reservation.guestInitials}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-[#222222]">
                      {reservation.guestName}
                    </p>
                    <p className="text-xs text-[#717171]">
                      {reservation.guestType}
                    </p>
                  </div>
                </div>
                <button className="rounded-md p-1 hover:bg-[#F7F7F7]">
                  <MoreVertical className="h-4 w-4 text-[#717171]" />
                </button>
              </div>
              <div className="mt-4 flex items-center gap-3 border-t border-[#DDDDDD] pt-4">
                <img
                  src={reservation.propertyImage}
                  alt={reservation.propertyName}
                  className="h-12 w-12 rounded-lg object-cover"
                />
                <span className="text-sm font-semibold text-[#222222]">
                  {reservation.propertyName}
                </span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 border-t border-[#DDDDDD] pt-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#717171]">
                    Dates
                  </p>
                  <p className="mt-1 text-sm text-[#222222]">
                    {reservation.checkIn} - {reservation.checkOut}
                  </p>
                  <p className="text-xs text-[#717171]">
                    {reservation.nights} nights
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#717171]">
                    Guests
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-sm text-[#222222]">
                    <Users className="h-4 w-4 text-[#717171]" />
                    {reservation.guests}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#717171]">
                    Total
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#222222]">
                    {reservation.total}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#717171]">
                    Status
                  </p>
                  <span
                    className={`mt-1 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                      reservation.status === "Confirmed"
                        ? "bg-[#E6F7F4] text-[#00A699]"
                        : reservation.status === "Pending"
                        ? "bg-[#FFF4E6] text-[#FF8C00]"
                        : "bg-[#FFE6E6] text-[#BA1A1A]"
                    }`}
                  >
                    {reservation.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
          {/* Mobile Pagination */}
          <div className="flex items-center justify-between rounded-xl border border-[#DDDDDD] bg-white px-4 py-3">
            <p className="text-sm text-[#717171]">
              Showing 1 to 2 of 24
            </p>
            <div className="flex gap-2">
              <button className="rounded-md border border-[#DDDDDD] p-2 hover:bg-[#F7F7F7]">
                <ChevronLeft className="h-4 w-4 text-[#717171]" />
              </button>
              <button className="rounded-md border border-[#DDDDDD] p-2 hover:bg-[#F7F7F7]">
                <ChevronRight className="h-4 w-4 text-[#717171]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}