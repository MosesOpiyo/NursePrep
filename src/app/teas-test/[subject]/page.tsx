import { notFound } from 'next/navigation'
import CourseBanner from '@/components/CourseBanner/CourseBanner'
import SubjectContent from '@/components/SubjectContent/SubjectContent'
import React from 'react'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/navbar'
import './page.css'

interface LessonContent {
  type: 'lesson' | 'quiz'
  title: string
  content: string
}

interface Subtopic {
  title: string
  lessonContent: LessonContent[]
}

interface Topic {
  title: string
  subtopic: Subtopic[]
}

interface Subject {
  name: string
  description: string
  image: string
  topics: Topic[]
}

const subjects: Record<string, Subject> = {
    english: {
        name: "English",
        description: "Master English language skills for TEAS",
        image: "/english.jpg",
        topics: [
          {
            title: "Vocabulary Acquisition",
            subtopic: [
              {
                title: "Determine meaning of words by analyzing word parts",
                lessonContent: [
                  {
                    type: "lesson",
                    title: "Determining Meaning Using Word Parts Introduction",
                    content: "In this lesson, we'll explore how to determine the meaning of words by analyzing their parts...",
                  },
                  {
                    type: "quiz",
                    title: "Determining Meaning Using Word Parts Introduction quiz",
                    content: "Test your knowledge on determining word meanings by analyzing word parts...",
                  },
                  {
                    type: "lesson",
                    title: "Using Prefixes to Determine Word Meaning",
                    content: "Learn how prefixes can change the meaning of words and how to use this knowledge to understand new vocabulary...",
                  },
                  {
                    type: "quiz",
                    title: "Using Prefixes to Determine Word Meaning Quiz (20 Questions)",
                    content: "Challenge yourself with this 20-question quiz on using prefixes to determine word meanings...",
                  },
                ],
              },
              {
                title: "Use Context Clues to Determine Word Meaning",
                lessonContent: [
                  {
                    type: "lesson",
                    title: "Use Context Clues to Determine Word Meaning",
                    content: "Discover strategies for using context clues to figure out the meaning of unfamiliar words...",
                  },
                  {
                    type: "quiz",
                    title: "Use Context Clues to Determine Word Meaning Quiz(20 Questions)",
                    content: "Put your context clue skills to the test with this comprehensive 20-question quiz...",
                  },
                  {
                    type: "lesson",
                    title: "Troublesome Word Pairs",
                    content: "Learn about commonly confused word pairs and how to distinguish between them...",
                  },
                  {
                    type: "quiz",
                    title: "Troublesome Word Pairs (30 Questions)",
                    content: "Challenge yourself with this extensive quiz on troublesome word pairs...",
                  },
                ],
              },
            ],
          },
          {
            title: "Conventions of Standard English",
            subtopic: [
              {
                title: "Conventions of Standard English Pre-Section Quiz",
                lessonContent: [
                  {
                    type: "lesson",
                    title: "Conventions of Standard English Pre-Section",
                    content: "An overview of the conventions of standard English that will be covered in this section...",
                  },
                  {
                    type: "quiz",
                    title: "Conventions of Standard English Pre-Section Quiz",
                    content: "Test your existing knowledge of standard English conventions before diving into the lessons...",
                  },
                ],
              },
              {
                title: "Conventions of Standard English Spelling",
                lessonContent: [
                  {
                    type: "lesson",
                    title: "Identifying Correct Spelling",
                    content: "Learn strategies for identifying correct spelling and common spelling rules...",
                  },
                  {
                    type: "quiz",
                    title: "Identifying Correct Spelling Quiz(20 Questions)",
                    content: "Practice identifying correct spellings with this 20-question quiz...",
                  },
                  {
                    type: "quiz",
                    title: "Identifying Misspelled Words (30 Questions)",
                    content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
                  },
                ],
              },
            ],
          },
        ],
      },
  
  // Add other subjects here...

  math: {
    name: "Math",
    description: "Master Math language skills for TEAS",
    image: "/math.jpg",
    topics: [
      {
        title: "Math Acquisition",
        subtopic: [
          {
            title: "Determine meaning of Maths by analyzing Math parts",
            lessonContent: [
              {
                type: "lesson",
                title: "Determining Meaning Using Math Parts Introduction",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
              {
                type: "quiz",
                title: "Determining Meaning Using Math Parts Introduction quiz",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
              {
                type: "lesson",
                title: "Using Prefixes to Determine Math Meaning",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
              {
                type: "quiz",
                title: "Using Prefixes to Determine Math Meaning Quiz (20 Questions)",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
            ],
          },
          {
            title: "Use Context Clues to Determine Math Meaning",
            lessonContent: [
              {
                type: "lesson",
                title: "Use Context Clues to Determine Math Meaning",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
              {
                type: "quiz",
                title: "Use Context Clues to Determine Math Meaning Quiz(20 Questions)",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
              {
                type: "lesson",
                title: "Troublesome Math Pairs",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
              {
                type: "quiz",
                title: "Troublesome Math Pairs (30 Questions)",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
            ],
          },
        ],
      },
      {
        title: "Conventions of Standard Math",
        subtopic: [
          {
            title: "Conventions of Standard Math Pre-Section Quiz",
            lessonContent: [
              {
                type: "lesson",
                title: "Conventions of Standard Math Pre-Section",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
              {
                type: "quiz",
                title: "Conventions of Standard Math Pre-Section Quiz",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
            ],
          },
          {
            title: "Conventions of Standard Math Spelling",
            lessonContent: [
              {
                type: "lesson",
                title: "Identifying Correct Spelling",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
              {
                type: "quiz",
                title: "Identifying Correct Spelling Quiz(20 Questions)",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
              {
                type: "quiz",
                title: "Identifying Misspelled Maths (30 Questions)",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
            ],
          },
        ],
      },
    ],
  },

  science: {
    name: "Science",
    description: "Master Science language skills for TEAS",
    image: "/Science.jpg",
    topics: [
      {
        title: "Science Acquisition",
        subtopic: [
          {
            title: "Determine meaning of Sciences by analyzing Science parts",
            lessonContent: [
              {
                type: "lesson",
                title: "Determining Meaning Using Science Parts Introduction",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
              {
                type: "quiz",
                title: "Determining Meaning Using Science Parts Introduction quiz",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
              {
                type: "lesson",
                title: "Using Prefixes to Determine Science Meaning",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
              {
                type: "quiz",
                title: "Using Prefixes to Determine Science Meaning Quiz (20 Questions)",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
            ],
          },
          {
            title: "Use Context Clues to Determine Science Meaning",
            lessonContent: [
              {
                type: "lesson",
                title: "Use Context Clues to Determine Science Meaning",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
              {
                type: "quiz",
                title: "Use Context Clues to Determine Science Meaning Quiz(20 Questions)",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
              {
                type: "lesson",
                title: "Troublesome Science Pairs",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
              {
                type: "quiz",
                title: "Troublesome Science Pairs (30 Questions)",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
            ],
          },
        ],
      },
      {
        title: "Conventions of Standard Science",
        subtopic: [
          {
            title: "Conventions of Standard Science Pre-Section Quiz",
            lessonContent: [
              {
                type: "lesson",
                title: "Conventions of Standard Science Pre-Section",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
              {
                type: "quiz",
                title: "Conventions of Standard Science Pre-Section Quiz",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
            ],
          },
          {
            title: "Conventions of Standard Science Spelling",
            lessonContent: [
              {
                type: "lesson",
                title: "Identifying Correct Spelling",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
              {
                type: "quiz",
                title: "Identifying Correct Spelling Quiz(20 Questions)",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
              {
                type: "quiz",
                title: "Identifying Misspelled Sciences (30 Questions)",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
            ],
          },
        ],
      },
    ],
  },

  reading: {
    name: "Reading",
    description: "Master Reading language skills for TEAS",
    image: "/reading.jpg",
    topics: [
      {
        title: "Reading Acquisition",
        subtopic: [
          {
            title: "Determine meaning of Readings by analyzing Reading parts",
            lessonContent: [
              {
                type: "lesson",
                title: "Determining Meaning Using Reading Parts Introduction",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
              {
                type: "quiz",
                title: "Determining Meaning Using Reading Parts Introduction quiz",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
              {
                type: "lesson",
                title: "Using Prefixes to Determine Reading Meaning",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
              {
                type: "quiz",
                title: "Using Prefixes to Determine Reading Meaning Quiz (20 Questions)",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
            ],
          },
          {
            title: "Use Context Clues to Determine Reading Meaning",
            lessonContent: [
              {
                type: "lesson",
                title: "Use Context Clues to Determine Reading Meaning",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
              {
                type: "quiz",
                title: "Use Context Clues to Determine Reading Meaning Quiz(20 Questions)",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
              {
                type: "lesson",
                title: "Troublesome Reading Pairs",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
              {
                type: "quiz",
                title: "Troublesome Reading Pairs (30 Questions)",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
            ],
          },
        ],
      },
      {
        title: "Conventions of Standard Reading",
        subtopic: [
          {
            title: "Conventions of Standard Reading Pre-Section Quiz",
            lessonContent: [
              {
                type: "lesson",
                title: "Conventions of Standard Reading Pre-Section",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
              {
                type: "quiz",
                title: "Conventions of Standard Reading Pre-Section Quiz",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
            ],
          },
          {
            title: "Conventions of Standard Reading Spelling",
            lessonContent: [
              {
                type: "lesson",
                title: "Identifying Correct Spelling",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
              {
                type: "quiz",
                title: "Identifying Correct Spelling Quiz(20 Questions)",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
              {
                type: "quiz",
                title: "Identifying Misspelled Readings (30 Questions)",
                content: "Challenge yourself to identify misspelled words in this comprehensive 30-question quiz...",
              },
            ],
          },
        ],
      },
    ],
  },
}

export default function SubjectPage({ params }: { params: { subject: string } }) {
  const subject = subjects[params.subject]

  if (!subject) {
    notFound()
  }

  return (
    <>
    {/* NAVBAR */}
    <section className="navbar-container">
          <Navbar></Navbar>
        </section>

    <div className="container mx-auto py-12">
      <CourseBanner
        title={subject.name}
        description={subject.description}
        image={subject.image}
      />
      <SubjectContent subject={params.subject} topics={subject.topics} />
    </div>

    {/* FOOTER */}
    <Footer />
    
    </>
    
  )
}