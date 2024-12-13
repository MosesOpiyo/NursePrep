"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Stethoscope, Pill, Clipboard, AmbulanceIcon as FirstAid, Brain, Heart, BookOpen } from 'lucide-react'
import { motion } from "framer-motion"
import Image from "next/image"

export default function CTA() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <h2 className="basis-full text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Nursing <br /> <span className="text-[#4f46e5]">success</span>  <br /> simplified.
          </h2>
          <p className="text-lg text-gray-600">
          Maximize Your Nursing Potential with NursePrep. <br /> Start Your Success Journey Today.
          </p>
          <div className="flex flex-wrap gap-4">
            
            <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
              Sign Up
            </button>
          </div>
        </div>

        {/* Right Column - Image Grid */}
        <div className="relative grid grid-cols-2 gap-4 h-[500px]">
          {/* Top left Image */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/anatomy.jpg"
              alt="Team meeting"
              fill
              className="object-cover"
            />
          </div>

          {/* Top Right Image */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/oneonone.jpg"
              alt="Team meeting"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom Left Image */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/student.jpg"
              alt="Woman with mobile device"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom Right Image */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/ap-large.jpg"
              alt="Man with tablet"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

