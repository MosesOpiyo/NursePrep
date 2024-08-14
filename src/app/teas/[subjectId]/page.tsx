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


async function SubjectPage( { params }: {
  params: { subjectId: string }
}) {

  const subject = await getSingleSubject(params.subjectId);

  return (
    <div>
      <h1>Subject: {params.subjectId} - {subject.subject} </h1>
      <p>Select a topic to explore:</p>

      {subject.content.map(topic => (
        <ul key={topic.id}>
        <li>
          <Link href={`/teas/${params.subjectId}/topics/${topic.id}`}>{topic.topic}</Link>
        </li>
        </ul>
      ))}
     
    </div>
  );
}

export default SubjectPage;