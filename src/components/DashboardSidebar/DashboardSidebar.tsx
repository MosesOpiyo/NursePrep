'use client'

import React from 'react'
import "../../styles/globals.css"
import Link from "next/link"
import { FaClone, FaBook, FaGear, FaCommentDots, FaArrowRightToBracket, FaChevronLeft, FaChevronRight, FaBars } from "react-icons/fa6"
import './DashboardSidebar.css'
import { useAuth } from '@/app/contexts/AuthContext'
import { Button } from "@/components/ui/button"

type SidebarState = 'full' | 'icon' | 'hidden'

interface DashboardSidebarProps {
  sidebarState: SidebarState
  setSidebarState: React.Dispatch<React.SetStateAction<SidebarState>>
}

export default function DashboardSidebar({ sidebarState, setSidebarState }: DashboardSidebarProps) {
  const { isLoggedIn } = useAuth()

  if (!isLoggedIn) return null

  const toggleSidebar = () => {
    setSidebarState(current => {
      if (current === 'full') return 'icon'
      if (current === 'icon') return 'hidden'
      return 'full'
    })
  }

  const sidebarWidth = sidebarState === 'full' ? 'w-64' : sidebarState === 'icon' ? 'w-16' : 'w-0'

  return (
    <>
      <div className={`sidenav-container overflow-y-auto fixed h-full border-solid flex flex-col transition-all duration-300 ${sidebarWidth}`}>
        <div className="flex items-center justify-between p-4 border-b">
          {sidebarState === 'full' && <span className="font-semibold">Dashboard</span>}
          {sidebarState !== 'hidden' && (
            <Button
              onClick={toggleSidebar}
              variant="ghost"
              size="icon"
              className="ml-auto"
            >
              {sidebarState === 'full' ? <FaChevronLeft /> : <FaChevronRight />}
            </Button>
          )}
        </div>
        {sidebarState !== 'hidden' && (
          <div className="dashboard-menu flex-1 p-4">
            <ul className="space-y-2">
              <li>
                <Link href="/dashboard" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                  <FaClone className="text-gray-500" />
                  {sidebarState === 'full' && <span>My Dashboard</span>}
                </Link>
              </li>
              <li>
                <Link href="/hesi" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                  <FaBook className="text-gray-500" />
                  {sidebarState === 'full' && <span>My Courses</span>}
                </Link>
              </li>
              <li>
                <Link href="/dashboard/account_settings" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                  <FaGear className="text-gray-500" />
                  {sidebarState === 'full' && <span>Settings</span>}
                </Link>
              </li>
              <li>
                <Link href="/dashboard/account_settings" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                  <FaCommentDots className="text-gray-500" />
                  {sidebarState === 'full' && <span>Help & Support</span>}
                </Link>
              </li>
              <li>
                <Link href="/dashboard/account_settings" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                  <FaArrowRightToBracket className="text-gray-500" />
                  {sidebarState === 'full' && <span>Log Out</span>}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      {sidebarState === 'hidden' && (
        <Button
          onClick={toggleSidebar}
          variant="ghost"
          size="icon"
          className="fixed left-4 toggle-button"
        >
          <FaBars />
          <span>Show Menu</span>
        </Button>
      )}
    </>
  )
}