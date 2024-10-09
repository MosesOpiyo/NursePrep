import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { subjects } from '@/lib/subjects'

export default function TopicPage({ params }: { params: { subject: string; topic: string; type: string } }) {
  const { subject, topic, type } = params
  const subjectData = subjects[subject]

  if (!subjectData) {
    notFound()
  }

  const topicData = subjectData.topics.find(t => t.title.toLowerCase().replace(/\s+/g, '-') === topic)
  if (!topicData) {
    notFound()
  }

  const content = topicData.subtopic
    .flatMap(st => st.lessonContent)
    .find(c => c.type === type)

  if (!content) {
    notFound()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{content.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is the {type} content for {content.title} in the {subject} subject.</p>
        {/* Add actual lesson or quiz content here */}
      </CardContent>
    </Card>
  )
}