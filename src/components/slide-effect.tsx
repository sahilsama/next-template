'use client'

import { motion, MotionProps } from 'framer-motion'

interface SlideEffectProps {
  children: React.ReactNode;
  direction?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  duration?: number;
  ease?: [number, number, number, number] | 'easeIn' | 'easeOut' | 'easeInOut' | 'linear';
  isSpring?: boolean
}

export default function SlideEffect(
  { children, direction = 'top', delay = 0.1, duration = 0.7, ease = [1, 0, 0, 1], isSpring = true, ...props }:
    React.HTMLAttributes<HTMLDivElement> & MotionProps & SlideEffectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: direction === 'top' ? 70 : direction === 'bottom' ? -70 : 0, x: direction === 'left' ? 70 : direction === 'right' ? -70 : 0 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.2 }} // Ensures animation triggers once when 20% of the component is visible
      transition={{ duration, ease, delay, type: isSpring ? 'spring' : '' }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
