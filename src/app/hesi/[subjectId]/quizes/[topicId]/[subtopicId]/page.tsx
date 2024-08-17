"use client"

import Link from "next/link";
import "../../../../../../styles/globals.css";
import { testsArray } from "@/assets/servicesData/services";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export const getSingleSubject =  (id: any) => {
  const data = testsArray[id];

  if (!data) {
    notFound();
  }

  return data;
};

export const getSingleTopic =  (subjectId: any, contentId: any) => {
  const data = testsArray[subjectId].topics[contentId];

  if (!data) {
    notFound();
  }

  return data;
};

export const getSingleSubTopicContent =  (subjectId: any,topicId: any) => {

  const data = testsArray[subjectId].topics[topicId].content;

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

 function testtopicPage({
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

  const subject =  getSingleSubject(params.subjectId); // gets single subject
  const topic =  getSingleTopic(params.subjectId, params.topicId); // gets single topic
  const quiz =  getSingleSubTopicContent(params.subjectId,params.topicId);  // gets single topic content
  
  const nextsubtopic = nextsubTopic(params.subtopicId);
  const nexttopic = nextTopic(params.topicId);

  return (
    <section className="relative flex flex-col gap-16 items-center justify-center px-16 py-8 mb-24">
      {/* NEXT BUTTON */}
      <div className="absolute top-2 right-2">
        <Link
          href={`/teas/${params.subjectId}/topics/${nexttopic}/${nextsubtopic}`}
        >
          NEXT
        </Link>
      </div>

      {/* HEADER */}
      <div className="content-header relative p-8 flex flex-col gap-2 text-center items-center justify-center">
        <h2 className="font-bold text-4xl">{topic.title} </h2>

        <p className="font-bold text-2xl">{topic.subtitle}</p>
      </div>

      {/* INTRO */}
      <div className="content-intro text-center w-4/5 mx-auto">
        <p>
          Welcome to the first step in NursePrep’s {topic.title} Course! We are
          so glad you are here! This {topic.title} Practice test is meant to
          show you exactly how you would score if you were to take the real exam
          today. Score Report and Diagnose : You’ll find your personalized score
          report at the end, which you can use to help develop a study plan
          based on your areas of strength and areas for improvement. Start
          Improving: Sign Up to NurseHub to start improving your score today.
          You’ve got this!
        </p>
      </div>

      <hr className="h-0.5 bg-slate-300 w-4/5 mx-auto block" />

      {/* QUESTIONS */}
      <div className="content-questions flex flex-col gap-8 items-center w-full">
        <Tabs defaultValue="1" className="w-full">
          {/* TAB LIST */}
          <TabsList className="grid grid-cols-5 gap-2 w-4/5 mx-auto">
            <TabsTrigger value="1" className="w-max">Question 1</TabsTrigger>
            <TabsTrigger value="2" className="w-max">Question 2</TabsTrigger>
            <TabsTrigger value="3" className="w-max">Question 3</TabsTrigger>
            <TabsTrigger value="4" className="w-max">Question 4</TabsTrigger>
            <TabsTrigger value="5" className="w-max">Question 5</TabsTrigger>
            <TabsTrigger value="6" className="w-max">Question 6</TabsTrigger>
            <TabsTrigger value="7" className="w-max">Question 7</TabsTrigger>
            <TabsTrigger value="8" className="w-max">Question 8</TabsTrigger>
            <TabsTrigger value="9" className="w-max">Question 9</TabsTrigger>
            <TabsTrigger value="10" className="w-max">Question 10</TabsTrigger>
          </TabsList>

          {/* TAB CONTENT */}
          <div className="mt-4">
            <TabsContent value="1">
              {/* QUESTION 1 */}
              <div className="mt-16 flex flex-col gap-4 p-4">

                <h2 className="font-bold text-2xl">QUESTION 1:</h2>


                  <div>
                  <p>solve</p>
                  <p className="font-medium text-2xl"> 3(72+5)÷6–3</p>
                </div>

                {/* RADIO OPTIONS */}
                <div className="p-4 flex flex-col gap-4">
                  <h1>Select an Answer:</h1>

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
            </TabsContent>

            <TabsContent value="2">
              {/* QUESTION 2 */}
              <div className="mt-16 flex flex-col gap-4 p-4">
                <h2 className="font-bold text-2xl">QUESTION 2:</h2>

                <div>
                  <p>solve</p>
                  <p className="font-medium text-2xl"> 3(72+5)÷6–3</p>
                </div>

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
            </TabsContent>

            <TabsContent value="3">
              {/* QUESTION 3 */}
              <div className="mt-16 flex flex-col gap-4 p-4">
                <h2 className="font-bold text-2xl">QUESTION 3:</h2>
                <div>
                  <p>solve</p>
                  <p className="font-medium text-2xl"> 3(72+5)÷6–3</p>
                </div>

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
            </TabsContent>

            <TabsContent value="4">
              {/* QUESTION 4 */}
              <div className="mt-16 flex flex-col gap-4 p-4">
                <h2 className="font-bold text-2xl">QUESTION 4:</h2>
                <div>
                  <p>solve</p>
                  <p className="font-medium text-2xl"> 3(72+5)÷6–3</p>
                </div>

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
            </TabsContent>

            <TabsContent value="5">
              {/* QUESTION 5 */}
              <div className="mt-16 flex flex-col gap-4 p-4">
                <h2 className="font-bold text-2xl">QUESTION 5:</h2>
                <div>
                  <p>solve</p>
                  <p className="font-medium text-2xl"> 3(72+5)÷6–3</p>
                </div>

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
            </TabsContent>

            <TabsContent value="6">
              {/* QUESTION 6 */}
              <div className="mt-16 flex flex-col gap-4 p-4">
                <h2 className="font-bold text-2xl">QUESTION 6:</h2>
                <div>
                  <p>solve</p>
                  <p className="font-medium text-2xl"> 3(72+5)÷6–3</p>
                </div>

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
            </TabsContent>

            <TabsContent value="7">
              {/* QUESTION 7 */}
              <div className="mt-16 flex flex-col gap-4 p-4">
                <h2 className="font-bold text-2xl">QUESTION 7:</h2>
                <div>
                  <p>solve</p>
                  <p className="font-medium text-2xl"> 3(72+5)÷6–3</p>
                </div>

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
            </TabsContent>

            <TabsContent value="8">
              {/* QUESTION 8 */}
              <div className="mt-16 flex flex-col gap-4 p-4">
                <h2 className="font-bold text-2xl">QUESTION 8:</h2>
                <div>
                  <p>solve</p>
                  <p className="font-medium text-2xl"> 3(72+5)÷6–3</p>
                </div>

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
            </TabsContent>

            <TabsContent value="9">
              {/* QUESTION 9 */}
              <div className="mt-16 flex flex-col gap-4 p-4">
                <h2 className="font-bold text-2xl">QUESTION 9:</h2>
                <div>
                  <p>solve</p>
                  <p className="font-medium text-2xl"> 3(72+5)÷6–3</p>
                </div>

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
            </TabsContent>

            <TabsContent value="10">
              {/* QUESTION 10 */}
              <div className="mt-16 flex flex-col gap-4 p-4">
                <h2 className="font-bold text-2xl">QUESTION 10:</h2>
                <div>
                  <p>solve</p>
                  <p className="font-medium text-2xl"> 3(72+5)÷6–3</p>
                </div>

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
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {/* NEXT BUTTON */}
      {/* <div className="relative">
        <Button>
          <Link
            href={`/teas/${params.subjectId}/topics/${nexttopic}/${nextsubtopic}`}
          >
            NEXT LESSON
          </Link>
        </Button>
      </div> */}
    </section>
  );
}

export default testtopicPage;
