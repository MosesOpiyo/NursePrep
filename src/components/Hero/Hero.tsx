import React from "react";
import hero from "../../assets/nurse-2.jpg";
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
      <section className="hero-container text-white grid items-center justify-center relative w-full left-0">
        <div className="hero-text px-8 h-full w-full flex flex-col gap-10 z-10 items-start justify-center">
          <h1 className="text-6xl">
            Ace your nursing school entrance exams. <span>Guaranteed.</span>
          </h1>
          <p className="hero-paragraph">
            Pass your entrance tests with our accurate practice questions and
            detailed answer explanations.
          </p>

          <div className="action-btn flex gap-4">
            <Button>GET STARTED NOW</Button>
            <Button>BROWSE FREE TESTS</Button>
          </div>
        </div>

        <div className="image-container h-full w-full">
          <Image
            className="h-full w-full object-top object-cover"
            src={hero}
            alt="a smiling nurse"
            priority
          />
        </div>
      </section>
  );
};

export default Hero;
