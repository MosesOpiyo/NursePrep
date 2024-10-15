"use client"

import React from "react";
import { Button } from "../ui/button";
import "./Homepage.css";
import nurse from "../../assets/pediatricnurse.jpg";
import Image from "next/image";
import { dataArray } from "../../assets/servicesData/services";
import { worksArray } from "../../assets/servicesData/services";
import { testimonialArray } from "../../assets/servicesData/services";
import { FaQuoteLeft } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { pricingArray } from "../../assets/servicesData/services";
import { pricingFeatures } from "../../assets/servicesData/services";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "../../assets/servicesData/services";
import { contactSchema } from "../../../schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { FormField, FormItem, FormLabel, Form, FormControl, FormDescription, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { z } from "zod";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { comparisonData } from "../../assets/servicesData/services";
import Link from "next/link";
import { FaLock } from "react-icons/fa6";
import Comparison from "../StudyComparison/StudyComparison";
import CookieConsent from "../Cookies/Cookies";


const Homepage = () => {

  const firstItem = pricingArray[0];

  const form = useForm ({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: '',
      name: '',
      text: ''
    }
  })

  const onSubmit = (data: z.infer<typeof contactSchema>) => {
    console.log(data)
  }




  return (
    <div>
      {/* SERVICES SECTION */}
      <section className="services-container flex flex-col gap-4">
        {/* SERVICES-HEADER */}
        <div className="services-header my-16 p-4 mx-auto grid gap-4 grid-cols-1 md:grid-cols-[1fr_1fr]" id="overview">
          <div className="header">
            <h2 className="font-bold text-4xl sm:text-5xl">
              Unlock Your Nursing <br /> Career Success
            </h2>
          </div>

          <div className="service-paragraph">
            <p>
              Our comprehensive suite of services is designed to cater to your
              unique learning needs and ensure your success. From in-depth
              course packages and personalized study plans to interactive live
              classes and one-on-one tutoring, we provide all the resources and
              support you need to excel. Practice with our extensive question
              banks, track your progress with detailed analytics, and join a
              community of learners for added motivation. Explore our offerings
              below and discover how we can help you achieve your nursing career
              goals.
            </p>
          </div>
        </div>

        {/* SERVICES LIST */}
        <div className="services-list grid gap-y-8 gap-x-8 md:gap-y-12 md:gap-x-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" id="services">
          {dataArray.map((item) => (
            <div
              key={item.id}
              className="service-card cursor-pointer relative flex flex-col"
            >
              <div className="card-image relative top-0 left-0 h-full w-full">
                <Image
                  className="h-full w-full object-top object-cover"
                  src={item.coverImg}
                  alt="a smiling nurse"
                  fill={true}
                  sizes="100%"
                />

                <div className="card-header z-10 text-white text-center absolute flex items-center justify-center flex-col gap-8">
                  <h2 className="card-title font-light text-3xl">
                    {item.title}
                  </h2>

                  <div className="card-cta flex gap-4 items-center justify-center">
                    <Button className="start">Get Started</Button>
                  </div>
                </div>
              </div>

              <div className="card-content flex flex-col gap-1 p-2 text-left justify-between absolute">
                <div className="card-text flex flex-col gap-8">
                  <h2 className="card-title font-light text-3xl">
                    {item.title}
                  </h2>

                  <p>{item.description}</p>

                  <Button className="start">Get Started</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="works-container mt-16 flex flex-col gap-8 mx-auto items-center" id="works">
        <div className="works-header text-center">
          <h2 className="font-bold text-5xl">How it works</h2>
        </div>

        <div className="works-content w-full md:w-4/5 grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-4">
          {worksArray.map((item) => (
            <div className={item.class} key={item.id}>
              <div className="card-number flex flex-col gap-4 items-center justify-center">
                <span className="text-5xl -rotate-90">0{item.id}</span>
                <span className="text-4xl">|</span>
              </div>

              <div className="works-cardcontent flex flex-col gap-16">
                <h3 className="text-2xl uppercase">{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-container relative pb-16 mb-16 grid grid-cols-1 grid-rows-1 md:grid-cols-12 md:grid-rows-12 gap-12">
        <div className="cta-image ms-auto h-full md:relative">
          <Image
            className="h-full w-full object-top object-cover"
            src={nurse}
            alt="a smiling nurse"
            fill={true}
            sizes="100%"
          />
        </div>

        <div className="cta-text me-auto justify-center flex flex-col z-10 gap-12 text-center md:text-start">
          <h3 className="text-5xl">Built for all dreamers everywhere.</h3>

          <div className="cta-inner text-lg flex flex-col gap-12 items-center ps-4 pe-4 md:ps-12 md:pe-0 md:items-start">
            <p>
              Practice with our extensive question banks, track your progress
              with detailed analytics, and join a community of learners for
              added motivation. Sign up below and discover how we can help you
              achieve your nursing career goals.
            </p>

            <Button className="w-3/4 h-12">Get started now</Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials-container overflow-hidden mb-16 grid" id="testimonials">
        <div className="testimonial-header flex mx-auto justify-center flex-col gap-8 p-4 relative">

          <h2 className="font-bold text-5xl">What our clients say</h2>

          <p className="text-[#71717a]">
            Don&apos;t just take our word for it—hear from our successful
            students! Our comprehensive courses and personalized support have
            helped countless aspiring nurses achieve their dreams.{" "}
          </p>

          <div className="testimonials-btn">
            <Button className="h-12 w-2/4">View More</Button>
          </div>
          
        </div>

        <div className="testimonialcard-container cursor-pointer gap-12 mx-auto">
          {testimonialArray.map((item) => (
            <div className={item.class} key={item.id}>
              <div className="testimonial-image absolute -z-10 w-full top-0 left-0 h-full">
                <Image
                  className="h-full w-full object-top object-cover"
                  src={item.image}
                  alt="a smiling nurse"
                  fill={true}
                  sizes="100%"
                />
              </div>

              <div className="testimonial-content flex-col p-12 flex h-full w-full justify-between">
                <div className="testimonial-name">
                  <h3 className="text-2xl font-bold">{item.name}</h3>

                  <p className="text-slate-500">{item.title}</p>
                </div>

                <div className="testimonial-text flex flex-col gap-2">
                  <FaQuoteLeft className="text-slate-400" />
                  <p>{item.testimony}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mobiletestimonials-btn lg:hidden">
            <Button className="h-12 w-2/4">View More</Button>
          </div>
      </section>

      {/* PRICING SECTION */}
      <section
        className="pricing-container mx-auto flex flex-col gap-16 mb-16 pt-16"
        id="pricing"
      >
        <div className="pricing-header flex flex-col gap-8 text-center">
          <h2 className="font-bold text-5xl">
          Our pricing is simple with no hidden fees
          </h2>

          <p className="w-4/5 mx-auto text-[#71717a]">
             We offer flexible subscription plans to fit your study schedule and
            budget. Whether you need short-term access or a more extended
            commitment, we have a plan for you.
          </p>
        </div>

        <div className="pricing-content gap-4 flex flex-col-reverse md:grid md:grid-cols-2 md:grid-rows-1">
          {/* SITE CONTENT */}
          <div className="site-content">
            <div
              key={firstItem.id}
              className={`h-full items-center justify-evenly pricingcard-content ${firstItem.className}`}
            >
              <div className="pricing-features flex flex-col gap-12">
                <div className="features-list flex flex-col gap-2">
                  <p className="uppercase text-sm">
                    All site features available for both plans including:
                  </p>

                  {pricingFeatures.map((item) => (
                    <ul key={item.id} className="flex flex-col gap-1 ps-4">
                      <li className="flex items-center gap-1">
                        <span>
                          <FaRegCheckCircle className="text-green-800" />
                        </span>
                        {item.feature}
                      </li>
                    </ul>
                  ))}

                </div>
              </div>

              <div className="pricing-disclaimers w-[90%] mx-auto flex justify-center items-start text-start flex-col">
                    <div className="secure flex items-center justify-center gap-1">
                      <div className="icon-container flex items-center justify-center">
                        <FaLock />
                      </div>

                      <p>Guaranteed to be safe & secure, ensuring that all transactions are protected with the highest level of security.</p>
                    </div>
                  </div>
            </div>
          </div>

          {/* 2 PRICING CHOICES */}
          <div className="pricingcard-container grid grid-cols-1 grid-rows-2 gap-8">
            {pricingArray.map((item) => (
              <div key={item.id} className={item.className}>
                <div className="save absolute right-8 top-3 bg-black text-white p-4">
                  <p>{item.save}</p>
                  <span className="bg-white absolute pricetag"></span>
                </div>

                <div className="pricing-title">
                  <h3 className="font-bold">{item.access} Access</h3>
                </div>

                <div className="pricing-price">
                  <p>
                    <span className="text-7xl">${item.pricing}</span>/
                    {item.period}
                  </p>
                </div>

                <div>
                  <p className="flex items-center">
                    <FaInfoCircle />
                    &nbsp;{item.ideal}
                  </p>
                </div>

                <div className="pricing-cta">
                  <Link href={`/register/${item.signupbtn_text}`} className="pricing-link">
                     Get {item.btn_period} Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US/ COMPARISON */}
      <section className="comparison-container flex flex-col gap-16 mb-32 pt-16 w-[90%] mx-auto" id="why-us">
        <div className="comparison-header flex flex-col gap-8 text-center">
          <h2 className="font-bold text-5xl text-center">Why Choose Us?</h2>
          <p className="w-4/5 mx-auto text-[#71717a]">At NursePrep, we offer a smarter, more flexible way to learn. Access up-to-date resources, interactive tools, and personalized study plans anytime, anywhere—making studying easier and more efficient than traditional methods</p>
        </div>

        <div className="comparison-content">
          {/* <div className="comparisoncard-container p-4 grid grid-cols-1">

          {comparisonData.map((item) => (

            <div key={item.id} className="comparison-card grid grid-cols-3 gap-4">
            <div className={`comparison-name p-4`}>
              <p className="uppercase font-bold">{item.topic}</p>
            </div>

            <div className={`comparison-traditional p-4 ${item.textclassName}`}>
              <p>{item.traditional}</p>
            </div>

            <div className={`comparison-nurseprep p-4 ${item.textclassName} ${item.topclassName}`}>
              <p>{item.nurseprep}</p>
            </div>
          </div>
          ))}
          </div> */}

          <Comparison />
          
        </div>
      </section>

      {/* CTA BANNER SECTION */}
      <section className="banner-container bg-black text-white flex flex-col gap-12 p-12 mb-16 items-center justify-center text-center">
        <div className="banner-text flex-flex-col gap-4">
          <p className="text-slate-300 text-7xl">Prepare.</p>
          <p className="text-slate-200 text-7xl">Pass.</p>
          <p className="text-slate-50 text-7xl">Prevail.</p>
        </div>

        <div className="banner-btn w-full">
          <Button className="w-full hover:text-white sm:w-2/4 md:w-1/4 bg-white text-black">
            START TODAY
          </Button>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-container mx-auto flex flex-col gap-8 mb-16 md:p-4" id="faq">
        <div className="faq-header">
          <h2 className="font-bold text-5xl">
            Have Questions? <br /> We&apos;re here
          </h2>
        </div>

        <div className="faq-content lg:p-8">
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

      {/* CONTACT US SECTION */}
      <section className="contact-container mx-auto flex justify-center flex-col gap-8 px-4 py-16" id="contact">

        <div className="contact-content p-4 grid grid-cols-1 gap-16 md:grid-cols-2 md:grid-rows-1 md:gap-2">
          <div className="contact-text text-white w-4/5 flex flex-col gap-16 justify-center mx-auto">
            <h2 className="font-bold text-5xl">Or <br /> Contact Us</h2>

            <ul className="flex flex-col gap-4">
              <li>
                <a href="" className="flex items-center">
                  <FaMapMarkerAlt /> &nbsp;&nbsp; 123 CONTACT STR, NAIROBI
                </a>
              </li>

              <li>
                <a href="tel:+254 300 000 000" className="flex items-center">
                  <FaPhoneAlt />&nbsp;&nbsp; +254 300 000 000 &nbsp;&nbsp; +254 300
                  000 000
                </a>
              </li>

              <li>
                <a href="mailto:contact@nurseprep.com" className="flex items-center">
                  <FaEnvelope />&nbsp;&nbsp; contact@nurseprep.com
                </a>
              </li>
            </ul>
          </div>

          <div className="contact-form p-4 sm:p-8 mx-auto">
            <Form {...form}>
              <form className="flex flex-col gap-8" onSubmit={form.handleSubmit(onSubmit)}>

                <div className="flex flex-col gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="relative" >
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="johndoe@gmail.com"
                            autoComplete="true"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="absolute -top-1 left-36" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="relative">
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            autoComplete="true"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="absolute -top-1 left-36"  />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="text"
                    render={({ field }) => (
                      <FormItem className="relative" >
                        <FormLabel>Message / Question</FormLabel>
                        <FormControl>
                          <Textarea
                          className="h-24"
                            placeholder="Enter a Message / Question"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="absolute -top-1 left-36"  />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="disclaimer text-center">
                  <p>By continuing, you acknowledge you&apos;ve read our Privacy Policy and agree to Our Terms of Service</p>
                </div>

                <Button type="submit">Submit</Button>

              </form>

              
            </Form>
          </div>

        </div>
      </section>

      {/* COOKIE CONSENT */}
      {/* < CookieConsent /> */}
    </div>
  );
};

export default Homepage;
