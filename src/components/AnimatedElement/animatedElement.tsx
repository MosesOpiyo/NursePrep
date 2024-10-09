"use client"

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

interface AnimatedElementProps {
  children: React.ReactNode
  animation: 'fadeIn' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'zoomIn'
  duration?: number
  delay?: number
}

const animations: Record<AnimatedElementProps['animation'], Variants> = {
  fadeIn: { 
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeInUp: { 
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInLeft: { 
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  fadeInRight: { 
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  zoomIn: { 
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 }
  },
}

export function AnimatedElement({ children, animation, duration = 0.5, delay = 0 }: AnimatedElementProps) {
  const [ref, isIntersecting] = useIntersectionObserver({ freezeOnceVisible: true })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isIntersecting ? 'visible' : 'hidden'}
      variants={animations[animation]}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}