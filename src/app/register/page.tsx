import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { pricingArray } from "../../assets/servicesData/services";
import { FaInfoCircle } from "react-icons/fa";
import { FaCircleXmark, FaLock } from "react-icons/fa6";
import { pricingFeatures } from "../../assets/servicesData/services";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar/navbar";
import "../../styles/globals.css";
import "./page.css";
import Footer from "@/components/Footer/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "../../assets/servicesData/services";
import Link from "next/link";




export default function Register() {

  const firstItem = pricingArray[0];

  return (
    <div>
      {/* NAVBAR SECTION */}
      <div className="navbar-container">
        <Navbar />
      </div>

      {/* PRICING SECTION */}
      <section
        className="pricing-container mx-auto flex flex-col gap-16 mb-16 pt-16"
        id="pricing"
      >
        <div className="pricing-header flex flex-col gap-8 text-center">
          <h2 className="font-bold text-5xl">
            To continue choose the plan that&apos;s perfect for you
          </h2>

          <p className="w-4/5 mx-auto">
            We offer flexible subscription plans to fit your study schedule and
            budget. Whether you need short-term access or a more extended
            commitment, we have a plan for you.
          </p>
        </div>

        <div className="pricing-content gap-4 flex flex-col-reverse md:grid md:grid-cols-2 md:grid-rows-1">
          {/* SITE CONTENT */}
          <div className="site-content">
          
            <div key={firstItem.id} className={`h-full items-center justify-center card-content ${firstItem.className}`}>

            <div className="pricing-features flex flex-col gap-12">

              <div className="features-list flex flex-col gap-2">
                <p className="uppercase text-sm">
                  All site features available for both plans including:
                </p>

                {pricingFeatures.map((item) => (
                  <ul key={item.id} className="flex flex-col gap-1 ps-4">
                    <li className="flex items-center gap-1">
                      <span>
                        <FaRegCheckCircle className="text-white" />
                      </span>
                      {item.feature}
                    </li>
                  </ul>
                ))}
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
                <Link href={`/register/${item.id}`} className="pricing-link">Get {item.btn_period} Plan</Link>
              </div>

              <div className="pricing-disclaimers flex justify-center items-start text-start flex-col">
                <div className="cancel flex items-center justify-center gap-1">
                  <div className="icon-container flex items-center justify-center">
                    <FaCircleXmark />
                  </div>

                  <p>Cancel Anytime</p>
                </div>

                <div className="secure flex items-center justify-center gap-1">
                  <div className="icon-container flex items-center justify-center">
                    <FaLock />
                  </div>

                  <p>Secure transaction</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>

      </section>

      {/* FAQ SECTION */}
      <section className="faq-container mx-auto flex flex-col gap-8 mb-16 py-16">
        <div className="faq-header">
          <h2 className="font-bold text-5xl text-center">
            Have Questions? <br /> We&apos;re here
          </h2>
        </div>

        <div className="faq-content p-8 text-start">
          <Accordion type="single" collapsible>
            {faqData.map((item) => (
              <AccordionItem value={item.value} key={item.id}>
                <AccordionTrigger className="text-xl text-start">
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

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
