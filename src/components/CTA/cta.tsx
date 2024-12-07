"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Stethoscope, Pill, Clipboard, AmbulanceIcon as FirstAid, Brain, Heart, BookOpen } from 'lucide-react'
import { motion } from "framer-motion"

export default function CTA() {
  return (
    <Card className="bg-blue-600 text-white overflow-hidden relative h-80 flex w-full items-end">
      <motion.div 
        className="w-full p-8 sm:p-12 flex items-center justify-between gap-4 group cursor-pointer"
        whileHover="hover"
      >
        <div className="relative z-10 max-w-[60%]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            Build your ideal<br className="hidden sm:block" /> nursing career today.
          </h2>
          <p className="text-sm sm:text-base text-blue-100">
            Master TEAS with our comprehensive study materials
          </p>
        </div>
        <motion.div
          variants={{
            hover: {
              x: 10,
              transition: {
                duration: 0.2,
                ease: "easeInOut"
              }
            }
          }}
          className="relative z-10"
        >
          <Button 
            size="lg" 
            variant="secondary" 
            className="rounded-full h-12 w-12 p-0 bg-white text-blue-600 hover:bg-white/90"
            aria-label="Get started"
          >
            <ArrowRight className="h-6 w-6" />
          </Button>
        </motion.div>

        {/* Decorative Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* <Stethoscope className="absolute top-[5%] right-[15%] w-20 h-20 text-blue-400/20 transform rotate-12" />
          <Pill className="absolute top-[40%] right-[25%] w-16 h-16 text-blue-400/20 transform -rotate-15" />
          <Clipboard className="absolute top-[15%] right-[35%] w-14 h-14 text-blue-400/20" />
          <FirstAid className="absolute bottom-[-5%] right-[10%] w-24 h-24 text-blue-400/20 transform rotate-6" />
          <Brain className="absolute top-[60%] right-[30%] w-16 h-16 text-blue-400/20 transform -rotate-12" /> */}
          <Heart className="absolute top-[25%] right-[200px] w-20 h-20 text-blue-400/20 animate-pulse" />
          {/* <BookOpen className="absolute bottom-[15%] right-[40%] w-14 h-14 text-blue-400/20 transform rotate-[-8deg]" /> */}
          
          {/* Geometric shapes */}
          <div className="absolute top-[10%] right-[45%] w-24 h-24 border-2 border-blue-400/20 rounded-lg transform rotate-45" />
          <div className="absolute top-[50%] right-[15%] w-32 h-32 border-2 border-blue-400/20 rounded-full" />
          <div className="absolute bottom-[20%] right-[25%] w-20 h-20 border-2 border-blue-400/20 transform rotate-12" />
          <div className="absolute top-[30%] right-[50%] w-16 h-16 border-2 border-blue-400/20 rounded-full" />
        </div>
      </motion.div>
    </Card>
  )
}

