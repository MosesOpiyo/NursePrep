import Link from 'next/link'
import "./page.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/Navbar/navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "../../assets/servicesData/services";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import CTA from '@/components/CTA/cta';

const subjects = [
  { name: 'English', slug: 'english', imageUrl: '/english.jpg' },
  { name: 'Math', slug: 'math', imageUrl: '/math.jpg' },
  { name: 'Science', slug: 'science', imageUrl: '/science.jpg' },
  { name: 'Reading', slug: 'reading', imageUrl: '/reading.jpg' },
]

export default function TeasPage() {
  return (
    <>
      <section className="teas-container">
        {/* NAVBAR */}
        <section className="navbar-container">
          <Navbar></Navbar>
        </section>

        {/* ati HERO SECTION */}
        <section className="ati-hero my-8 relative mx-auto bg-center bg-cover rounded-3xl text-white flex items-center justify-center">
          <div className="atihero-header z-10 flex flex-col items-center justify-center gap-8">
            <h2 className="font-extralight text-4xl sm:text-5xl">
              ATI TEAS 7 Free Practice Tests
            </h2>
          </div>
        </section>

        {/* TEAS SUBJECT LIST */}
        <section className="teas-list w-[95%] mx-auto mb-8 flex flex-col gap-4">
          <div className="teas-header flex flex-col text-start p-4 gap-4 items-start">
            <p className="text-5xl text-[#000000a8] text-start font-extralight">
              Access in-depth expert-designed resources and practice tests.{" "}
              <span className="text-black">
                Choose an ATI TEAS 7 subject area below to begin practicing:
              </span>
            </p>
          </div>

          <div className="container mx-auto py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {subjects.map((subject) => (
                <Link href={`/teas-test/${subject.slug}`} key={subject.slug}>
                  <Card
                    className={`h-80 text-white flex flex-col justify-center hover:shadow-lg hover:scale-110 transition-shadow relative ${subject.slug}`}
                  >
                    <span className="ml-6 w-1/5 border-t-2 border-t-white"></span>

                    <CardHeader>
                      <CardTitle className="text-4xl">{subject.name}</CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p>Explore {subject.name} topics for TEAS</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* WALKTHROUGH VIDEO */}
        <section className="walkthrough-container mb-8 flex flex-col gap-16 w-[95%] mx-auto">
          <div className="walkthrough-header flex flex-col text-center p-4 items-start">
            <h2 className="font-extralight text-[#000000a8] text-4xl sm:text-5xl">
              Not sure where to begin?
            </h2>
            <p className="font-extralight text-4xl sm:text-5xl text-black">
              Watch our step-by-step video to get started!
            </p>
          </div>

          <div className="walkthrough-video w-4/5 mx-auto">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/bKEGd72Lwf4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="faq-container mx-auto flex flex-col gap-8 mb-8 p-4 w-[95%]">
          <div className="faq-header text-start">
            <h2 className="font-extralight text-[#000000a8] text-4xl sm:text-5xl">
              Got any questions?
            </h2>
            <p className="font-extralight text-4xl sm:text-5xl text-black">
              We&apos;ve got answers
            </p>
          </div>

          <div className="faq-content p-6">
            <Accordion
              type="single"
              collapsible
              className="md:grid md:grid-cols-2 flex flex-col gap-2"
            >
              {faqData.map((item) => (
                <AccordionItem
                  className="bg-[#efefef] p-2 rounded-xl"
                  value={item.value}
                  key={item.id}
                >
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

        {/* CTA */}
        <div className="container mx-auto p-4 w-[95%]">
          <CTA />
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}