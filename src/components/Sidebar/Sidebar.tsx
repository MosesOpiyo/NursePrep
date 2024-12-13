"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { Book, HelpCircle } from 'lucide-react'
import { Subject } from '@/lib/subjects'

export default function Sidebar({ subject, testType }: { subject: Subject; testType: 'hesi' | 'teas' }) {
  const pathname = usePathname()
  const [openTopics, setOpenTopics] = useState<string[]>([])
  const [openSubtopics, setOpenSubtopics] = useState<string[]>([])

  useEffect(() => {
    const savedTopics = localStorage.getItem(`sidebarTopics-${subject.name}-${testType}`)
    const savedSubtopics = localStorage.getItem(`sidebarSubtopics-${subject.name}-${testType}`)
    if (savedTopics) setOpenTopics(JSON.parse(savedTopics))
    if (savedSubtopics) setOpenSubtopics(JSON.parse(savedSubtopics))
  }, [subject.name, testType])

  const handleTopicChange = (value: string[]) => {
    setOpenTopics(value)
    localStorage.setItem(`sidebarTopics-${subject.name}-${testType}`, JSON.stringify(value))
  }

  const handleSubtopicChange = (topicIndex: number, subtopicIndex: number, isOpen: boolean) => {
    const key = `subtopic-${topicIndex}-${subtopicIndex}`
    let newOpenSubtopics: string[]
    if (isOpen) {
      newOpenSubtopics = [...openSubtopics, key]
    } else {
      newOpenSubtopics = openSubtopics.filter(item => item !== key)
    }
    setOpenSubtopics(newOpenSubtopics)
    localStorage.setItem(`sidebarSubtopics-${subject.name}-${testType}`, JSON.stringify(newOpenSubtopics))
  }

  const getLink = (topicTitle: string, contentTitle: string) => {
    const baseUrl = testType === 'hesi' ? '/hesi-test' : '/teas-test'
    return `${baseUrl}/${subject.name.toLowerCase()}/${topicTitle.toLowerCase().replace(/\s+/g, '-')}/${contentTitle.toLowerCase().replace(/\s+/g, '-')}`
  }

  return (
    <div className="w-[300px] sticky h-svh top-0 left-0 bg-gray-100 p-4 overflow-auto">
      <h2 className="text-2xl font-bold mb-4">{subject.name}</h2>
      <Accordion type="multiple" value={openTopics} onValueChange={handleTopicChange} className="w-full">
        {subject.topics.map((topic, topicIndex) => (
          <AccordionItem key={topicIndex} value={`item-${topicIndex}`}>
            <AccordionTrigger>{topic.title}</AccordionTrigger>
            <AccordionContent>
              {topic.subtopic.map((subtopic, subtopicIndex) => (
                <Accordion 
                  key={subtopicIndex} 
                  type="single" 
                  collapsible 
                  className="ml-4"
                  value={openSubtopics.includes(`subtopic-${topicIndex}-${subtopicIndex}`) ? `subtopic-${topicIndex}-${subtopicIndex}` : ""}
                  onValueChange={(value) => handleSubtopicChange(topicIndex, subtopicIndex, value === `subtopic-${topicIndex}-${subtopicIndex}`)}
                >
                  <AccordionItem value={`subtopic-${topicIndex}-${subtopicIndex}`}>
                    <AccordionTrigger className="text-sm">
                      <div className='flex flex-col items-start text-start'>
                      {subtopic.title}
                      <p className="text-xs text-gray-500">
                       <span>{subtopic.lessonContent.filter(c => c.type === 'lesson').length} lessons |{' '}</span>
                        <span>{subtopic.lessonContent.filter(c => c.type === 'quiz').length} quizzes</span>
                      </p>
                      </div>
                      
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {subtopic.lessonContent.map((content, contentIndex) => (
                          <li key={contentIndex}>
                            <Link
                              href={getLink(topic.title, content.title)}
                              className={cn(
                                "flex items-center space-x-2 text-sm hover:underline",
                                pathname === getLink(topic.title, content.title)
                                  ? "text-blue-600 font-semibold"
                                  : "text-gray-700"
                              )}
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
                </Accordion>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

