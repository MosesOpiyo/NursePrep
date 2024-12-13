"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Stethoscope, Pill, Clipboard, AmbulanceIcon as FirstAid, Brain, Heart, BookOpen } from 'lucide-react'
import { motion } from "framer-motion"
import Image from "next/image"

export default function CTA() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
            Customer communi-
            <br />
            cation
            <br />
            rethought.
          </h2>
          <p className="text-lg text-gray-600">
            Use Superchat to get the most out of every customer interaction. Get started today.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-white border border-gray-200 rounded-full hover:border-gray-300 transition-colors">
              Try Superchat for free
            </button>
            <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
              Book a demo
            </button>
          </div>
        </div>

        {/* Right Column - Image Grid */}
        <div className="relative grid grid-cols-2 gap-4 h-[500px]">
          {/* Top Right Image */}
          <div className="col-start-2 relative rounded-2xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Team meeting"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Bottom Left Image */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Woman with mobile device"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Bottom Right Image */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Man with tablet"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

