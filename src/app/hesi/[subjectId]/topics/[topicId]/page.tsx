import Link from 'next/link';
import '../../../../../styles/globals.css';
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

export const getSingleTopic = async (subjectId: any, topicId: any, ) => {
  const data = topicsArray[subjectId].content[topicId];

  if (!data) {
    notFound();
  }

  return data;
};


async function topicPage( { params }: {
  params: { 
    subjectId: string;
    topicId: string
 }
}) {


    const subject = await getSingleSubject(params.subjectId);
  const topic = await getSingleTopic(params.subjectId, params.topicId);

  return (
    <div>
      <h1>Subject: {params.subjectId} - {subject.subject}</h1>
      <h1>Topic: {params.topicId} - {topic.topic} </h1>
      <p>Select a subtopic to explore:</p>

     
        <ul key={topic.id}>
        <li>
          <Link href={`/hesi/${params.subjectId}/topics/${topic.id}/${topic.id}`}>{topic.subtopic}</Link>
        </li>
        </ul>
    
     
    </div>
  );
}

export default topicPage;