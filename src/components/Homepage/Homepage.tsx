import React from "react";
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

const Homepage = () => {
  return (
    <div>
      {/* SERVICES SECTION */}
      <section className="services-container flex flex-col gap-4">
        {/* SERVICES-HEADER */}
        <div className="services-header my-16 p-4 mx-auto grid gap-4">
          <div className="header">
            <h2 className="font-bold text-5xl">
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
        <div className="services-list grid gap-y-12 gap-x-10">
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
      <section className="works-container mt-16 flex flex-col gap-8 mx-auto items-center">
        <div className="works-header text-center">
          <h2 className="font-bold text-5xl">How it works</h2>
        </div>

        <div className="works-content w-4/5 grid grid-cols-12 grid-rows-12 gap-4">
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
      <section className="cta-container pb-16 mb-16 grid grid-cols-12 grid-rows-12 gap-12">
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
          <h3 className="text-5xl">Built for all dreamers everywhere.</h3>

          <div className="cta-inner text-lg flex flex-col gap-12 ps-12">
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
      <section className="testimonials-container overflow-hidden mb-16 grid">
        <div className="testimonial-header flex mx-auto justify-center flex-col gap-8 p-4 relative">
          <div className="icon absolute top-0  left-4 text-6xl">
            <FaQuoteLeft />
          </div>

          <h2 className="font-bold text-5xl">What our clients say</h2>
          <p>
            Don&apos;t just take our word for it—hear from our successful
            students! Our comprehensive courses and personalized support have
            helped countless aspiring nurses achieve their dreams.{" "}
          </p>
          <Button className="h-12 w-2/4">View More</Button>
        </div>

        <div className="testimonialcard-container cursor-pointer gap-12 grid grid-rows-12 grid-cols-12 mx-auto">
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
      </section>

      {/* PRICING SECTION */}
      <section className="pricing-container mx-auto flex flex-col gap-16 mb-16 pt-16">
        <div className="pricing-header flex flex-col gap-8 text-center">
          <h2 className="font-bold text-5xl">
            Our pricing is simple with no hidden fees
          </h2>

          <p className="w-4/5 mx-auto">
            We offer flexible subscription plans to fit your study schedule and
            budget. Whether you need short-term access or a more extended
            commitment, we have a plan for you.
          </p>
        </div>

        <div className="pricingcard-container grid grid-rows-1 grid-cols-2 gap-8">

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

              <div className="pricing-features flex flex-col gap-12">
                <p className="flex items-center"><FaInfoCircle />&nbsp;{item.ideal}</p>

                <div className="features-list flex flex-col gap-2">
                  <p className="uppercase text-sm">
                    All site features including:
                  </p>

                  {pricingFeatures.map((item) => (
                    <ul key={item.id} className="flex flex-col gap-1 ps-4">
                      <li className="flex items-center gap-1">
                        <span>
                          <FaRegCheckCircle className="text-green-900" />
                        </span>
                        {item.feature}
                      </li>
                    </ul>
                  ))}
                </div>
              </div>

              <div className="pricing-cta">
                <Button>Get Monthly Plan</Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
