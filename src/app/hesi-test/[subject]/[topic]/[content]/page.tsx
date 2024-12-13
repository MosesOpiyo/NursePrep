"use client"

import { useState } from "react";
import { notFound, useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { subjects, Subject } from "@/lib/subjects";
import { ChevronLeft, ChevronRight, Eye, EyeOff } from 'lucide-react';
import nurse from '../../../../../assets/renal.png';
import Image from "next/image";
import './page.css';

// Mock quiz data - replace with actual data from your subjects
const quizQuestions = [
  {
    id: 1,
    question: "A rural community health nurse is developing a plan to improve healthcare delivery for migrant farmworkers. To identify health services data for this minority group, the nurse should gather information from which of the following sources?",
    options: [
      { id: 'A', text: 'Agency for Healthcare Research and Quality' },
      { id: 'B', text: 'National Institutes of Health' },
      { id: 'C', text: 'Department of Agriculture' },
      { id: 'D', text: 'World Health Organization' }
    ],
    correctAnswer: 'A',
    explanation: "The Agency for Healthcare Research and Quality is a federal agency that conducts research on health care quality, access, and outcomes. It provides specific data on migrant farmworkers."
  },
  // Add more questions as needed
];

export default function TopicPage({
  params,
}: {
  params: { subject: string; topic: string; content: string };
}) {
  const router = useRouter();
  const [showAnswers, setShowAnswers] = useState(false);
  const { subject, topic, content } = params;
  const subjectData = subjects[subject];

  if (!subjectData) {
    notFound();
  }

  const topicData = subjectData.topics.find(
    (t) => t.title.toLowerCase().replace(/\s+/g, "-") === topic
  );
  if (!topicData) {
    notFound();
  }

  const contentData = topicData.subtopic
    .flatMap((st) => st.lessonContent)
    .find((c) => c.title.toLowerCase().replace(/\s+/g, "-") === content);

  if (!contentData) {
    notFound();
  }

  // Calculate total lessons and current lesson index
  const allLessons = getAllLessons(subjectData);
  const currentLessonIndex = allLessons.findIndex(
    (lesson) => lesson.title.toLowerCase().replace(/\s+/g, "-") === content
  );

  const totalLessons = allLessons.length;
  const progress = ((currentLessonIndex + 1) / totalLessons) * 100;

  const prevLesson = allLessons[currentLessonIndex - 1];
  const nextLesson = allLessons[currentLessonIndex + 1];

  const navigateToLesson = (lesson: any) => {
    if (lesson) {
      const lessonTopic = subjectData.topics.find((t) =>
        t.subtopic.some((st) => st.lessonContent.includes(lesson))
      );
      if (lessonTopic) {
        router.push(
          `/hesi-test/${subject}/${lessonTopic.title.toLowerCase().replace(/\s+/g, "-")}/${lesson.title.toLowerCase().replace(/\s+/g, "-")}`
        );
      }
    }
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
      <div className="flex justify-between mb-8">
        <Button
          variant="outline"
          onClick={() => navigateToLesson(prevLesson)}
          disabled={!prevLesson}
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button
          onClick={() => navigateToLesson(nextLesson)}
          disabled={!nextLesson}
        >
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      
        <CardTitle className="text-2xl">{contentData.title}</CardTitle>
        <div className="flex items-center gap-4 mt-4">
          <Progress value={progress} className="flex-grow" />
          <span className="text-sm text-gray-500">
            {currentLessonIndex + 1} of {totalLessons} topics
          </span>
        </div>
      </CardHeader>
      <CardContent>
        {contentData.type === 'lesson' ? (
          // Lesson Content
          <div className="flex flex-col gap-4">
            <p className="mb-8 flex flex-col">
              <span className="font-bold">Introduction:</span>
              This is the {contentData.type} content for {contentData.title} in the{" "}
              {subject} subject.
            </p>

            <h2 className="font-bold text-2xl">Renal Changes in pregnancy </h2>

            <p className="pl-4">
              The renal system undergoes significant changes to maintain fluid and
              electrolyte balance, excrete metabolic wastes, and regulate blood
              pressure during pregnancy
            </p>

            <div className="pl-4">
              <p className="pl-8">The main renal changes include:</p>
              <ul className="list-disc pl-16 flex flex-col gap-2">
                <li>
                  Increased renal blood flow: The amount of blood flowing through
                  the kidneys per minute increases by 50% to 80% during pregnancy.
                  This is due to increased cardiac output and decreased renal
                  vascular resistance. The renal blood flow peaks at mid-pregnancy
                  and then declines slightly until term. The normal range of renal
                  blood flow in pregnancy is 1200 to 1500 mL/min.
                </li>

                <div className="image-container relative my-8">
                  <Image
                    className="h-full w-full object-top object-cover"
                    src={nurse}
                    alt="a smiling nurse"
                    fill={true}
                    sizes="100%"
                  />
                </div>

                <li>
                  Increased renal blood flow: The amount of blood flowing through
                  the kidneys per minute increases by 50% to 80% during pregnancy.
                  This is due to increased cardiac output and decreased renal
                  vascular resistance. The renal blood flow peaks at mid-pregnancy
                  and then declines slightly until term. The normal range of renal
                  blood flow in pregnancy is 1200 to 1500 mL/min.
                </li>

                <li>
                  Increased renal blood flow: The amount of blood flowing through
                  the kidneys per minute increases by 50% to 80% during pregnancy.
                  This is due to increased cardiac output and decreased renal
                  vascular resistance. The renal blood flow peaks at mid-pregnancy
                  and then declines slightly until term. The normal range of renal
                  blood flow in pregnancy is 1200 to 1500 mL/min.
                </li>
                <li>
                  Increased renal blood flow: The amount of blood flowing through
                  the kidneys per minute increases by 50% to 80% during pregnancy.
                  This is due to increased cardiac output and decreased renal
                  vascular resistance. The renal blood flow peaks at mid-pregnancy
                  and then declines slightly until term. The normal range of renal
                  blood flow in pregnancy is 1200 to 1500 mL/min.
                </li>
              </ul>
            </div>
          </div>
        ) : (
          // Quiz Content
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Total Questions: {quizQuestions.length}</span>
              <Button
                variant="outline"
                onClick={() => setShowAnswers(!showAnswers)}
                className="flex items-center gap-2"
              >
                {showAnswers ? (
                  <>
                    <EyeOff className="h-4 w-4" /> Hide Answers
                  </>
                ) : (
                  <>
                    <Eye className="h-4 w-4" /> Show Answers
                  </>
                )}
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Questions Column */}
              <div className="space-y-8">
                {quizQuestions.map((q, index) => (
                  <div key={q.id} className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-semibold">Question {index + 1}:</h3>
                      <div className="flex gap-2">
                        <Button variant="destructive" size="sm">Report Issue</Button>
                        <Button variant="destructive" size="sm">Report Answer</Button>
                      </div>
                    </div>
                    <p className="mb-4">{q.question}</p>
                    <div className="space-y-2">
                      {q.options.map((option) => (
                        <div
                          key={option.id}
                          className={`p-2 rounded ${
                            showAnswers && option.id === q.correctAnswer
                              ? "bg-green-100 border border-green-300"
                              : "bg-white border"
                          }`}
                        >
                          {option.id}. {option.text}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Answers Column */}
              {showAnswers && (
                <div className="space-y-8">
                  {quizQuestions.map((q, index) => (
                    <div key={q.id} className="border rounded-lg p-4 bg-blue-50">
                      <h3 className="font-semibold mb-2">Explanation {index + 1}:</h3>
                      <div className="mb-2">
                        <span className="font-medium">Correct Answer: </span>
                        Option {q.correctAnswer}
                      </div>
                      <p>{q.explanation}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => navigateToLesson(prevLesson)}
          disabled={!prevLesson}
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button
          onClick={() => navigateToLesson(nextLesson)}
          disabled={!nextLesson}
        >
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}

function getAllLessons(subject: Subject) {
  return subject.topics.flatMap((topic) =>
    topic.subtopic.flatMap((subtopic) => subtopic.lessonContent)
  );
}