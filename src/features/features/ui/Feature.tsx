"use client"
import React from "react"

import Image from "next/image"

import { useAppSelector } from "@/lib/hooks"
import notice from "@/public/images/notice.svg"
import online from "@/public/images/online.svg"
import schedule from "@/public/images/schedule.svg"
import { TextFabric } from "@/shared/ui"
import styles from "@/styles/GradientAnimation.module.css"

interface FeatureTextProps {
  title: string
  description: string
}
interface ImageFetureProps {
  title: string
}

const ImageFeature = ({ title }: ImageFetureProps) => {
  switch (title) {
    case "management schedule":
      return <Image src={schedule} alt={""} width={48} height={48} className="w-[10vw] xl:w-[4vw]" style={{ width: "auto", height: "auto" }} />
    case "notices of record":
      return <Image src={notice} alt={""} width={48} height={48} className="w-[10vw] xl:w-[4vw]" style={{ width: "auto", height: "auto" }} />
    case "online appointment for clients":
      return <Image src={online} alt={""} width={48} height={48} className="w-[10vw] xl:w-[4vw]" style={{ width: "auto", height: "auto" }} />
  }
}

const Feature = ({ title, description }: FeatureTextProps) => {
  const DarkTheme = useAppSelector((state) => state.blackTheme.blackTheme)

  return (
    <div className="w-full xl:w-1/3 rounded-[26px] flex shadow-lg relative">
      <div className="w-full h-full absolute ">
        {DarkTheme ? (
          <div className={styles.feature_gradient_dark}></div>
        ) : (
          <div className={styles.feature_gradient}></div>
        )}
      </div>
      <div className="flex z-[1000] w-full h-full flex-col px-[2em] py-[2em]">
        <ImageFeature title={title}></ImageFeature>

        <div className="flex w-full flex-col gap-y-4 mt-[10%] xl:mt-[25%]">
          <TextFabric text={title} id={6}></TextFabric>
          <TextFabric text={description} id={2}></TextFabric>
        </div>
      </div>
    </div>
  )
}

export default Feature
