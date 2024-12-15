import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/navbar'
import Sidebar from '@/components/Sidebar/Sidebar'
import { subjects } from '@/lib/subjects'
import './layout.css'

export default function SubjectLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { subject: string }
}) {
  const subject = subjects[params.subject]

  if (!subject) {
    return <div>Subject not found</div>
  }

  return (
    <>
     {/* NAVBAR */}
     <section className="navbar-container">
        <Navbar></Navbar>
      </section>

      <div className="flex min-h-screen border-t border-solid border-[#0000001c]">
      <Sidebar subject={subject} testType="teas"/>
      <main className="flex-1 p-6 overflow-auto">{children}</main>

      
    </div>
    {/* FOOTER */}
    <Footer />
      </>
    
  )
}