import React from "react"

import Image from "next/image"

import { ScrollingImage, ScrollingText } from "@/shared/ui"
import MainPhoneBlock from "@/public/images/MainPhoneBLock2.png"
import { TextFabric } from "@/shared/ui"

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full xl:h-[100vh] 2xl:h-screen flex flex-col justify-center xl:justify-center items-center scroll-mt-[100px]"
    >
      <div className="flex w-full flex-col items-center xl:text-start text-center xl:flex-row px-[3.5%]">
        <div className="w-[80%] xl:w-1/2 xl:h-full flex items-center justify-center relative">
          <Image
            src={MainPhoneBlock}
            alt={""}
            className="w-[40vw] xl:w-[16vw] z-[1000]"
          />
          <ScrollingImage></ScrollingImage>
        </div>
        <div className="xl:w-1/2 items-center xl:items-start w-full flex flex-col gap-y-2 mt-[5vh] xl:px-0 px-[10%]">
          <TextFabric id={3} text={"our mission"}></TextFabric>

          <TextFabric
            id={1}
            text={
              "free your time from routine and your business from mistakes"
            }
          ></TextFabric>

          <div className="mt-[5%]">
            <TextFabric
              id={2}
              text={
                "maetry allows entrepreneurs to grow their business from anywhere in the world via a mobile app"
              }
            ></TextFabric>
          </div>
        </div>
      </div>

      <div className="flex w-full overflow-x-hidden flex-col mt-[10%] lg:mt-[5vh]">
        <ScrollingText></ScrollingText>
      </div>
    </section>
  )
}

export default AboutSection
