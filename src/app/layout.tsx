import { Outfit } from 'next/font/google';
import type { Metadata } from "next";
import ReactQueryProvider from '@/lib/providers/reactQueryProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NursePrep',
  description: 'Pass your nursing entry exams on your first try',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
        </body>
    </html>
  )
}
