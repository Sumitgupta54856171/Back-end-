import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import HostNavbar from "./Navbar";
import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>

      <div className="flex min-h-screen w-full">
        <HostNavbar />
        <main className="flex-1 w-full">
          <div className="flex items-center p-4 border-b">
             
           
            <SidebarTrigger />
            <p className=" border-[#5F5E5E] w-full h-[50px]"></p>
          </div>
          <div className="w-full">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

export default Layout
