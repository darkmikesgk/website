"use client"

import React from "react"
import Image from "next/image"
import VitaliyBG from "@/public/images/vitaliyBG.svg"
import TextFabric from "../TextFabric"

import Vitalik from "@/public/images/Vitalik.png"
import { useRouter } from "next/navigation"
// className = "xl:w-[6vw] w-[17vw]"
const Vitaliy = () => {
  const router = useRouter()
  return (
    <>
      <div className="w-full p-7 z-[1000] flex flex-col gap-y-4">
        <TextFabric id={2} text={"Any question?"}></TextFabric>
        <div className="flex items-center gap-x-3">
          <div className="w-[17vw] xl:w-[6vw]">
            <Image
              src={Vitalik}
              alt={""}
              layout="responsive"
              width={76}
              height={76}
              quality={100}
            ></Image>
          </div>

          <div className="flex flex-col ">
            <TextFabric id={4} text={"Support team"}></TextFabric>
            <TextFabric id={2} text={"Maetry"}></TextFabric>
          </div>
        </div>
        <button
                      onClick={() => router.push("https://t.me/maetry_app")}
          className="p-[5%] bg-white dark:active:bg-lightText/40 active:bg-dark-bg/10 transition-all duration-100 dark:bg-dark-bg rounded-[15px] min-h-[45px] flex w-full items-center mt-[2%] justify-center"
        >
          <TextFabric id={5} text={"ask questions"}></TextFabric>
        </button>
      </div>
      <Image
        src={VitaliyBG}
        layout="fill"
        objectFit="cover"
        className="rounded-[20px] dark:opacity-25"
        alt={""}
      ></Image>
    </>
  )
}

export default Vitaliy
