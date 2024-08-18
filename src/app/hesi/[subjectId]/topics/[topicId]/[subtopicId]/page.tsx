"use client";

import Link from "next/link";
import "../../../../../../styles/globals.css";
import { topicsArray } from "@/assets/servicesData/services";
import { notFound } from "next/navigation";
import "./page.css";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const getSingleSubject = (id: any) => {
  const data = topicsArray[id];

  if (!data) {
    notFound();
  }

  return data;
};

export const getSingleTopic = (subjectId: any, contentId: any) => {
  const data = topicsArray[subjectId].content[contentId];

  if (!data) {
    notFound();
  }

  return data;
};

export const getSingleSubTopicContent = (subjectId: any, topicId: any) => {
  const data = topicsArray[subjectId].content[topicId].content;

  if (!data) {
    notFound();
  }

  return data;
};

function nextsubTopic(value: any): any {
  return Number(value) + 1;
}

function nextTopic(value: any): any {
  return Number(value) + 1;
}

function TopicPage({
  params,
}: {
  params: {
    subjectId: string;
    topicId: string;
    subtopicId: string;
  };
}) {
  const [selectedOption, setSelectedOption] = useState<string>("option1");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const subject = getSingleSubject(params.subjectId);
  const topic = getSingleTopic(params.subjectId, params.topicId);
  const subtopic = getSingleSubTopicContent(params.subjectId, params.topicId);
  const nextsubtopic = nextsubTopic(params.subtopicId);
  const nexttopic = nextTopic(params.topicId);

  return (
    <section className="relative flex flex-col gap-16 items-center justify-center px-16 py-8 mb-24">
      {/* NEXT BUTTON */}
      <div className="absolute top-2 right-2">
        <Link
          href={`/hesi/${params.subjectId}/topics/${nexttopic}/${nextsubtopic}`}
        >
          NEXT
        </Link>
      </div>

      {/* HEADER */}
      <div className="content-header relative p-8 flex flex-col gap-2 text-center items-center justify-center">
        <h2 className="font-bold text-4xl">{topic.topic} </h2>

        <p className="font-bold text-2xl">{topic.subtopic}</p>
      </div>

      {/* INTRO */}
      <div className="content-intro text-center w-4/5 mx-auto">
        <p>
          Welcome to NursePrep’s lesson on {topic.subtopic} Lesson. This lesson
          serves to give you a quick overview of this concept, with three
          specific skill lessons that follow.
        </p>
      </div>

      <hr className="h-0.5 bg-slate-300 w-4/5 mx-auto block" />

      {/* VIDEO */}
      <div className="content-video flex flex-col gap-4 items-center w-4/5 mx-auto">
        <div className="video-heder">
          <h2 className="font-bold text-2xl">
            Watch the short video about the lesson below
          </h2>
        </div>

        <div className="video-container h-80 w-full mx-auto">
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
      </div>

      <hr className="h-0.5 bg-slate-300 w-4/5 mx-auto block" />

      {/* NOTES */}
      <div className="content-notes flex flex-col gap-8">
        {/* GOALS */}
        <div className="goals flex flex-col gap-4">
          <h2 className="font-bold text-4xl">Learning Goals</h2>

          <ul className="ps-1">
            <li className="list-disc">
              {" "}
              Determine the meaning of a prefix using two strategies.
            </li>
          </ul>
        </div>

        {/* WHY IMPORTANT */}
        <div className="importance goals flex flex-col gap-4">
          <h2 className="font-bold text-4xl">
            Why do we need to know this skill?
          </h2>

          <ul className="ps-1">
            <li className="list-disc">
              <span className="font-bold">Prefix:</span> an affix that goes
              before root words to change or alter the meaning.
            </li>
          </ul>
        </div>

        {/* VOCABULARY */}
        <div className="vocab goals flex flex-col gap-4">
          <h2 className="font-bold text-4xl">Key Vocabulary</h2>

          <ul className="ps-1">
            <li className="list-disc">
              <span className="font-bold">Prefix:</span> an affix that goes
              before root words to change or alter the meaning.
            </li>
          </ul>
        </div>

        {/* KEY POINTS */}
        <div className="points goals flex flex-col gap-4">
          <h2 className="font-bold text-4xl">Key Points</h2>

          <ul className="ps-1">
            <li className="list-disc">
              Use the two strategies (Study and Memorize and Plug It In) to
              determine the meaning of the prefix.
            </li>
            <li className="list-disc">
              {" "}
              Read each question and determine if you can eliminate any answer
              choices based on your familiarity with the words and their
              meanings.
            </li>
          </ul>
        </div>
      </div>

      <hr className="h-0.5 bg-slate-300 w-4/5 mx-auto block" />

      {/* QUESTIONS */}
      <div className="content-questions flex flex-col gap-8 items-center w-full">
        <h2 className="font-bold text-4xl">Sample Questions</h2>

        <div className="grid grid-cols-2 gap-8 justify-between w-4/5 mx-auto">
          {/* QUESTION 1 */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl">QUESTION 1:</h2>
            <h2>3(72+5)÷6–3</h2>

            {/* RADIO OPTIONS */}
            <div>
              <h1>Select an Option</h1>
              <form>
                <div className="radioContainer">
                  <input
                    type="radio"
                    id="option1"
                    name="options"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleChange}
                    className="radioInput"
                  />
                  <label htmlFor="option1" className="radioLabel">
                    Option 1
                  </label>
                </div>
                <div className="radioContainer">
                  <input
                    type="radio"
                    id="option2"
                    name="options"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleChange}
                    className="radioInput"
                  />
                  <label htmlFor="option2" className="radioLabel">
                    Option 2
                  </label>
                </div>
                <div className="radioContainer">
                  <input
                    type="radio"
                    id="option3"
                    name="options"
                    value="option3"
                    checked={selectedOption === "option3"}
                    onChange={handleChange}
                    className="radioInput"
                  />
                  <label htmlFor="option3" className="radioLabel">
                    Option 3
                  </label>
                </div>
              </form>

              <div className="answer flex gap-4 items-center">
                <p>You selected: {selectedOption}</p>
                <Button>VIEW ANSWER</Button>
              </div>
              
            </div>
          </div>

          {/* QUESTION 2 */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl">QUESTION 2:</h2>
            <h2>3(72+5)÷6–3</h2>

            {/* RADIO OPTIONS */}
            <div>
              <h1>Select an Option</h1>
              <form>
                <div className="radioContainer">
                  <input
                    type="radio"
                    id="option1"
                    name="options"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleChange}
                    className="radioInput"
                  />
                  <label htmlFor="option1" className="radioLabel">
                    Option 1
                  </label>
                </div>
                <div className="radioContainer">
                  <input
                    type="radio"
                    id="option2"
                    name="options"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleChange}
                    className="radioInput"
                  />
                  <label htmlFor="option2" className="radioLabel">
                    Option 2
                  </label>
                </div>
                <div className="radioContainer">
                  <input
                    type="radio"
                    id="option3"
                    name="options"
                    value="option3"
                    checked={selectedOption === "option3"}
                    onChange={handleChange}
                    className="radioInput"
                  />
                  <label htmlFor="option3" className="radioLabel">
                    Option 3
                  </label>
                </div>
              </form>

              <div className="answer flex gap-4 items-center">
                <p>You selected: {selectedOption}</p>
                <Button>VIEW ANSWER</Button>
              </div>
              
            </div>
          </div>

          {/* QUESTION 3 */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl">QUESTION 3:</h2>
            <h2>3(72+5)÷6–3</h2>

            {/* RADIO OPTIONS */}
            <div>
              <h1>Select an Option</h1>
              <form>
                <div className="radioContainer">
                  <input
                    type="radio"
                    id="option1"
                    name="options"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleChange}
                    className="radioInput"
                  />
                  <label htmlFor="option1" className="radioLabel">
                    Option 1
                  </label>
                </div>
                <div className="radioContainer">
                  <input
                    type="radio"
                    id="option2"
                    name="options"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleChange}
                    className="radioInput"
                  />
                  <label htmlFor="option2" className="radioLabel">
                    Option 2
                  </label>
                </div>
                <div className="radioContainer">
                  <input
                    type="radio"
                    id="option3"
                    name="options"
                    value="option3"
                    checked={selectedOption === "option3"}
                    onChange={handleChange}
                    className="radioInput"
                  />
                  <label htmlFor="option3" className="radioLabel">
                    Option 3
                  </label>
                </div>
              </form>
              
              <div className="answer flex gap-4 items-center">
                <p>You selected: {selectedOption}</p>
                <Button>VIEW ANSWER</Button>
              </div>
            </div>
          </div>

          {/* QUESTION 4 */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl">QUESTION 4:</h2>
            <h2>3(72+5)÷6–3</h2>

            {/* RADIO OPTIONS */}
            <div>
              <h1>Select an Option</h1>
              <form>
                <div className="radioContainer">
                  <input
                    type="radio"
                    id="option1"
                    name="options"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleChange}
                    className="radioInput"
                  />
                  <label htmlFor="option1" className="radioLabel">
                    Option 1
                  </label>
                </div>
                <div className="radioContainer">
                  <input
                    type="radio"
                    id="option2"
                    name="options"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleChange}
                    className="radioInput"
                  />
                  <label htmlFor="option2" className="radioLabel">
                    Option 2
                  </label>
                </div>
                <div className="radioContainer">
                  <input
                    type="radio"
                    id="option3"
                    name="options"
                    value="option3"
                    checked={selectedOption === "option3"}
                    onChange={handleChange}
                    className="radioInput"
                  />
                  <label htmlFor="option3" className="radioLabel">
                    Option 3
                  </label>
                </div>
              </form>
              
              <div className="answer flex gap-4 items-center">
                <p>You selected: {selectedOption}</p>
                <Button>VIEW ANSWER</Button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* NEXT BUTTON */}
      <div className="relative">
        <Button>
        <Link
          href={`/hesi/${params.subjectId}/topics/${nexttopic}/${nextsubtopic}`}
        >
          NEXT LESSON
        </Link>
        </Button>
        
      </div>
    </section>
  );
}

export default TopicPage;
