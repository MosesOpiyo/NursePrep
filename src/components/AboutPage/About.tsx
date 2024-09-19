"use client"

import React from "react";
import "./About.css";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { testimonialArray } from "@/assets/servicesData/services";
import Autoplay from "embla-carousel-autoplay";
import { FaQuoteLeft } from "react-icons/fa";
import { Button } from "../ui/button";
import { faqData } from "@/assets/servicesData/services";
import Footer from "../Footer/Footer";
import { Item } from "@radix-ui/react-accordion";
import { teamData } from "@/assets/servicesData/services";


const AboutPage = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <>
      {/* ABOUT HERO SECTION */}
      <section className="about-hero mt-8 mb-16 relative mx-auto bg-center bg-cover rounded-3xl text-white flex items-center justify-center">
        <div className="abouthero-header z-10 flex flex-col items-center justify-center gap-8">
          <p className="text-base">About NursePrep</p>
          <h2 className="text-4xl w-4/5 mx-auto text-center font-extralight">
            Committed to your success with comprehensive and innovative nursing
            exam preparation.
          </h2>
        </div>
      </section>

      {/* HOW IT STARTED SECTION */}
      <section className="start-container flex mb-16 flex-col text-center items-center justify-center gap-4">
        <div className="start-header">
          <h2 className="font-bold text-5xl">How It Started</h2>
        </div>

        <div className="start-content w-4/5 mx-auto">
          <p className="text-start">
            In 2018, a group of passionate nurses and educators recognized a gap
            in the resources available for nursing entrance exam preparation.
            They saw students struggling with outdated, static study guides and
            lacking the support they needed. Driven by a shared vision to
            revolutionize nursing education, they pooled their expertise and
            created NursePrep. Their goal was simple: to provide an interactive,
            personalized, and comprehensive learning experience that empowers
            nursing aspirants to succeed. Today, NursePrep stands as a testament
            to their commitment, helping thousands of students achieve their
            dreams of becoming nurses.
          </p>
        </div>
      </section>

      {/* APPROACH SECTION */}
      <section className="approach-container flex mb-16 flex-col text-center items-center justify-center gap-4">
        <div className="approach-header">
          <h2 className="font-bold text-5xl">Our Approach</h2>
        </div>

        <div className="approach-content w-4/5 mx-auto">
          <p className="text-start">
            At NursePrep, we believe in a holistic approach to learning. Our
            platform combines interactive lessons, adaptive quizzes, and
            personalized study plans to cater to the unique needs of each
            student. We focus on understanding concepts rather than rote
            memorization, ensuring that our users are well-prepared for both
            their exams and their future careers in nursing
          </p>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="mission-container mb-16 relative w-4/5 mx-auto grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 flex-col gap-4">
        <div className="mission-header rounded-xl relative p-4 flex flex-col gap-4 items-center justify-center text-center">
          <h2 className="text-base">Our Mission</h2>
          <p className="text-2xl">
            To revolutionize nursing exam preparation by providing innovative,
            interactive tools that help students achieve their academic and
            professional goals.
          </p>

          <div className="circle-dot left absolute top-4 left-4"></div>
          <div className="circle-dot right absolute top-4 right-4"></div>
          <div className="circle-dot btright absolute bottom-4 left-4"></div>
          <div className="circle-dot btleft absolute bottom-4 right-4"></div>
        </div>

        <div className="mission-image relative after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:absolute after:bg-black after:opacity-30 after:z-10 after:rounded-xl rounded-xl bg-center bg-cover"></div>
      </section>

      {/* TEAM */}
      <section className="team-container flex items-center p-4 flex-col gap-8 mb-16">
        <div className="team-header flex flex-col gap-4">
          <h2 className="font-bold text-5xl text-center">Meet Our Team</h2>
          <p className="w-4/5 mx-auto">Our team is composed of dedicated professionals with extensive experience in nursing and education. Meet the passionate individuals who make NursePrep a leading resource for nursing entrance exam preparation.</p>
        </div>

        <div className="team-content w-4/5 mx-auto grid gap-4 grid-col-1 md:grid-cols-3">

        {teamData.map((item) => (
          <div key={item.id} className="team-card relative flex flex-col gap-4 p-8">
            <div className="team-image h-80">
              <Image
                className="h-full w-full object-top object-cover"
                src={item.image}
                alt="a smiling nurse"
                width={100}
                height={100}
                sizes="100%"
              />
            </div>

            <div className="team-name">
              <p>{item.name}</p>
              <p className="title">{item.title}</p>
            </div>
          </div>
        ))}

        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="abouttestimonial-container mb-16 gap-4 grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2">
        <div className="abouttestimonial-header flex flex-col gap-4 items-center justify-center text-white p-4">
          <h2 className="text-5xl md:text-7xl font-extralight w-2/3 mx-auto">
            Real Success Stories from Our Users
          </h2>
          <p className=" w-2/3 mx-auto">
            Discover how our platform has transformed the lives of nursing
            students through real success stories and heartfelt testimonials
          </p>
        </div>

        <div className="abouttestimonial-content h-full px-4 py-8">
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-4/5 mx-auto h-full py-4 carousel-container"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="h-full">
              {testimonialArray.map((item) => (
                <CarouselItem key={item.id} className="h-full">
                  <div
                    className={`flex gap-4 flex-col ${item.class}`}
                    key={item.id}
                  >
                    <div className="abouttestimonial-content flex-col p-12 flex h-full w-full gap-16">
                      <div className="abouttestimonial-name">
                        <h3 className="text-2xl font-bold">{item.name}</h3>

                        <p className="text-slate-500">{item.title}</p>
                      </div>

                      <div className="abouttestimonial-text flex flex-col gap-2">
                        <FaQuoteLeft className="text-slate-400" />
                        <p>{item.testimony}</p>
                      </div>
                    </div>

                    <div className="abouttestimonial-image self-center">
                      <Image
                        className="h-full w-full object-center object-cover"
                        src={item.image}
                        alt="a smiling nurse"
                        width={100}
                        height={100}
                        sizes="100%"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-container mx-auto flex flex-col gap-8 mb-16 p-4">
        <div className="faq-header">
          <h2 className="font-bold text-5xl">
            Have Questions? <br /> We&apos;re here
          </h2>
        </div>

        <div className="faq-content p-8">
          <Accordion type="single" collapsible>
            {faqData.map((item) => (
              <AccordionItem value={item.value} key={item.id}>
                <AccordionTrigger className="text-xl">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-slate-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="aboutcta-container rounded-xl w-4/5 mx-auto flex items-end mb-16">
        <div className="aboutcta-content flex flex-col gap-12 p-8 justify-between items-center w-full">
          <h2 className="text-5xl">Enough Talk, Let&apos;s Get Started</h2>
          <Button className="md:w-1/4 h-12">Start Now</Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;
