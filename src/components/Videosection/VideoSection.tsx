'use client'

import { Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import Image from "next/image"

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="w-full max-w-7xl mx-auto">
      <div className="space-y-8">
        {/* Header Content */}
        <div className="w-full space-y-4 p-4">
            <p className="text-sm font-medium uppercase text-indigo-600">
              step-by-step video guide
            </p>

            <div className="flex sm:grid sm:grid-cols-2 flex-wrap items-center gap-4">
              <h2 className="basis-full text-3xl md:text-4xl font-bold tracking-tight">
                Wondering where to start? <br /> Follow the <span className="text-indigo-600">Step-by-Step</span> <br /> guide video below.
              </h2>
              <p className="text-gray-600 basis-full">
              Our step-by-step video guide simplifies the learning process by walking you through each stage, ensuring you understand and can follow along easily. Just hit play, pause as needed, and follow the clear instructions to achieve your goals efficiently.
              </p>
            </div>
          </div>

        {/* Video Container */}
        <div className="relative aspect-video w-[91.3svw] overflow-hidden rounded-2xl bg-gray-100 shadow-xl h-[500px]">
            {!isPlaying ? (
              <div className="absolute inset-0">
                <Image
                  src="/ap-large.jpg"
                  alt="learner on tablet"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                  aria-label="Play video"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform hover:scale-110">
                    <Play className="h-8 w-8 text-indigo-600" />
                  </div>
                </button>
              </div>
            ) : (
              <video
                className="h-full w-full"
                controls
                autoPlay
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
      </div>
    </section>
  )
}

