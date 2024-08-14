import "../../../styles/globals.css";
import { topicsArray } from "@/assets/servicesData/services";
import { notFound } from "next/navigation";
import Link from "next/link";

export const dynamicParams = true;

export async function generateStaticParams() {
  return topicsArray.map((subject) => ({
    id: subject.id,
  }));
}

export const getSingleLesson = async (id: any) => {
  const data = topicsArray[id];

  if (!data) {
    notFound();
  }

  return data;
};

export default async function SideNav({
  children,
  params, // will be a page or nested layout
}: {
  children: React.ReactNode;
  params: { subjectId: string };
}) {
  const subject = await getSingleLesson(params.subjectId);

  return (
    <section className="flex">
      {/* Include shared UI here e.g. a header or sidebar */}

      <div>
        <h1>
          Subject: {params.subjectId} - {subject.subject}{" "}
        </h1>

        {subject.content.map((topic) => (
          <div key={topic.id}>
            <h1 className="font-bold">{topic.topic}</h1>
            <Link
              href={`/teas/${params.subjectId}/topics/${topic.id}/${topic.id}`}
            >
              {topic.subtopic}
            </Link>
          </div>
        ))}
      </div>

      {children}
    </section>
  );
}
