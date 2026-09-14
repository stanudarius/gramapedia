"use client"

import { memo } from "react"
import { motion, type MotionProps, type Variants } from "motion/react"

import { cn } from "@/lib/utils"

interface TextAnimateProps extends Omit<MotionProps, "children" | "className"> {
  children: string
  className?: string
  delay?: number
  duration?: number
  accessible?: boolean
}

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.05,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.3 },
  },
}

const TextAnimateBase = ({
  children,
  delay = 0,
  duration = 0.3,
  className,
  accessible = true,
  ...props
}: TextAnimateProps) => {
  const segments = children.split(/(\s+)/)

  return (
    <motion.span
      variants={{
        ...containerVariants,
        show: {
          ...containerVariants.show,
          transition: {
            delayChildren: delay,
            staggerChildren: duration / segments.length,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      className={cn("whitespace-pre-wrap", className)}
      aria-label={accessible ? children : undefined}
      {...props}
    >
      {accessible ? <span className="sr-only">{children}</span> : null}
      {segments.map((segment, index) => (
        <motion.span
          key={`word-${segment}-${index}`}
          variants={itemVariants}
          className="inline-block whitespace-pre"
          aria-hidden={accessible ? true : undefined}
        >
          {segment}
        </motion.span>
      ))}
    </motion.span>
  )
}

export const TextAnimate = memo(TextAnimateBase)
