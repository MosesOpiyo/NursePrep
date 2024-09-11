"use client"

import React from "react";
import { useQueryClient } from '@tanstack/react-query';
import { Page } from "@/services/CMS/contentModel";
import { Button } from "../ui/button";
import "./Homepage.css";
import nurse from "../../assets/hero.jpg";
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



const Homepage = () => {

  const queryClient = useQueryClient();
  const queryKey = ['homePageData'];

  const cachedData = queryClient.getQueryData<Page>(queryKey);

  const servicesSection = cachedData?.sections.find(
    (section) => section.name === 'Services'
  );

  const howItWorksSection = cachedData?.sections.find(
    (section) => section.name === 'How-it-works'
  );

  const ctaSection = cachedData?.sections.find(
    (section) => section.name === 'CTA'
  );

  const testimonialSection = cachedData?.sections.find(
    (section) => section.name === 'Testimonials'
  );

  const pricingSection = cachedData?.pricing_items[0];

  const benefitsSection = cachedData?.benefits[0];

  const ctaBannerSection = cachedData?.sections.find(
    (section) => section.name === 'CTA-Banner'
  );
  const [firstPart, secondPart, thirdPart] = splitTitleText(ctaBannerSection?.title);
  function splitTitleText(text: string | undefined): [string, string, string] {
    if (!text) {
      return ["", "", ""];
    }
    const parts = text.split('.').map(part => part.trim());
    return [parts[0], parts[1], parts[2]];
  }

  const FAQSection = cachedData?.sections.find(
    (section) => section.name === 'FAQ'
  );

  function splitText(text: string): [string, string] {
    return text.split(" - ") as [string, string];
  }


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
        <div className="services-header my-16 p-4 mx-auto grid gap-4 grid-cols-1 md:grid-cols-[1fr_1fr]" >
          <div className="header">
            <h2 className="font-bold text-4xl sm:text-5xl">
            {servicesSection?.title}
            </h2>
          </div>

          <div className="service-paragraph">
            <p>
              {servicesSection?.section_text}
            </p>
          </div>
        </div>

        {/* SERVICES LIST */}
        <div className="services-list grid gap-y-8 gap-x-8 md:gap-y-12 md:gap-x-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {servicesSection?.assets.map((service) => (
            <div
            key={service.id}
            className="service-card cursor-pointer relative flex flex-col"
          >
            <div className="card-image relative top-0 left-0 h-full w-full">
              <Image
                className="h-full w-full object-top object-cover"
                src={service.asset}
                alt="a smiling nurse"
                fill={true}
                sizes="100%"
              />

              <div className="card-header z-10 text-white text-center absolute flex items-center justify-center flex-col gap-8">
                <h2 className="card-title font-light text-3xl">
                  {service.title}
                </h2>

                <div className="card-cta flex gap-4 items-center justify-center">
                  <Button className="start">Get Started</Button>
                </div>
              </div>
            </div>

            <div className="card-content flex flex-col gap-1 p-2 text-left justify-between absolute">
              <div className="card-text flex flex-col gap-8">
                <h2 className="card-title font-light text-3xl">
                  {service.title}
                </h2>

                <p>{service.asset_content}</p>

                <Button className="start">Get Started</Button>
              </div>
            </div>
          </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="works-container mt-16 flex flex-col gap-8 mx-auto items-center">
        <div className="works-header text-center">
          <h2 className="font-bold text-5xl">{howItWorksSection?.title}</h2>
        </div>

        <div className="works-content w-full md:w-4/5 grid grid-cols-1 md:grid-cols-12 md:grid-rows-12 gap-4">
          {howItWorksSection?.assets.map((item,index) => (
            <div className={item.class_name} key={index}>
              <div className="card-number flex flex-col gap-4 items-center justify-center">
                <span className="text-5xl -rotate-90">0{index + 1}</span>
                <span className="text-4xl">|</span>
              </div>

              <div className="works-cardcontent flex flex-col gap-16">
                <h3 className="text-2xl uppercase">{item.title}</h3>

                <p>{item.asset_content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-container pb-16 mb-16 grid grid-cols-1 md:grid-cols-12 md:grid-rows-12 gap-12">
        <div className="cta-image ms-auto h-full relative">
          <Image
            className="h-full w-full object-top object-cover"
            src={nurse}
            alt="a smiling nurse"
            fill={true}
            sizes="100%"
          />
        </div>

        <div className="cta-text me-auto justify-center flex flex-col z-10 gap-12">
          <h3 className="text-5xl">{ctaSection?.title}</h3>

          <div className="cta-inner text-lg flex flex-col gap-12 ps-12">
            <p>
            {ctaSection?.section_text}
            </p>

            <Button className="w-3/4 h-12">Get started now</Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials-container overflow-hidden mb-16 grid">
        <div className="testimonial-header flex mx-auto justify-center flex-col gap-8 p-4 relative">

          <h2 className="font-bold text-5xl">{testimonialSection?.title}</h2>
          <p>
            {testimonialSection?.section_text}
          </p>
          <Button className="h-12 w-2/4">View More</Button>
        </div>

        <div className="testimonialcard-container cursor-pointer gap-12 grid grid-rows-12 grid-cols-12 mx-auto">
        {testimonialSection?.assets.map((testimonial) => (
            <div className={testimonial.class_name} key={testimonial.id}>
              <div className="testimonial-image absolute -z-10 w-full top-0 left-0 h-full">
                <Image
                  className="h-full w-full object-top object-cover"
                  src={testimonial.asset}
                  alt="a smiling nurse"
                  fill={true}
                  sizes="100%"
                />
              </div>

              <div className="testimonial-content flex-col p-12 flex h-full w-full justify-between">
                <div className="testimonial-name">
                  <h3 className="text-2xl font-bold">{testimonial.title}</h3>

                  <p className="text-slate-500">{splitText(testimonial.asset_content)[0]}</p>
                </div>

                <div className="testimonial-text flex flex-col gap-2">
                  <FaQuoteLeft className="text-slate-400" />
                  <p>{splitText(testimonial.asset_content)[1]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="pricing-container mx-auto flex flex-col gap-16 mb-16 pt-16">
        <div className="pricing-header flex flex-col gap-8 text-center">
          <h2 className="font-bold text-5xl">
            {pricingSection?.title}
          </h2>

          <p className="w-4/5 mx-auto">
            {pricingSection?.content}
          </p>
        </div>

        <div className="pricingcard-container grid grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 gap-8">
          {pricingSection?.options.map((option) => (
            <div key={option.id} className={option.class_name}>
              <div className="save absolute right-8 top-3 bg-black text-white p-4">
                <p>{option.saving}</p>
                <span className="bg-white absolute pricetag"></span>
              </div>

              <div className="pricing-title">
                <h3 className="font-bold">{option.subscription_duration} Access</h3>
              </div>

              <div className="pricing-price">
                <p>
                  <span className="text-7xl">${option.price}</span>/
                  {option.subscription_duration}
                </p>
              </div>

              <div className="pricing-features flex flex-col gap-12">
                <p className="flex items-center">
                  <FaInfoCircle />
                  &nbsp;{option.ideal_audience}
                </p>

                <div className="features-list flex flex-col gap-2">
                  <p className="uppercase text-sm">
                    All site features including:
                  </p>

                  {option.features.map((feature,index) => (
                    <ul key={index} className="flex flex-col gap-1 ps-4">
                      <li className="flex items-center gap-1">
                        <span>
                          <FaRegCheckCircle className="text-green-900" />
                        </span>
                        {feature.feature}
                      </li>
                    </ul>
                  ))}
                </div>
              </div>

              <div className="pricing-cta">
                <Button>{option.action}</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US/ COMPARISON */}
      <section className="comparison-container flex flex-col gap-16 mb-32 pt-16 w-4/5 mx-auto">
        <div className="comparison-header">
          <h2 className="font-bold text-5xl text-center">{benefitsSection?.title}</h2>
        </div>

        <div className="comparison-content">
          <div className="comparisoncard-container p-4 grid grid-cols-1">

          {benefitsSection?.benefit_listing.map((benefit) => (

          <div key={benefit.id} className="comparison-card grid grid-cols-3 gap-4">
          <div className={`comparison-name p-4`}>
            <p className="uppercase font-bold">{benefit.type}</p>
          </div>

          <div className={`comparison-traditional p-4 ${benefit.class_name}`}>
            <p>{benefit.comparison}</p>
          </div>

          <div className={`comparison-nurseprep p-4 ${benefit.class_name} ${benefit.top_class_name}`}>
            <p>{benefit.benefit}</p>
          </div>
          </div>
          ))}
          </div>
          
        </div>
      </section>

      {/* CTA BANNER SECTION */}
      <section className="banner-container bg-black text-white flex flex-col gap-12 p-12 mb-16 items-center justify-center text-center">
        <div className="banner-text flex-flex-col gap-4">
          <p className="text-slate-300 text-9xl">{firstPart}.</p>
          <p className="text-slate-200 text-9xl">{secondPart}.</p>
          <p className="text-slate-50 text-9xl">{thirdPart}.</p>
        </div>

        <div className="banner-btn w-full">
          <Button className="h-16 w-1/4 bg-white text-black">
            START TODAY
          </Button>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-container mx-auto flex flex-col gap-8 mb-16 p-4">
        <div className="faq-header">
          <h2 className="font-bold text-5xl">
            {FAQSection?.title}
          </h2>
        </div>

        <div className="faq-content p-8">
          <Accordion type="single" collapsible>
          {FAQSection?.content_blocks.map((question,index) => (
              <AccordionItem value={String(question.id)} key={index}>
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

      {/* CONTACT US SECTION */}
      <section className="contact-container mx-auto flex justify-center flex-col gap-8 px-4 py-24">

        <div className="contact-content p-4 grid grid-cols-2 grid-rows-1">
          <div className="contact-text w-4/5 flex flex-col gap-16 justify-center mx-auto">
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

          <div className="contact-form p-8 mx-auto">
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
    </div>
  );
};

export default Homepage;
