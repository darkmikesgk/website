"use client"

import React, { useEffect, useRef } from "react"

import styles from "@/styles/GradientAnimation.module.css"

const ScrollingText = () => {
  const firstRef = useRef<HTMLDivElement>(null)
  const secondRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const translating = -20 + scrollY / 50

      if (firstRef.current) {
        firstRef.current.style.transform = `translateX(${Math.min(
          translating,
          100
        )}%)`
      }
      if (secondRef.current) {
        secondRef.current.style.transform = `translateX(${-Math.min(
          translating,
          100
        )}%)`
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className="overflow-x-hidden w-full text-[8vw] xl:text-[6vw]">
        <div className="whitespace-nowrap">
          <div className="flex justify-center" ref={firstRef}>
            <p className={styles.gradient__scrolling__text}>
              schedule planning • schedule planning • schedule planning •
              schedule planning • schedule planning • schedule planning •
              schedule planning • schedule planning
            </p>
          </div>
        </div>
      </div>
      <div className="overflow-hidden w-full text-[8vw] xl:text-[6vw]">
        <div className="whitespace-nowrap ">
          <div className="flex justify-center" ref={secondRef}>
            <p className={styles.gradient__scrolling__text}>
              analytics and integration • analytics and integration • analytics
              and integration • analytics and integration • analytics and
              integration • analytics and integration
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ScrollingText
