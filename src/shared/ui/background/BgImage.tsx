"use client"

import React from "react"

import { useAppSelector } from "@/lib/hooks"
import styles from "@/styles/GradientAnimation.module.css"

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
