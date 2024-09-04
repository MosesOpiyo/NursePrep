import React from "react";
import hero from "../../assets/hero4.jpg";
import Image from "next/image";
import "./Hero.css";
import { Button } from "../ui/button";
import anatomy from "../../assets/anatomy.jpg";
import young from "../../assets/student.jpg";
import han from "../../assets/han.jpg";
import live from "../../assets/live.jpg";
import one from "../../assets/oneonone.jpg";
import guides from "../../assets/guides.jpg";
import performance from "../../assets/performance.jpg";
import community from "../../assets/community.jpg";
import exam from "../../assets/examday.jpg";

const Hero = () => {
  return (
      <section className="hero-container grid items-center justify-center w-full relative">
        <div className="hero-text pt-32 text-white px-16 h-full w-full flex flex-col gap-10 items-center justify-center">

          {/* HERO HEADER TEXT */}
          <h1 className="hero-header relative text-center sm:text-6xl text-5xl">
            Ace your nursing school entrance exams. <span>Guaranteed.</span>
          </h1>

          {/* HERO PARAGRAPH */}
          <p className="hero-paragraph text-center">
            Pass your entrance tests with our accurate practice questions and
            detailed answer explanations.
          </p>

          {/* HERO BUTTONS */}
          <div className="action-btn flex gap-4">
            <Button>GET STARTED NOW</Button>
            <Button>BROWSE FREE TESTS</Button>
          </div>
        </div>

        <div className="image-container h-full w-full">
          <video className="video h-full w-full object-cover" autoPlay muted loop>
            <source src="/nurse.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
  );
};

export default Hero;
