"use client"

import React from "react"

import Image from "next/image"

import { useAppSelector } from "@/lib/hooks"
import firstBlockText from "@/public/images/1stBlockText.svg"
import block4thTextDark from "@/public/images/4th_block_bg_text_dark.svg"
import block4thTextLight from "@/public/images/4th_block_bg_text_light.svg"
import darkBlockText from "@/public/images/dark1stBlockText.svg"
import darkMonbile1stBlockText from "@/public/images/darkMobile1stBlockText.svg"
import monbile1stBlockText from "@/public/images/mobile1stBlockText.svg"
import mobileBlock4Dark from "@/public/images/mobileDark4.svg"
import mobileBlock4Light from "@/public/images/mobileLight4.svg"

interface ImageTextFabricProps {
  id: number
}

const ImageTextFabric = ({ id }: ImageTextFabricProps) => {
  const isDark = useAppSelector((state) => state.blackTheme.blackTheme)

  switch (id) {
    case 1:
      return (
        <div className="flex flex-col items-center">
          <Image
            src={isDark ? darkBlockText : firstBlockText}
            alt={""}
            className={`w-[70vw] hidden xl:flex`}
          ></Image>
          <Image
            src={isDark ? darkMonbile1stBlockText : monbile1stBlockText}
            alt={""}
            className={`scale-135 md:scale-150 md:py-[10%] xl:hidden`}
          ></Image>
        </div>
      )
    case 2:
      return (
        <div className="flex z-[1000]">
          <Image
            src={isDark ? block4thTextDark : block4thTextLight}
            alt={""}
            className={`w-[70vw] hidden xl:flex  `}
          ></Image>
          <Image
            src={isDark ? mobileBlock4Dark : mobileBlock4Light}
            alt={""}
            className={`w-[80vw] xl:hidden`}
          />
        </div>
      )
  }
}

export default ImageTextFabric
