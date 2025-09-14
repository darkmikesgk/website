import React from "react"

import Image from "next/image"

import MainPhoneBlock from "@/public/images/MainPhoneBLock2.png"
import { ScrollingImage, ScrollingText, LocalizedTextFabric } from "@/shared/ui"

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
          <LocalizedTextFabric 
            id={3} 
            translationKey="about.mission"
            fallback="our mission"
          />

          <LocalizedTextFabric
            id={1}
            translationKey="about.title"
            fallback="free your time from routine and your business from mistakes"
          />

          <div className="mt-[5%]">
            <LocalizedTextFabric
              id={2}
              translationKey="about.description"
              fallback="maetry allows entrepreneurs to grow their business from anywhere in the world via a mobile app"
            />
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
