import { Link } from "react-router"
import { useState } from "react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from "@/components/ui/sidebar"
import { navitems } from "./hostdata/data"



const HostNavbar = ()=>{
    const [active,setActive] = useState("Dashboard")

    return (<>
      <Sidebar className="bg-white border-r">
            
            <SidebarHeader className="px-6 py-8 flex">
                <img src="/home/StayHub.svg" alt="" />
          
                <p className="text-[#FF385C] text-2xl font-bold tracking-tight">StayHub</p>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup className="flex flex-col gap-2 px-3">
                    
                    {/* Loop through nav items */}
                    {navitems.map((item) => (
                        <Link
                            key={item.name}
                            to={`/host/${item.name.toLowerCase()}`}
                            onClick={() => setActive(item.name)}
                            className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                                active === item.name
                                    ? "bg-[#EBEBEB] text-black font-bold" // Active styling (grey bg)
                                    : "text-gray-600 font-medium hover:bg-gray-100 hover:text-black" // Inactive styling
                            }`}
                        >
                            <img src={item.icon} alt={item.name} className="w-6 h-6" />
                            <span className="text-[15px]">{item.name}</span>
                        </Link>
                    ))}

                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t border-gray-100 px-3 py-4 mt-auto">
                {/* Settings Button */}
                <Link
                    to="/settings"
                    className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-600 font-medium hover:bg-gray-100 hover:text-black transition-all"
                >
                    <img src="/hosthome/settings.svg" alt="Settings" className="w-6 h-6" />
                    <span className="text-[15px]">Settings</span>
                </Link>
            </SidebarFooter>

        </Sidebar>
    

    
    </>
    )

}

export default HostNavbar;