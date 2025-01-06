'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface Testimonial {
  id: number
  quote: string
  author: string
  role: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "NursePrep made all the difference in my exam preparation! The dosage calculation modules were clear, and the practice questions mimicked the real test perfectly. I passed my nursing exam on my first attempt!",
    author: "Ursula Casserly",
    role: "Registered Nurse",
    image: "/hero.jpg",
  },
  {
    id: 2,
    quote: "I struggled with time management during my studies, but NursePrep’s time management course changed everything. I felt more organized and confident going into my exams.",
    author: "Marcus Chen",
    role: "Nursing Student",
    image: "/man-user.jpg",
  },
  {
    id: 3,
    quote: "The short courses on NursePrep were a game-changer for me. The math refresher course helped me tackle tricky medication dosages with ease. Highly recommend it to every nursing student!",
    author: "Sarah Mitchell",
    role: "Licensed Practical Nurse",
    image: "/learner.jpg",
  },
  {
    id: 4,
    quote: "NursePrep’s user-friendly platform and detailed resources made studying less stressful. I loved the flexibility to study at my own pace. Thank you for helping me succeed!",
    author: "David Park",
    role: "Nursing Graduate",
    image: "/man-user2.jpg",
  }
]

export default function HomeTestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      next()
    }, 5000) // Change testimonial every 5 seconds

    return () => clearInterval(timer)
  }, [currentIndex])

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const previous = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  return (

    <div className='flex flex-col gap-8'>
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                  What Our <span className="text-indigo-600">Clients</span> Say
                </h2>
    
              <p className="text-[#71717a]">
                Don&apos;t just take our word for it—hear from our successful
                students! Our comprehensive courses and personalized support have
                helped countless aspiring nurses achieve their dreams.{" "}
              </p>
            </div>

    <div className="w-full">
      <div className="grid lg:grid-cols-2 gap-8 items-center bg-[#f5f2ef] rounded-[20px] overflow-hidden">
        <div className="relative aspect-auto lg:h-full h-[400px] order-1 lg:order-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              <Image
                src={testimonials[currentIndex].image}
                alt="Testimonial image"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
             
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="p-6 sm:p-8 lg:px-12 lg:py-20 order-2 lg:order-none">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="relative">
                <svg
                  className="absolute -top-12 -left-8 h-16 w-16 text-muted-foreground/20"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative text-xl sm:text-2xl font-medium leading-relaxed text-gray-900">
                  {testimonials[currentIndex].quote}
                </p>
              </div>
              <footer className="text-sm">
                <p className="font-semibold text-gray-900">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentIndex].role}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
          <div className="mt-8 space-y-4">
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={previous}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "w-8 bg-gray-900"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    
  )
}

