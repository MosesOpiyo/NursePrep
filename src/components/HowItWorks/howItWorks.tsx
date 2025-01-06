import { ReactNode } from 'react'
import Image from 'next/image'
import { LucideUserPen, LucideUnplug } from 'lucide-react'


interface HowItWorksCardProps {
    number: string
    title: string
    description: string
    imageSrc: string
    imageAlt: string
    icon: React.ReactNode
  }
  
  export function HowItWorksCard({ number, title, description, imageSrc, imageAlt, icon }: HowItWorksCardProps) {
    return (
     
        <div className="py-10 px-4 flex flex-col gap-8 h-full items-start bg-white group relative rounded-[20px]">
          <div className='flex w-full justify-between gap-4'>
            <h3 className="w-[50%] text-2xl font-bold">{title}</h3>

            <div className="bg-[#f1f5ff] h-[50px] w-[50px] flex items-center justify-center rounded-[50%] works-icon">
              {icon}
            </div>
          </div>

          <p>{description}</p>
        </div>
     
    );
  }
  