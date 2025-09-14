"use client"

import React, { useRef, useEffect } from "react"

import Image from "next/image"

import SecondaryPhoneBlock from "@/public/images/SecondaryPhoneBlock2.png"
import SecondaryPhoneBlock2 from "@/public/images/SecondaryPhoneBlock2_2.png"

const ScrollingImage = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1280 && ref.current) {
        // Проверка ширины экрана
        const scrollY = window.scrollY
        const newWidth = 67 + scrollY / 100
        ref.current.style.width = `${Math.min(newWidth, 80)}vw`
      } else if (window.innerWidth >= 1280 && ref.current) {
        const scrollY = window.scrollY
        const newWidth = 25 + scrollY / 100
        ref.current.style.width = `${Math.min(newWidth, 35)}vw`
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={ref} className="absolute flex justify-between duration-100">
      <Image
        src={SecondaryPhoneBlock2}
        alt=""
        className="w-[25vw] scale-125 xl:scale-100 xl:w-[12vw]"
      />
      <Image
        src={SecondaryPhoneBlock}
        alt=""
        className="w-[25vw] scale-125 xl:scale-100 xl:w-[12vw]"
      />
    </div>
  )
}

export default ScrollingImage
