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

        {/* TEAS SUBJECT LIST */}
        <section className="teas-list mt-16 mb-32 flex flex-col gap-4">
          <div className="teas-header flex flex-col text-center p-4 gap-4 items-center">
            <h2 className="font-bold text-4xl sm:text-5xl">
              ATI TEAS 7 Free Practice Tests
            </h2>
            <p>Choose an ATI TEAS 7 subject area below to begin practicing.</p>
          </div>

          <div className="container mx-auto py-12">
            {/* <h1 className="text-4xl font-bold mb-8 text-center">
              TEAS Subjects
            </h1> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {subjects.map((subject) => (
                <Link href={`/teas-test/${subject.slug}`} key={subject.slug}>
                  <Card className="h-80 text-white flex flex-col justify-center hover:shadow-lg transition-shadow bg-transparent relative">
                    <CardHeader>
                      <CardTitle className='text-4xl'>{subject.name}</CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p>Explore {subject.name} topics for TEAS</p>
                    </CardContent>

                    <div className="subject-image absolute -z-10 w-full top-0 left-0 h-full after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:absolute after:bg-black after:opacity-70 after:z-10 after:rounded-xl">
                      <Image
                        className="h-full w-full object-center object-cover"
                        src={subject.imageUrl}
                        alt="a smiling nurse"
                        fill={true}
                        sizes="100%"
                      />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* WALKTHROUGH VIDEO */}
        <section className="walkthrough-container mb-32 flex flex-col gap-16">
          <div className="walkthrough-header flex text-center p-4 flex-col gap-4 items-center">
            <h2 className="font-bold text-4xl sm:text-5xl">
              Wondering where to start?
            </h2>
            <p>Follow the step-by-step guide video below: </p>
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
        <section className="faq-container mx-auto flex flex-col gap-8 mb-32 p-4">
          <div className="faq-header text-center">
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
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}