import Link from "next/link";
import "../../../../../../styles/globals.css";
import { testsArray } from "@/assets/servicesData/services";
import { notFound } from "next/navigation";

export const dynamicParams = true;

export async function generateStaticParams() {
  return testsArray.map((lesson) => ({
    id: lesson.id,
  }));
}

export const getSingleSubject = async (id: any) => {
  const data = testsArray[id];

  if (!data) {
    notFound();
  }

  return data;
};

export const getSingleTopic = async (subjectId: any, contentId: any) => {
  const data = testsArray[subjectId].topics[contentId];

  if (!data) {
    notFound();
  }

  return data;
};

export const getSingleSubTopicContent = async (subjectId: any,topicId: any) => {

  const data = testsArray[subjectId].topics[topicId].content;

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

async function testtopicPage({
  params,
}: {
  params: {
    subjectId: string;
    topicId: string;
    subtopicId: string;
  };
}) {

  const subject = await getSingleSubject(params.subjectId); // gets single subject
  const topic = await getSingleTopic(params.subjectId, params.topicId); // gets single topic
  const quiz = await getSingleSubTopicContent(params.subjectId,params.topicId);  // gets single topic content
  
  const nextsubtopic = nextsubTopic(params.subtopicId);
  const nexttopic = nextTopic(params.topicId);

  return (
    <div className="relative p-8 flex flex-col gap-8 text-center items-center justify-center">

      <div className="absolute top-2 right-2">
        <Link
          href={`/teas/${params.subjectId}/topics/${nexttopic}/${nextsubtopic}`}
        >
          NEXT
        </Link>
      </div>

      <h1>
        Subject: {params.subjectId} - {subject.lessonTitle}
      </h1>

      <h1>
        Topic: {params.topicId} - {topic.title}{" "}
      </h1>

      <p>
        subtopic: {params.subtopicId} - {topic.subtitle}
      </p>

      <p>QUIZ: {quiz}</p>
    </div>
  );
}

export default testtopicPage;
