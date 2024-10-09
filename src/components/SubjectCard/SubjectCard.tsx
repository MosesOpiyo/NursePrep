import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SubjectCardProps {
  name: string
  slug: string
}

export default function SubjectCard({ name, slug }: SubjectCardProps) {
  return (
    <Link href={`/teas/${slug}`}>
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Explore {name} topics for TEAS</p>
        </CardContent>
      </Card>
    </Link>
  )
}