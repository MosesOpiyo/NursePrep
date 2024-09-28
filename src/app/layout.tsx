import { Outfit } from 'next/font/google';
import '../styles/globals.css'
import DashboardSidebar from '@/components/DashboardSidebar/DashboardSidebar';
import LayoutWrapper from '@/components/LayoutWrapper/LayoutWrapper';
import { AuthProvider } from './contexts/AuthContext';

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'NursePrep',
  description: 'Pass your nursing entry exams on your first try',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <AuthProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
