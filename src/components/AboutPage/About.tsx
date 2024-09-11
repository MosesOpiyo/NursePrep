"use client"

import React from "react";
import "./About.css";
import { useQueryClient } from '@tanstack/react-query';
import { Page } from "@/services/CMS/contentModel";
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

  const queryClient = useQueryClient();
  const queryKey = ['aboutPageData'];

  const cachedData = queryClient.getQueryData<Page>(queryKey);

  const aboutBannerSection = cachedData?.sections.find(
    (section) => section.name === 'About-Banner'
  );

  const howItStartedSection = cachedData?.sections.find(
    (section) => section.name === 'About-How-It_Started'
  );

  const approachSection = cachedData?.sections.find(
    (section) => section.name === 'About-Our-Approach'
  );

  const ourMissionSection = cachedData?.sections.find(
    (section) => section.name === 'About-Our-Mission'
  );

  const meetTheTeamSection = cachedData?.sections.find(
    (section) => section.name === 'About-Meet-The-Team'
  );

  const aboutTestimonialsSection = cachedData?.sections.find(
    (section) => section.name === 'About-Testimonials'
  );

  function splitText(text: string): [string, string] {
    return text.split(" - ") as [string, string];
  }

  const aboutFAQsSection = cachedData?.sections.find(
    (section) => section.name === 'About-FAQ'
  );

  function splitQuestion(text: string | undefined): [string, string] {
    if(!text){
      return ["",""]
    }
    return text.split("?") as [string, string];
  }

  const aboutCTAsSection = cachedData?.sections.find(
    (section) => section.name === 'About-CTA'
  );

  return (
    <>
      {/* ABOUT HERO SECTION */}
      <section className="about-hero mt-8 mb-16 relative mx-auto bg-center bg-cover rounded-3xl text-white flex items-center justify-center">
        <div className="abouthero-header z-10 flex flex-col items-center justify-center gap-8">
          <p className="text-base">{aboutBannerSection?.title}</p>
          <h2 className="text-4xl w-4/5 mx-auto text-center font-extralight">
          {aboutBannerSection?.section_text}
          </h2>
        </div>
      </section>

      {/* HOW IT STARTED SECTION */}
      <section className="start-container flex mb-16 flex-col text-center items-center justify-center gap-4">
        <div className="start-header">
          <h2 className="font-bold text-5xl">{howItStartedSection?.title}</h2>
        </div>

        <div className="start-content w-4/5 mx-auto">
          <p>
          {howItStartedSection?.section_text}
          </p>
        </div>
      </section>

      {/* APPROACH SECTION */}
      <section className="approach-container flex mb-16 flex-col text-center items-center justify-center gap-4">
        <div className="approach-header">
          <h2 className="font-bold text-5xl">{approachSection?.title}</h2>
        </div>

        <div className="approach-content w-4/5 mx-auto">
          <p>
          {approachSection?.section_text}
          </p>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="mission-container mb-16 relative w-4/5 mx-auto grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 flex-col gap-4">
        <div className="mission-header rounded-xl relative p-4 flex flex-col gap-4 items-center justify-center text-center">
          <h2 className="text-base">{ourMissionSection?.title}</h2>
          <p className="text-2xl">
            {ourMissionSection?.section_text}
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
          <h2 className="font-bold text-5xl text-center">{meetTheTeamSection?.title}</h2>
          <p className="w-4/5 mx-auto">{meetTheTeamSection?.section_text}</p>
        </div>

        <div className="team-content w-4/5 mx-auto grid gap-4 grid-col-1 md:grid-cols-3">

        {meetTheTeamSection?.assets.map((personnel) => (
          <div key={personnel.id} className="team-card relative flex flex-col gap-4 p-8">
            <div className="team-image h-80">
              <Image
                className="h-full w-full object-top object-cover"
                src={personnel.asset}
                alt="a smiling nurse"
                width={100}
                height={100}
                sizes="100%"
              />
            </div>

            <div className="team-name">
              <p>{personnel.title}</p>
              <p className="title">{personnel.asset_content}</p>
            </div>
          </div>
        ))}

        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="abouttestimonial-container mb-16 gap-4 grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2">
        <div className="abouttestimonial-header flex flex-col gap-4 items-center justify-center text-white p-4">
          <h2 className="text-5xl md:text-7xl font-extralight w-2/3 mx-auto">
            {aboutTestimonialsSection?.title}
          </h2>
          <p className=" w-2/3 mx-auto">
          {aboutTestimonialsSection?.section_text}
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
              {aboutTestimonialsSection?.assets.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="h-full">
                  <div
                    className={`flex gap-4 flex-col ${testimonial.class_name}`}
                    key={testimonial.id}
                  >
                    <div className="abouttestimonial-content flex-col p-12 flex h-full w-full gap-16">
                      <div className="abouttestimonial-name">
                        <h3 className="text-2xl font-bold">{testimonial.title}</h3>

                        <p className="text-slate-500">{splitText(testimonial.asset_content)[0]}</p>
                      </div>

                      <div className="abouttestimonial-text flex flex-col gap-2">
                        <FaQuoteLeft className="text-slate-400" />
                        <p>{splitText(testimonial.asset_content)[1]}</p>
                      </div>
                    </div>

                    <div className="abouttestimonial-image self-center">
                      <Image
                        className="h-full w-full object-center object-cover"
                        src={testimonial.asset}
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
            {splitQuestion(aboutFAQsSection?.title)[0]} <br />{splitQuestion(aboutFAQsSection?.title)[1]}
          </h2>
        </div>

        <div className="faq-content p-8">
          <Accordion type="single" collapsible>
            {aboutFAQsSection?.content_blocks.map((question) => (
              <AccordionItem value={question.content} key={question.id}>
                <AccordionTrigger className="text-xl">
                  {question.title}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-slate-600">
                  {question.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="aboutcta-container rounded-xl w-4/5 mx-auto flex items-end mb-16">
        <div className="aboutcta-content flex flex-col gap-12 p-8 justify-between items-center w-full">
          <h2 className="text-5xl">{aboutCTAsSection?.title}</h2>
          <Button className="md:w-1/4 h-12">{aboutCTAsSection?.section_text}</Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;
