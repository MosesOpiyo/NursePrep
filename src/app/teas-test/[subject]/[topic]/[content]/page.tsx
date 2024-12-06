import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { subjects } from "@/lib/subjects";
import nurse from '../../../../../assets/renal.png'
import Image from "next/image";
import './page.css'

export default function TopicPage({
  params,
}: {
  params: { subject: string; topic: string; content: string };
}) {
  const { subject, topic, content } = params;
  const subjectData = subjects[subject];

  if (!subjectData) {
    notFound();
  }

  const topicData = subjectData.topics.find(
    (t) => t.title.toLowerCase().replace(/\s+/g, "-") === topic
  );
  if (!topicData) {
    notFound();
  }

  const contentData = topicData.subtopic
    .flatMap((st) => st.lessonContent)
    .find((c) => c.title.toLowerCase().replace(/\s+/g, "-") === content);

  if (!contentData) {
    notFound();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{contentData.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-8 flex flex-col">
          <span className="font-bold">Introduction:</span>
          This is the {contentData.type} content for {contentData.title} in the{" "}
          {subject} subject.
        </p>
        {/* Add actual lesson or quiz content here */}
        {/* <p>{contentData.content}</p> */}

        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-2xl">Renal Changes in pregnancy </h2>

          <p className="pl-4">
            The renal system undergoes significant changes to maintain fluid and
            electrolyte balance, excrete metabolic wastes, and regulate blood
            pressure during pregnancy
          </p>


          <div className="pl-4">
          <p className="pl-8">The main renal changes include:</p>
          <ul className="list-disc pl-16 flex flex-col gap-2">
            
            <li>
              Increased renal blood flow: The amount of blood flowing through
              the kidneys per minute increases by 50% to 80% during pregnancy.
              This is due to increased cardiac output and decreased renal
              vascular resistance. The renal blood flow peaks at mid-pregnancy
              and then declines slightly until term. The normal range of renal
              blood flow in pregnancy is 1200 to 1500 mL/min.
            </li>

            <div className="image-container relative  my-8">
            <Image
            className="h-full w-full object-top object-cover"
            src={nurse}
            alt="a smiling nurse"
            fill={true}
            sizes="100%"
          />
            </div>
            

            <li>
              Increased renal blood flow: The amount of blood flowing through
              the kidneys per minute increases by 50% to 80% during pregnancy.
              This is due to increased cardiac output and decreased renal
              vascular resistance. The renal blood flow peaks at mid-pregnancy
              and then declines slightly until term. The normal range of renal
              blood flow in pregnancy is 1200 to 1500 mL/min.
            </li>

            <li>
              Increased renal blood flow: The amount of blood flowing through
              the kidneys per minute increases by 50% to 80% during pregnancy.
              This is due to increased cardiac output and decreased renal
              vascular resistance. The renal blood flow peaks at mid-pregnancy
              and then declines slightly until term. The normal range of renal
              blood flow in pregnancy is 1200 to 1500 mL/min.
            </li>
            <li>
              Increased renal blood flow: The amount of blood flowing through
              the kidneys per minute increases by 50% to 80% during pregnancy.
              This is due to increased cardiac output and decreased renal
              vascular resistance. The renal blood flow peaks at mid-pregnancy
              and then declines slightly until term. The normal range of renal
              blood flow in pregnancy is 1200 to 1500 mL/min.
            </li>
          </ul>
          </div>
          
        </div>
      </CardContent>
    </Card>
  );
}
