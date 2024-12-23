import { ReactNode } from 'react'
import Image from 'next/image'

interface HowItWorksCardProps {
    number: string
    title: string
    description: string
    imageSrc: string
    imageAlt: string
  }
  
  export function HowItWorksCard({ number, title, description, imageSrc, imageAlt }: HowItWorksCardProps) {
    return (
      <div className="group relative h-[400px] sm:h-[300px] md:h-full overflow-hidden rounded-2xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill={true}
          sizes="100%"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-t `}>
          <div className="absolute bg-[#ece0c6] bottom-0 w-full p-4 sm:p-6 md:p-8">
            <div>
              <h3 className="mb-1 text-xl font-bold sm:mb-2 sm:text-2xl">
                {title}
              </h3>
              <p className="text-xs  sm:text-sm">{description}</p>
            </div>

            <div className="absolute right-0 top-0 z-10 flex w-full justify-end p-4 sm:p-6 md:p-8">
              <span className="text-lg font-medium ">{number}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  