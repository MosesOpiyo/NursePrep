import React from "react";
import Navbar from "@/components/Navbar/navbar";
import "./page.css";
import "../../styles/globals.css";
import Image from "next/image";
import { nursingCourses } from "@/assets/servicesData/services";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

export default function NursingSchool() {
  return (
    <>
      {/* NAVBAR */}
      <div className="nursingnavbar-container">
        <Navbar />
      </div>

      {/* NURSING COURSES HERO SECTION */}
      <section className="nursing-hero mt-8 mb-16 relative mx-auto bg-center bg-cover rounded-3xl text-white flex items-center justify-center">
        <div className="nursinghero-header z-10 flex flex-col items-center justify-center gap-8">
          <p className="text-base">Essential Short Courses for Nurse</p>
          <h2 className="text-4xl w-4/5 mx-auto text-center font-extralight">
            Learn about or review the professional expectations you will be held
            to as a professional nurse.
          </h2>
        </div>
      </section>

      {/* ESSENTIAL COURSES */}
      <div className="essentials-container p-4 flex flex-col gap-16 mb-16">

            {nursingCourses.map((item) => (
              <div key={item.id} className="essential-content flex flex-col gap-8 w-11/12 mx-auto">
                <div className="essential-header">
                    <h2 className="font-bold text-4xl">{item.title} Essentials</h2>
                </div>

                <div className="flex flex-wrap gap-4 w-full">
                {item.course.map((course) => (
                    <Link href={`/nursing_school/${item.id}/${course.id}`} key={course.id} className="relative lesson-card flex flex-col gap-2 items-center justify-center text-white text-center">

                      <div className="absolute top-0 left-0 h-full -z-10 lesson-image w-full after:content-[''] after:absolute after:top-0 after:left-0 after:bg-black after:opacity-40 after:h-full after:w-full">
                        <Image
                          className="h-full w-full object-top object-cover"
                          src={course.imageUrl}
                          alt="a smiling nurse"
                          fill={true}
                          sizes="100%"
                        />
                      </div>

                      <div className="lesson-header p-4">
                        <h2 className="font-bold text-xl">{course.courseTitle}</h2>
                      </div>

                      <div className="lesson-text p-4">
                        <p>{course.courseInfo}</p>
                      </div>
                    </Link>
                ))}
                </div>
              </div>
            ))}
         
         
        
      </div>

      {/* FOOTER */}
      <div className="nursingfooter">
        <Footer />
      </div>
    </>
  );
}
