'use client'

import { useState } from 'react'
import '../../styles/globals.css'
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar'
import { useAuth } from '@/app/contexts/AuthContext' 

type SidebarState = 'full' | 'icon' | 'hidden'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAuth()
  const [sidebarState, setSidebarState] = useState<SidebarState>('full')

  const mainMargin = isLoggedIn
    ? sidebarState === 'full'
      ? 'ml-64'
      : sidebarState === 'icon'
      ? 'ml-16'
      : 'ml-0'
    : ''

  return (
    <div className="flex">
      <DashboardSidebar sidebarState={sidebarState} setSidebarState={setSidebarState} />
      <main className={`flex-1 transition-all duration-300 ${mainMargin}`}>
        {children}
      </main>
    </div>
  )
}