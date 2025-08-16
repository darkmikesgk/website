"use client"

import React from "react"
import styles from "@/styles/GradientAnimation.module.css"
import { useRouter } from "next/navigation"

interface TrialProps {
  type: string
}
const FreeTrial = ({ type }: TrialProps) => {
  const router = useRouter()

  switch (type) {
    case "mobile":
      return (
        <button
          onClick={() =>
            router.push("https://apps.apple.com/app/id6746678571")
          }
          className="w-full dark:active:bg-lightText/60 active:bg-dark-bg/10 transition-all duration-100 h-[50px] md:h-[70px] rounded-[10px] text-[14px] md:text-[20px] bg-white dark:bg-dark-bg"
        >
          <label className={styles.gradient__text}>free trial</label>
        </button>
      )
    case "pc":
      return (
        <button
          onClick={() =>
            router.push("https://apps.apple.com/app/id6746678571")
          }
          className="mr-[3%]"
        >
          <label className={styles.gradient__text}>free trial</label>
        </button>
      )
  }
}

export default FreeTrial
