import { Outfit } from 'next/font/google';

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
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
