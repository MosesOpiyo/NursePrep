import Link from 'next/link';
import '../../../styles/globals.css';
import { topicsArray } from '@/assets/servicesData/services';
import { notFound } from 'next/navigation';


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


async function SubjectPage( { params }: {
  params: {
    subjectId: string;
    topicId: string;
    subtopicId: string;
  }
}) {

  const subject = await getSingleSubject(params.subjectId);
  const topic = await getSingleTopic(params.subjectId, 0);
  const nextsubtopic = nextsubTopic(0)
  const nexttopic = nextTopic(0)
  console.log(params.subjectId)

  return (
    <div className='relative'>
      <div className='absolute top-2 right-2'>
            <Link href={`/teas/${params.subjectId}/topics/${nexttopic}/${nextsubtopic}`}>NEXT</Link>
        </div>

      <h1>Subject: {params.subjectId} - {subject.subject} </h1>
      
        <div key={topic.id}>
          <h1 className='font-bold'>TOPIC {topic.id}: {topic.topic}</h1>
          <p>SUB-TOPIC: {topic.subtopic}</p>
          <p>CONTENT: {topic.content}</p>
        </div>
     
    </div>
  );
}

export default SubjectPage;