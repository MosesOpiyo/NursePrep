import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { subjects } from '@/lib/subjects'

export default function TopicPage({ params }: { params: { subject: string; topic: string; content: string } }) {
  const { subject, topic, content } = params
  const subjectData = subjects[subject]

  if (!subjectData) {
    notFound()
  }

  const topicData = subjectData.topics.find(t => t.title.toLowerCase().replace(/\s+/g, '-') === topic)
  if (!topicData) {
    notFound()
  }

  const contentData = topicData.subtopic
    .flatMap(st => st.lessonContent)
    .find(c => c.title.toLowerCase().replace(/\s+/g, '-') === content)

  if (!contentData) {
    notFound()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{contentData.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is the {contentData.type} content for {contentData.title} in the {subject} subject.</p>
        {/* Add actual lesson or quiz content here */}
        <p>{contentData.content}</p>
      </CardContent>
    </Card>
  )
}