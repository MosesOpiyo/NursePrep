'use client'

import React, { useEffect, useState } from 'react'
import "../../styles/globals.css";
import { topicsArray } from "@/assets/servicesData/services";
import { testsArray } from "@/assets/servicesData/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/Footer";
import { FaQuestion } from "react-icons/fa";
import { FaChevronDown, FaCommentDots, FaBook, FaArrowRightToBracket, FaUser, FaGear, FaClone, FaBell, FaStethoscope, FaChevronLeft, FaChevronRight, FaBars } from "react-icons/fa6";
import { Input } from "@/components/ui/input"
import './DashboardSidebar.css';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
  import { useAuth } from '@/app/contexts/AuthContext';
  import { Button } from "@/components/ui/button"

type SidebarState = 'full' | 'icon' | 'hidden'

export default function DashboardSidebar() {
    const { isLoggedIn } = useAuth()
    const [sidebarState, setSidebarState] = useState<SidebarState>('full')

    if (!isLoggedIn) return null

    const toggleSidebar = () => {
      setSidebarState(current => {
        if (current === 'full') return 'icon'
        if (current === 'icon') return 'hidden'
        return 'full'
      })
    }
  
    const sidebarWidth = sidebarState === 'full' ? 'w-64' : sidebarState === 'icon' ? 'w-16' : 'w-0'
    const sidebarVisibility = sidebarState === 'hidden' ? 'invisible' : 'visible'



  return (
    <div className={`sidenav-container overflow-y-auto fixed h-full border-solid p-4 flex-col gap-8 hidden md:flex transition-all duration-300 ${sidebarWidth} ${sidebarVisibility}`}>
      {/* MENU-ITEMS */}
      <div className="dashboard-menu">
        <ul>
          <li>
            <Link href="/dashboard" className="flex gap-1 items-center">
              <FaClone />
              {sidebarState === "full" && <span>My Dashboard</span>}
            </Link>
          </li>

          <li>
            <Link href="/hesi" className="flex gap-1 items-center">
              <FaBook />
              {sidebarState === "full" && <span>My Courses</span>}
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/account_settings"
              className="flex gap-1 items-center"
            >
              <FaGear />
              {sidebarState === "full" && <span>Settings</span>}
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/account_settings"
              className="flex gap-1 items-center"
            >
              <FaCommentDots />
              {sidebarState === "full" && <span>Help & Support</span>}
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/account_settings"
              className="flex gap-1 items-center"
            >
              <FaArrowRightToBracket />
              {sidebarState === "full" && <span>Log Out</span>}
            </Link>
          </li>
        </ul>
      </div>

      <Button
        onClick={toggleSidebar}
        className={`fixed top-4 transition-all duration-300 ${sidebarState === 'hidden' ? 'left-4' : sidebarState === 'icon' ? 'left-20' : 'left-68'}`}
        variant="outline"
        size="icon"
      >
        {sidebarState === 'full' && <FaChevronLeft />}
        {sidebarState === 'icon' && <FaChevronRight />}
        {sidebarState === 'hidden' && <FaBars />}
      </Button>
    </div>
  );
}
