"use client"

import React from "react"
import styles from "@/styles/GradientAnimation.module.css"
import { useAppSelector } from "@/lib/hooks"

const BgImage = () => {
  const DarkTheme = useAppSelector((state) => state.blackTheme.blackTheme)
  return (
    <>
      {DarkTheme ? (
        <div className={styles.darkAnimatedGradient}></div>
      ) : (
        <div className={styles.animatedGradient}></div>
      )}
    </>
  )
}

export default BgImage
