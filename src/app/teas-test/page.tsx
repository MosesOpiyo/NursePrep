import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const subjects = [
  { name: 'English', slug: 'english' },
  { name: 'Math', slug: 'math' },
  { name: 'Science', slug: 'science' },
  { name: 'Reading', slug: 'reading' },
]

export default function TeasPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">TEAS Subjects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {subjects.map((subject) => (
          <Link href={`/teas-test/${subject.slug}`} key={subject.slug}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{subject.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore {subject.name} topics for TEAS</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}