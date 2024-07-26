import React from "react";
import hero from "../../assets/hero3.png";
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

        <div className="hero-text pt-12 text-white ps-16 h-full w-full flex flex-col gap-10 items-center justify-center">
          <h1 className="hero-header text-center">
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
