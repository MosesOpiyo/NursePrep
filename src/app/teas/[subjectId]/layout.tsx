import "../../../styles/globals.css";
import { topicsArray } from "@/assets/servicesData/services";
import { testsArray } from "@/assets/servicesData/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar/navbar";
import "./layout.css";
import Footer from "@/components/Footer/Footer";
import { FaBook, FaQuestion } from "react-icons/fa";

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
    <section className="flex flex-col sidebar gap-4">
      {/* Include shared UI here e.g. a header or sidebar */}

      {/* NAVBAR */}
      <div className="navbar-container z-10 bg-white fixed w-full border-b-2 border-solid">
        <Navbar />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex relative layoutcontent-container h-full">
        {/* SIDENAV */}
        <div className="sidenav-container overflow-y-auto w-1/4 border-x-2 fixed h-full border-solid p-4 flex flex-col gap-8">
          <h1 className="font-bold text-3xl sm:text-3xl">
            Subject: {subject.subject}{" "}
          </h1>

          {subject.content.map((topic) => (
            <div key={topic.id}>
              <h1 className="font-bold text-xl">{topic.topic}</h1>
             
              <Link
                href={`/teas/${params.subjectId}/topics/${topic.id}/${topic.id}`}
                className="flex items-center gap-2"
              >
                &nbsp;&nbsp;<FaBook />{topic.subtopic}
              </Link>

   

              <Link href={`/teas/${params.subjectId}/quizes/${topic.id}/${topic.id}`} className="flex items-center gap-2">
              &nbsp;&nbsp;<FaQuestion /> { testsArray[Number(params.subjectId)].topics[topic.id].subtitle }

              </Link>
            </div>
          ))}
        </div>

        {/* CONTENT */}
        <div className="maincontent-container w-3/4 relative left-1/4">
        {children}
        </div>
        
      </div>

      
        {/* FOOTER */}
        {/* <div className="relative footer-container">
          <Footer />
        </div> */}
        
    </section>
  );
}
