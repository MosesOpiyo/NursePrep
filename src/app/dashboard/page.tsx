"use client"

import Navbar from "../../components/Navbar/navbar";
import { Button } from "@/components/ui/button";
import '../../styles/globals.css';
import './page.css';
import Hero from "@/components/Hero/Hero";
import Homepage from "@/components/Homepage/Homepage";
import Footer from "@/components/Footer/Footer";
import { Progress } from "@/components/ui/progress"
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
  


export default function Dashboard(){

    // PROGRESS TIMER
    const [progress, setProgress] = React.useState(13);
    const [progress1, setProgress1] = React.useState(20);
    const [progress2, setProgress2] = React.useState(25);

    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);

    React.useEffect(() => {
        const timer1 = setTimeout(() => setProgress1(40), 500);
        return () => clearTimeout(timer1);
    }, []);

    React.useEffect(() => {
      const timer2 = setTimeout(() => setProgress2(80), 500);
      return () => clearTimeout(timer2);
    }, []);

    return (
      <>
        <div className="maindashboard-container flex flex-col gap-8">
          {/* WELCOME */}
          <div className="welcome p-8">
            <div className="greeting flex flex-col gap-2">
              <h2 className="text-5xl font-normal">Hello, Isaac!</h2>

              <p className="flex flex-col">
                Welcome to your
                <span className="font-bold text-xl">Nurseprep Dashboard</span>
              </p>

              <q>Never stop learning, because life never stops teaching.</q>
            </div>
          </div>

          {/* STATS */}
          <div className="stats flex gap-4 p-8 items-center w-3/4 me-auto">
            <div className="all p-4 border border-solid basis-full border-black">
              <h2>All courses</h2>
              <p className="font-bold">40</p>
            </div>

            <div className="in-progress p-4 border border-solid basis-full border-x border-black">
              <h2>Courses in Progress</h2>
              <p className="font-bold">4</p>
            </div>

            <div className="finished border border-s p-4 basis-full border-x border-black">
              <h2>Finished courses</h2>
              <p className="font-bold">0</p>
            </div>
          </div>

          {/* MY COURSES */}
          <div className="mycourses-container flex flex-col gap-8">
            {/* TITLE */}
            <div className="mycourses">
              <div className="mycourses-title">
                <h2 className="font-normal text-4xl">My Courses</h2>
              </div>
            </div>

            {/* CONTENT */}
            <div className="mycourses-content grid grid-cols-3 grid-rows-1 gap-4">
              <div className="course-card p-8 flex flex-col justify-between h-80">
                <div className="course-title flex flex-col gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <h2 className="font-bold text-3xl">HESI</h2>
                </div>

                <div className="course-name">
                  <p className="font-bold text-xl">Math</p>
                  <p>Principles of Multiplication</p>
                </div>

                <div className="course-progress flex flex-col gap-1">
                  <p>100hours - {progress}%</p>
                  <Progress value={progress} className="w-[60%]" />
                </div>
              </div>

              <div className="course-card english p-8 flex flex-col justify-between h-80">
                <div className="course-title flex flex-col gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <h2 className="font-bold text-3xl">HESI</h2>
                </div>

                <div className="course-name">
                  <p className="font-bold text-xl">English</p>
                  <p>Principles of English</p>
                </div>

                <div className="course-progress flex flex-col gap-1">
                  <p>100hours - {progress1}%</p>
                  <Progress value={progress1} className="w-[60%]" />
                </div>
              </div>

              <div className="course-card reading p-8 flex flex-col justify-between h-80">
                <div className="course-title flex flex-col gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <h2 className="font-bold text-3xl">TEAS</h2>
                </div>

                <div className="course-name">
                  <p className="font-bold text-xl">Reading</p>
                  <p>Principles of Reading</p>
                </div>

                <div className="course-progress flex flex-col gap-1">
                  <p>100hours - {progress2}%</p>
                  <Progress value={progress2} className="w-[60%]" />
                </div>
              </div>
            </div>

            {/* ADD COURSES */}
            <div className="addcourses-container self-center">
              <Popover>
                <PopoverTrigger className="bg-black text-white py-2 px-8">
                  ADD COURSES
                </PopoverTrigger>

                <PopoverContent>
                  <div className="course-card english p-8 flex flex-col justify-between h-80">
                    <div className="course-title flex flex-col gap-4">
                      <h2 className="font-bold text-3xl">HESI</h2>
                    </div>

                    <div className="course-name">
                      <p className="font-bold text-xl">English</p>
                      <p>Principles of English</p>
                    </div>

                    <div className="course-btn flex flex-col gap-1">
                      <Button>Add Course</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* INCOMING EVENTS */}
          <div className="myevents-container flex flex-col gap-8">
            {/* TITLE */}
            <div className="myevents">
              <div className="myevents-title">
                <h2 className="font-normal text-4xl">My Events</h2>
              </div>
            </div>

            <div className="event-content h-72 flex w-full">
                <div className="math-class flex w-3/4 items-end flex-col justify-end p-8 h-full text-white">
                    <h2 className="text-4xl">Live Math Class</h2>
                    <p>4th October, 2025</p>
                    <p>Learn Math basics with Alex!</p>
                </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="links-container flex flex-col gap-8">
            {/* TITLE */}
            <div className="mylinks">
              <div className="mylinks-title">
                <h2 className="font-normal text-4xl">Quick Links</h2>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="qlinks-container h-72 flex w-full">
                <div className="qlinks-content">
                    <ul className="flex flex-col gap-4">
                        <li>All courses</li>
                        <li>Practice Tests</li>
                        <li>Study Guides</li>
                    </ul>
                </div>
            </div>

          </div>
        </div>
      </>
    );
       
    
}