"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { Book, HelpCircle } from 'lucide-react'
import { Subject } from '@/lib/subjects'

export default function Sidebar({ subject }: { subject: Subject }) {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-gray-100 p-4 overflow-auto">
      <h2 className="text-2xl font-bold mb-4">{subject.name}</h2>
      <Accordion type="multiple" className="w-full">
        {subject.topics.map((topic, topicIndex) => (
          <AccordionItem key={topicIndex} value={`item-${topicIndex}`}>
            <AccordionTrigger>{topic.title}</AccordionTrigger>
            <AccordionContent>
              {topic.subtopic.map((subtopic, subtopicIndex) => (
                <Accordion key={subtopicIndex} type="single" collapsible className="ml-4">
                  <AccordionItem value={`subtopic-${topicIndex}-${subtopicIndex}`}>
                    <AccordionTrigger className="text-sm">
                      {subtopic.title}
                      <span className="text-xs text-gray-500 ml-2">
                        {subtopic.lessonContent.filter(c => c.type === 'lesson').length} lessons |{' '}
                        {subtopic.lessonContent.filter(c => c.type === 'quiz').length} quizzes
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {subtopic.lessonContent.map((content, contentIndex) => (
                          <li key={contentIndex}>
                            <Link
                              href={`/teas-test/${subject.name.toLowerCase()}/${topic.title.toLowerCase().replace(/\s+/g, '-')}/${content.title.toLowerCase().replace(/\s+/g, '-')}`}
                              className={cn(
                                "flex items-center space-x-2 text-sm hover:underline",
                                pathname === `/teas-test/${subject.name.toLowerCase()}/${topic.title.toLowerCase().replace(/\s+/g, '-')}/${content.title.toLowerCase().replace(/\s+/g, '-')}`
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