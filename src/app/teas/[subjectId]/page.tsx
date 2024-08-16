import Link from "next/link";
import "../../../styles/globals.css";
import { topicsArray } from "@/assets/servicesData/services";
import { notFound } from "next/navigation";

export const dynamicParams = true;

export async function generateStaticParams() {
  return topicsArray.map((subject) => ({
    id: subject.id,
  }));
}

export const getSingleSubject = async (id: any) => {
  const data = topicsArray[id];

  if (!data) {
    notFound();
  }

  return data;
};

export const getSingleTopic = async (subjectId: any, topicId: any) => {
  const data = topicsArray[subjectId].content[topicId];

  if (!data) {
    notFound();
  }

  return data;
};

function nextsubTopic(value: any): any {
  return Number(value) + 1;
}

function nextTopic(value: any): any {
  return Number(value) + 1;
}

async function SubjectPage({
  params,
}: {
  params: {
    subjectId: string;
    topicId: string;
    subtopicId: string;
  };
}) {
  const subject = await getSingleSubject(params.subjectId);
  const topic = await getSingleTopic(params.subjectId, 0);
  const nextsubtopic = nextsubTopic(0);
  const nexttopic = nextTopic(0);
  console.log(params.subjectId);

  return (
    <div className="relative subjectcontent-container p-8 flex flex-col gap-8 text-center items-center justify-center">
      <div className="absolute top-2 right-2">
        <Link
          href={`/teas/${params.subjectId}/topics/${nexttopic}/${nextsubtopic}`}
        >
          NEXT
        </Link>
      </div>

      <h1>
        Subject: {params.subjectId} - {subject.subject}{" "}
      </h1>

      <div key={topic.id} className="flex flex-col gap-8">
        <h1 className="font-bold">
          TOPIC {topic.id}: {topic.topic}
        </h1>
        <p>SUB-TOPIC: {topic.subtopic}</p>
        <p>
          CONTENT: {topic.content}. Welcome to the first step in NurseHub’s ATI
          TEAS 7 {subject.subject} Course! We are so glad you are here! This
          TEAS 7 {subject.subject} Practice test is meant to show you exactly
          how you would score if you were to take the real exam today. Score
          Report and Diagnose : You’ll find your personalized score report at
          the end, which you can use to help develop a study plan based on your
          areas of strength and areas for improvement. Start Improving: Sign Up
          to NurseHub to start improving your score today. You’ve got this!
        </p>
      </div>

    </div>
  );
}

export default SubjectPage;
