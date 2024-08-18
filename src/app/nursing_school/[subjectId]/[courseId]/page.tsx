import React from "react";
import "../../../../styles/globals.css";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/Footer";
import "./page.css";
import { nursingCourses } from "@/assets/servicesData/services";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { testsArray } from "@/assets/servicesData/services";
import { topicsArray } from "@/assets/servicesData/services";
import { FaBook } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";

export const getSingleSubject = (id: any) => {
  const data = nursingCourses[id];

  if (!data) {
    notFound();
  }

  return data;
};

export const getSingleCourse = (subjectId: any, courseId: any) => {
  const data = nursingCourses[subjectId].course[courseId];

  if (!data) {
    notFound();
  }

  return data;
};

export const getSingleLesson = (id: any) => {
    const data = topicsArray[id];
  
    if (!data) {
      notFound();
    }
  
    return data;
  };

export default function NurseCourses({
  params,
}: {
  params: {
    subjectId: string;
    courseId: string;
  };
}) {
  const subject = getSingleSubject(params.subjectId);
  const topic = getSingleCourse(params.subjectId, params.courseId);
  const subject1 = getSingleLesson(params.subjectId);

  return (
    <>
      {/* NAVBAR */}
      <div className="nursecourses-container">
        <Navbar />
      </div>

      {/* HERO */}
      {/* NURSING COURSES HERO SECTION */}
      <section className="nursingcourse-hero mt-8 mb-16 relative mx-auto bg-center bg-cover rounded-3xl text-white flex items-center justify-center">
        <div className="nursingcoursehero-header z-10 flex flex-col items-center justify-center gap-8">
          <p className="text-base">{topic.courseTitle}</p>
          <h2 className="text-4xl w-4/5 mx-auto text-center font-extralight">
            {topic.courseInfo}
          </h2>
        </div>

        <div className="absolute top-0 left-0 h-full -z-10 lesson-image w-full after:content-[''] after:absolute after:top-0 after:left-0 after:bg-black after:opacity-40 after:h-full after:w-full">
          <Image
            className="h-full w-full object-top object-cover"
            src={topic.largeimageUrl}
            alt="a smiling nurse"
            fill={true}
            sizes="100%"
          />
        </div>
      </section>

      {/* INTRO */}
      <div className="nursing-intro w-4/5 mx-auto mb-16">
        <p>
          Welcome to NursePrep’s {topic.courseTitle} Course. This course is
          designed to help you to learn and review the key skills and
          understandings needed to ace your {topic.courseTitle} Course in
          Nursing School. We know that {topic.courseTitle} classes can be
          overwhelming and intimidating, but we’ve broken it down so you can
          study with a clear plan. Whether you are getting a head start or are
          have already begun your {topic.courseTitle} course, we have designed
          a strategic approach to make you feel more confident in nursing
          school.
        </p>
        {/* <h2>SUBJECT: {subject.title}</h2>
        <p>COURSE: {topic.courseTitle}</p>
        <p>COURSE: {topic.courseInfo}</p> */}
      </div>

      {/* COURSE CONTENT */}
      <div className="coursecontent-container w-4/5 mx-auto flex flex-col gap-8 mb-32">
        <div className="coursecontent-header">
            <h2 className="font-bold text-4xl">
                Course Content
            </h2>
            <p>Just click on a lesson and you are good to go:</p>
        </div>

        <div className="course-outline flex flex-col gap-8">
        {subject1.content.map((topic) => (
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
      </div>

      {/* FOOTER */}
      <div className="nursing-footer">
        <Footer />
      </div>
    </>
  );
}
