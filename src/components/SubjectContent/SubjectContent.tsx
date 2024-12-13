"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Book, HelpCircle } from 'lucide-react'

interface LessonContent {
  type: 'lesson' | 'quiz'
  title: string
}

interface Subtopic {
  title: string
  lessonContent: LessonContent[]
}

interface Topic {
  title: string
  subtopic: Subtopic[]
}

interface SubjectContentProps {
  subject: string
  topics: Topic[]
  testType: 'hesi' | 'teas'  // New prop to specify the test type
}

export default function SubjectContent({ subject, topics, testType }: SubjectContentProps) {
  const [openItems, setOpenItems] = useState<Record<string, string[]>>({})

  const toggleAll = (topicIndex: number, open: boolean) => {
    setOpenItems(prev => ({
      ...prev,
      [topicIndex]: open ? topics[topicIndex].subtopic.map((_, index) => `item-${topicIndex}-${index}`) : []
    }))
  }

  // Function to generate the correct link based on the test type
  const getLink = (topic: string, content: string) => {
    const baseUrl = testType === 'hesi' ? '/hesi-test' : '/teas-test'
    return `${baseUrl}/${subject}/${topic.toLowerCase().replace(/\s+/g, '-')}/${content.toLowerCase().replace(/\s+/g, '-')}`
  }

  return (
    <div className="space-y-8">
      {topics.map((topic, topicIndex) => (
        <div key={topicIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-100 px-6 py-4">
            <h2 className="text-2xl font-bold">{topic.title}</h2>
          </div>
          <div className="p-6">
            <div className="flex justify-end space-x-4 mb-4">
              <Button onClick={() => toggleAll(topicIndex, true)}>Expand All</Button>
              <Button onClick={() => toggleAll(topicIndex, false)}>Collapse All</Button>
            </div>
            <Accordion
              type="multiple"
              value={openItems[topicIndex] || []}
              onValueChange={(value) => setOpenItems(prev => ({ ...prev, [topicIndex]: value }))}
            >
              {topic.subtopic.map((subtopic, subtopicIndex) => (
                <AccordionItem key={subtopicIndex} value={`item-${topicIndex}-${subtopicIndex}`}>
                  <AccordionTrigger>{subtopic.title}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {subtopic.lessonContent.map((content, contentIndex) => (
                        <li key={contentIndex}>
                          <Link
                            className="flex items-center space-x-2 text-blue-600 hover:underline"
                            href={getLink(topic.title, content.title)}
                          >
                            {content.type === 'lesson' ? (
                              <Book className="w-4 h-4" />
                            ) : (
                              <HelpCircle className="w-4 h-4" />
                            )}
                            <span>{content.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      ))}
    </div>
  )
}

