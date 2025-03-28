'use client'

import { motion } from 'motion/react'

export default function TextBlurEffect({ children }: { children: string }) {
  return (
    children.split('').map((char, i) => (
      <motion.span
        style={{ display: 'inline-block', whiteSpace: 'pre' }}
        key={i}
        initial={{ opacity: 0, filter: 'Blur(32px)', scale: 0.9, y: 20 }}
        animate={{ opacity: 1, filter: 'Blur(0)', scale: 1, y: 0 }}
        transition={{ delay: i * 0.035, ease: [1, 0, 0, 1], duration: 0.7 }}
      >
        {char}
      </motion.span>
    ))
  )
}