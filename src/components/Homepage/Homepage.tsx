import React from 'react';
import { Button } from "../ui/button";
import './Homepage.css'
import Image from "next/image";
import anatomy from "../../assets/anatomy.jpg";
import young from "../../assets/student.jpg";
import han from "../../assets/han.jpg";
import live from "../../assets/live.jpg";
import one from "../../assets/oneonone.jpg";
import guides from "../../assets/guides.jpg";
import performance from "../../assets/performance.jpg";
import community from "../../assets/community.jpg";
import exam from "../../assets/examday.jpg";

const Homepage = () => {
  return (
    <div>
        <section className="services-container flex flex-col gap-4">
        <div className="services-header p-4 mx-auto grid gap-4 items-center">
          <div className="header">
            <h2 className="font-bold text-5xl">
              Unlock Your Nursing <br /> Career Success
            </h2>
          </div>

          <div className="service-paragraph">
            <p>
              Our comprehensive range of services is designed to provide you
              with the tools, guidance, and support you need every step of the
              way. Explore our services below
            </p>
          </div>
        </div>

        <div className="services-list grid gap-y-12 gap-x-10">
          <div className="service-card relative flex flex-col gap-4">
            <div className="card-image absolute top-0 left-0 h-full w-full -z-10">
              <Image
                className="h-full w-full object-top object-cover"
                src={anatomy}
                alt="a smiling nurse"
              />

              <div className="card-header">
                <h2 className="font-bold text-2xl">
                  Comprehensive Course Packages
                </h2>
              </div>
            </div>

            <div className="card-text">
              <p>
                Detailed courses covering all sections of the nursing entrance
                exams. Interactive lessons with videos, quizzes, and
                assignments.
              </p>
            </div>

            <div className="card-cta">
              <Button>GET STARTED</Button>
            </div>
          </div>

          <div className="service-card relative flex flex-col gap-4">
            <div className="card-image absolute top-0 left-0 h-full w-full -z-10">
              <Image
                className="h-full w-full object-top object-cover"
                src={young}
                alt="a smiling nurse"
              />

              <div className="circle absolute">
                <span className="absolute flex">2</span>
              </div>
            </div>

            <div className="card-header">
              <h2 className="font-bold text-2xl">
                Practice Tests and Question Banks
              </h2>
            </div>

            <div className="card-text">
              <p>
                Full-length practice tests that mimic the actual exam format and
                timing. Detailed score reports with performance
                analysis.Extensive collection of practice questions covering all
                exam topics. Instant feedback and explanations for each
                question.
              </p>
            </div>

            <div className="card-cta">
              <Button>GET STARTED</Button>
            </div>
          </div>

          <div className="service-card relative flex flex-col gap-4">
            <div className="card-image absolute top-0 left-0 h-full w-full -z-10">
              <Image
                className="h-full w-full object-top object-cover"
                src={han}
                alt="a smiling nurse"
              />

              <div className="circle absolute">
                <span className="absolute flex">3</span>
              </div>
            </div>

            <div className="card-header">
              <h2 className="font-bold text-2xl">Personalized Study Plans</h2>
            </div>

            <div className="card-text">
              <p>
                Tailored study plans based on the student’s timeline and
                availability. Adaptive schedules that adjust based on progress
                and performance.
              </p>
            </div>

            <div className="card-cta">
              <Button>GET STARTED</Button>
            </div>
          </div>

          <div className="service-card relative flex flex-col gap-4">
            <div className="card-image absolute top-0 left-0 h-full w-full -z-10">
              <Image
                className="h-full w-full object-top object-cover"
                src={live}
                alt="a smiling nurse"
              />

              <div className="circle absolute">
                <span className="absolute flex">4</span>
              </div>
            </div>

            <div className="card-header">
              <h2 className="font-bold text-2xl">Live and Recorded Classes</h2>
            </div>

            <div className="card-text">
              <p>
                Interactive live sessions with experienced instructors.
                Opportunity to ask questions and participate in real-time
                discussions. Access to a library of recorded classes for
                flexible learning. Ability to review and revisit complex topics
                at any time.
              </p>
            </div>

            <div className="card-cta">
              <Button>GET STARTED</Button>
            </div>
          </div>

          <div className="service-card relative flex flex-col gap-4">
            <div className="card-image absolute top-0 left-0 h-full w-full -z-10">
              <Image
                className="h-full w-full object-top object-cover"
                src={one}
                alt="a smiling nurse"
              />

              <div className="circle absolute">
                <span className="absolute flex">5</span>
              </div>
            </div>

            <div className="card-header">
              <h2 className="font-bold text-2xl">One-on-One Tutoring</h2>
            </div>

            <div className="card-text">
              <p>
                Personalized tutoring with expert instructors. Focus on
                individual strengths and weaknesses to maximize improvement.
              </p>
            </div>

            <div className="card-cta">
              <Button>GET STARTED</Button>
            </div>
          </div>

          <div className="service-card relative flex flex-col gap-4">
            <div className="card-image absolute top-0 left-0 h-full w-full -z-10">
              <Image
                className="h-full w-full object-top object-cover"
                src={guides}
                alt="a smiling nurse"
              />

              <div className="circle absolute">
                <span className="absolute flex">6</span>
              </div>
            </div>

            <div className="card-header">
              <h2 className="font-bold text-2xl">Study Guides and E-Books</h2>
            </div>

            <div className="card-text">
              <p>
                Detailed study guides covering each exam section. Downloadable
                e-books with tips, strategies, and practice exercises.
              </p>
            </div>

            <div className="card-cta">
              <Button>GET STARTED</Button>
            </div>
          </div>

          <div className="service-card relative flex flex-col gap-4">
            <div className="card-image absolute top-0 left-0 h-full w-full -z-10">
              <Image
                className="h-full w-full object-top object-cover"
                src={performance}
                alt="a smiling nurse"
              />

              <div className="circle absolute">
                <span className="absolute flex">7</span>
              </div>
            </div>

            <div className="card-header">
              <h2 className="font-bold text-2xl">
                Performance Tracking and Analytics
              </h2>
            </div>

            <div className="card-text">
              <p>
                Detailed tracking of student progress and performance. Visual
                dashboards showing strengths, weaknesses, and improvement areas.
                Tools to analyze test results and identify patterns.
                Personalized recommendations based on performance data
              </p>
            </div>

            <div className="card-cta">
              <Button>GET STARTED</Button>
            </div>
          </div>

          <div className="service-card relative flex flex-col gap-4">
            <div className="card-image absolute top-0 left-0 h-full w-full -z-10">
              <Image
                className="h-full w-full object-top object-cover"
                src={community}
                alt="a smiling nurse"
              />

              <div className="circle absolute">
                <span className="absolute flex">8</span>
              </div>
            </div>

            <div className="card-header">
              <h2 className="font-bold text-2xl">Community Support</h2>
            </div>

            <div className="card-text">
              <p>
                Online community for students to ask questions, share
                experiences, and support each other. Moderated by instructors
                and alumni for accurate information and guidance.
              </p>
            </div>

            <div className="card-cta">
              <Button>GET STARTED</Button>
            </div>
          </div>

          <div className="service-card relative flex flex-col gap-4">
            <div className="card-image absolute top-0 left-0 h-full w-full -z-10">
              <Image
                className="h-full w-full object-top object-cover"
                src={exam}
                alt="a smiling nurse"
              />

              <div className="circle absolute">
                <span className="absolute flex">9</span>
              </div>
            </div>

            <div className="card-header">
              <h2 className="font-bold text-2xl">Exam Day Preparation</h2>
            </div>

            <div className="card-text">
              <p>
                Tips and strategies for managing time, handling stress, and
                maximizing performance on exam day. Mock exams under timed
                conditions to simulate the real exam experience. Comprehensive
                checklists to ensure students are fully prepared for exam day.
              </p>
            </div>

            <div className="card-cta">
              <Button>GET STARTED</Button>
            </div>
          </div>
        </div>
      </section>

      <div className="data">
        <p>hello</p>
      </div>
    </div>
  )
}

export default Homepage
