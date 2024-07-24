import React from 'react';
import hero from '../../assets/nurse.jpg';
import Image from 'next/image';
import './Hero.css';
import { Button } from '../ui/button';

const Hero = () => {
  return (
    <section>
      <div className="hero-container flex items-center justify-center relative w-full left-0">
        <Image
          className="fixed top-0 left-0 h-full w-full object-center object-cover"
          src={hero}
          alt="a smiling nurse"
          priority
        />

        <div className="hero-text text-center w-4/5 flex flex-col gap-10 text-white z-10">
          <h1 className="text-7xl">
            Ace your nursing school entrance exams. <span>Guaranteed.</span>
          </h1>

          <p>
            Pass your entrance tests with our accurate practice questions and
            detailed answer explanations.
          </p>

          <div className="action-btn">
            <Button>REGISTER NOW</Button>
          </div>
        </div>
      </div>

      <div className="data">
        <p>hello</p>
      </div>

      <div className="data">
        <p>hello</p>
      </div>
    </section>
  );
}

export default Hero
