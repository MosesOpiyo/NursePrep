"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Testimonial {
  author: {
    name: string
    title: string
    company: string
    location: string
    image: string
  }
  companyLogo: string
  text: string
}

const testimonials: Testimonial[] = [
  {
    author: {
      name: "Denis Slavska",
      title: "CTO",
      company: "Alitic",
      location: "New York City, New York",
      image: "/placeholder.svg?height=100&width=100",
    },
    companyLogo: "/placeholder.svg?height=40&width=100",
    text: "They tailor their solutions to our specific needs and goals."
  },
  {
    author: {
      name: "Jahan Melad",
      title: "Project Manager",
      company: "Buildwave",
      location: "New York City, New York",
      image: "/placeholder.svg?height=100&width=100",
    },
    companyLogo: "/placeholder.svg?height=40&width=100",
    text: "They organized their work and internal management was outstanding."
  },
  {
    author: {
      name: "Jim Halpert",
      title: "Lead Engineering",
      company: "InHive Space",
      location: "New York City, New York",
      image: "/placeholder.svg?height=100&width=100",
    },
    companyLogo: "/placeholder.svg?height=40&width=100",
    text: "Working with them was a great experience."
  },
  {
    author: {
      name: "Jahan Melad",
      title: "Project Manager",
      company: "Buildwave",
      location: "New York City, New York",
      image: "/placeholder.svg?height=100&width=100",
    },
    companyLogo: "/placeholder.svg?height=40&width=100",
    text: "They organized their work and internal management was outstanding."
  },
]

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: true,
  })

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="w-[95%] mx-auto px-4">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl font-bold">
          What Our <span className="text-gray-400">Clients</span> Say
        </h2>
        <div className="flex gap-2">
          <Button
            onClick={scrollPrev}
            size="icon"
            className="h-10 w-10 rounded-full bg-black text-white hover:bg-gray-800"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={scrollNext}
            size="icon"
            className="h-10 w-10 rounded-full bg-black text-white hover:bg-gray-800"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_30%] bg-gray-50 p-8 relative">
              <div className="flex justify-between items-start mb-8">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.author.image}
                    alt={testimonial.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2">
                  <Image
                    src={testimonial.companyLogo}
                    alt={testimonial.author.company}
                    width={80}
                    height={20}
                    className="object-contain"
                  />
                </div>
              </div>
              
              <Quote className="text-gray-300 h-12 w-12 absolute top-8 right-8" />
              
              <blockquote className="text-2xl font-medium mb-8 relative">
                {testimonial.text}
              </blockquote>
              
              <div className="mt-auto">
                <div className="font-semibold">{testimonial.author.name}</div>
                <div className="text-sm text-gray-600">
                  {testimonial.author.title}, {testimonial.author.company}
                </div>
                <div className="text-sm text-gray-600">{testimonial.author.location}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}