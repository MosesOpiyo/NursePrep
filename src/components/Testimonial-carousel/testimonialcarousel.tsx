import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

interface Testimonial {
  id: number
  name: string
  role: string
  quote: string
  image: string
  position: 'top' | 'top-right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'top-left'
  bgColor?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Mark",
    role: "Business Owner",
    quote: "Took the TEAS 7 and scored 93%! The practice tests and study guides were incredibly helpful. I felt well-prepared and confident going into the exam.",
    image: "/ceo.jpg",
    position: 'top-left',
    bgColor: 'bg-[#0134f180]'
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Digital Creator",
    quote: "I studied for three weeks and scored a 74%. The platform's resources, especially the practice tests and study guides, made a huge difference. I'm officially admitted into the nursing program!",
    image: "/co-founder.jpg",
    position: 'top',
  },
  {
    id: 3,
    name: "Alex Jones",
    role: "Entrepreneur",
    quote: "I scored 92% on the TEAS 7. The comprehensive study package and Mometrix flashcards were invaluable. I highly recommend this platform for anyone preparing for the exam.",
    image: "/founder.jpg",
    position: 'top-right',
    bgColor: 'bg-[#0134f180]'
  },
  {
    id: 4,
    name: "Mary Magda",
    role: "Content Creator",
    quote: "The ATI TEAS 7 platform was a game-changer for me. I was able to focus on my weak areas and improve significantly. The personalized study plan was very effective.",
    image: "/hero.jpg",
    position: 'bottom-left',
  },
  {
    id: 5,
    name: "James Eric",
    role: "Business Coach",
    quote: "I found the video tutorials and practice quizzes on the ATI TEAS 7 platform extremely useful. They helped me understand complex concepts and boosted my confidence.",
    image: "/ceo.jpg",
    position: 'bottom',
    bgColor: 'bg-[#0134f180]'
  },
  {
    id: 6,
    name: "Martha Ann",
    role: "Online Educator",
    quote: "Using the ATI TEAS 7 platform, I managed to score 90% on my first attempt. The variety of study materials and the flexibility of the platform made it easy to fit studying into my schedule.",
    image: "/co-founder.jpg",
    position: 'bottom-right',
  },
]

export default function TestimonialSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-20">
        <p className="mb-4 text-sm font-medium uppercase text-indigo-600">
          TESTIMONIALS
        </p>

        <div className="flex flex-col items-center justify-center">
          <h2 className="basis-full text-3xl md:text-4xl font-bold tracking-tight">
            Real People
          </h2>
          <span className="text-indigo-600 text-lg italic">with</span>
          <h2 className="basis-full text-3xl md:text-4xl font-bold tracking-tight">
            Real Results
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className={`
              max-w-sm mx-auto
              ${
                testimonial.bgColor
                  ? "text-white " + testimonial.bgColor
                  : "bg-white"
              }
              transform transition-transform hover:scale-105 flex items-center justify-center
              ${testimonial.position === "top" ? "lg:col-start-2" : ""}
              ${testimonial.position === "top-right" ? "lg:col-start-3" : ""}
              ${testimonial.position === "bottom" ? "lg:col-start-2" : ""}
            `}
          >
            <CardContent className="p-6">
              <div className="mb-4">
                <p className="text-lg leading-none">{testimonial.quote}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p
                    className={`text-sm ${
                      testimonial.bgColor ? "text-white/80" : "text-gray-600"
                    }`}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

