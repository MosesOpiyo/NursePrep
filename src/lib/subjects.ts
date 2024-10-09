export interface LessonContent {
    type: 'lesson' | 'quiz'
    title: string
  }
  
  export interface Subtopic {
    title: string
    lessonContent: LessonContent[]
  }
  
  export interface Topic {
    title: string
    subtopic: Subtopic[]
  }
  
  export interface Subject {
    name: string
    description: string
    image: string
    topics: Topic[]
  }
  
  export const subjects: Record<string, Subject> = {
    english: {
      name: "English",
      description: "Master English language skills for TEAS",
      image: "/placeholder.svg?height=400&width=800",
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
                },
                {
                  type: "quiz",
                  title: "Determining Meaning Using Word Parts Introduction quiz",
                },
                {
                  type: "lesson",
                  title: "Using Prefixes to Determine Word Meaning",
                },
                {
                  type: "quiz",
                  title: "Using Prefixes to Determine Word Meaning Quiz (20 Questions)",
                },
              ],
            },
            {
              title: "Use Context Clues to Determine Word Meaning",
              lessonContent: [
                {
                  type: "lesson",
                  title: "Use Context Clues to Determine Word Meaning",
                },
                {
                  type: "quiz",
                  title: "Use Context Clues to Determine Word Meaning Quiz(20 Questions)",
                },
                {
                  type: "lesson",
                  title: "Troublesome Word Pairs",
                },
                {
                  type: "quiz",
                  title: "Troublesome Word Pairs (30 Questions)",
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
                },
                {
                  type: "quiz",
                  title: "Conventions of Standard English Pre-Section Quiz",
                },
              ],
            },
            {
              title: "Conventions of Standard English Spelling",
              lessonContent: [
                {
                  type: "lesson",
                  title: "Identifying Correct Spelling",
                },
                {
                  type: "quiz",
                  title: "Identifying Correct Spelling Quiz(20 Questions)",
                },
                {
                  type: "quiz",
                  title: "Identifying Misspelled Words (30 Questions)",
                },
              ],
            },
          ],
        },
      ],
    },
    // Add other subjects here...
  }