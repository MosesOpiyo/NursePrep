import React from "react";
import { Button } from "../ui/button";
import "./Homepage.css";
import Image from "next/image";
import dataArray from "../../assets/servicesData/services";

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
            <div key={item.id} className="service-card cursor-pointer relative flex flex-col">
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

      <div className="data">
        <p>hello</p>
      </div>
    </div>
  );
};

export default Homepage;
