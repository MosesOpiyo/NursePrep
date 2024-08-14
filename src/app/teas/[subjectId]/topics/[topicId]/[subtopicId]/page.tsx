import Link from 'next/link';
import '../../../../../../styles/globals.css';
import { topicsArray } from '@/assets/servicesData/services';
import { notFound } from 'next/navigation';


export const dynamicParams = true;

export async function generateStaticParams() {
  return topicsArray.map((lesson) => ({
    id: lesson.id,
  }));
}

export const getSingleSubject = async (id: any) => {
    const data = topicsArray[id];
  
    if (!data) {
      notFound();
    }
  
    return data;
  };

export const getSingleTopic = async (subjectId: any, contentId: any, ) => {
  const data = topicsArray[subjectId].content[contentId];

  if (!data) {
    notFound();
  }

  return data;
};

export const getSingleSubTopicContent = async (subjectId: any, topicId: any) => {
    const data = topicsArray[subjectId].content[topicId].content;
  
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


async function topicPage( { params }: {
  params: { 
    subjectId: string;
    topicId: string;
    subtopicId: string
 }
}) {


    const subject = await getSingleSubject(params.subjectId);
  const topic = await getSingleTopic(params.subjectId, params.topicId);
  const subtopic = await getSingleSubTopicContent(params.subjectId, params.topicId);
  const nextsubtopic = nextsubTopic(params.subtopicId)
  const nexttopic = nextTopic(params.topicId)

  return (
    <div className='relative'>
        <div className='absolute top-2 right-2'>
            <Link href={`/teas/${params.subjectId}/topics/${nexttopic}/${nextsubtopic}`}>NEXT</Link>
        </div>
      <h1>Subject: {params.subjectId} - {subject.subject}</h1>
      <h1>Topic: {params.topicId} - {topic.topic} </h1>
      <p>subtopic: {params.subtopicId} - {topic.subtopic}</p> 
      <p>Content: {subtopic}</p>
    </div>
  );
}

export default topicPage;