import Sidebar from '@/components/Sidebar/Sidebar'
import { subjects } from '@/lib/subjects'

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
    <div className="flex min-h-screen">
      <Sidebar subject={subject} />
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  )
}