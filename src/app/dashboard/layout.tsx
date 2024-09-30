'use client'


import "../../styles/globals.css";
import { topicsArray } from "@/assets/servicesData/services";
import { testsArray } from "@/assets/servicesData/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/Footer";
import { FaQuestion } from "react-icons/fa";
import { FaChevronDown, FaCommentDots, FaBook, FaArrowRightToBracket, FaUser, FaGear, FaClone, FaBell, FaStethoscope } from "react-icons/fa6";
import { Input } from "@/components/ui/input"
import './layout.css';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DashboardSidebar from "@/components/DashboardSidebar/DashboardSidebar";
import { useAuth } from '@/app/contexts/AuthContext' 
import { useState } from 'react'


type SidebarState = 'full' | 'icon' | 'hidden'


export default function DashboardLayout ({
    children
  }: {
    children: React.ReactNode;
  }) {


    const { isLoggedIn } = useAuth()
  const [sidebarState, setSidebarState] = useState<SidebarState>('full')

  const mainMargin = isLoggedIn
    ? sidebarState === 'full'
      ? 'ml-64'
      : sidebarState === 'icon'
      ? 'ml-16'
      : 'ml-0'
    : ''

    const sidebarWidth = sidebarState === 'full' ? 'sixteenrems' : sidebarState === 'icon' ? 'fourrems' : 'w-0'

  return (
    <section className="dashboard-container">
      <div className="flex relative layoutcontent-container h-full">
        {/* SIDENAV */}
        {/* <DashboardSidebar /> */}
        {/* END OF SIDENAV */}

        {/* CONTENT */}
        <div className="maincontent-container flex flex-col gap-4 relative">
          {/* DASHBOARD-NAV */}
          <div className={`dashboard-nav ${sidebarWidth} fixed bg-white z-50 flex`}>
            <div className="navbar-container">
              <Navbar />
            </div>

          </div>
          {/* END OF DASHBOARD-NAV */}

          {/* DASHBOARD CONTENT */}
          <div className="dashboard-content py-4 w-11/12 m-auto">
            {children}
          </div>
          {/* END OF DASHBOARD CONTENT */}
        </div>
      </div>

      {/* FOOTER */}
      {/* <div className="relative footer-container">
          <Footer />
        </div> */}
    </section>
  );
}
