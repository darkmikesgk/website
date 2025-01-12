import React from "react"
import Image from "next/image"

import logo from "@/public/images/logo.svg"
import Link from "next/link"
import Mail from "@/public/images/Mail.svg"
import Telegram from "@/public/images/Telegram.svg"
import Instagram from "@/public/images/Instagram.svg"
import PrivacyButton from "./PrivacyButton"
import TextFabric from "../TextFabric"
import LicenseButton from "./LicenseButton"

const Footer = () => {
  return (
    <footer className="w-full px-[3.5%] mt-[10vh]  md:text-[23px] lg:text-[25px] xl:text-[20px]">
      <div className="border rounded-[21px] w-full py-[5vh] flex flex-col xl:flex-row items-center px-[3.5%] gap-y-5 justify-center xl:justify-between">
        <div className="flex flex-col items-center xl:items-start">
          <Image
            src={logo}
            alt={""}
            width={210}
            height={42}
            className="md:w-[35vw] xl:w-[19vw] dark:invert"
          />
          <nav className="font-thin gap-x-6 flex mt-3 ">
            <Link
              href={"#about"}
              className="relative dark:hover:border-white hover:border-black/50 transition-all duration-200 border-b border-transparent"
            >
              <TextFabric id={2} text={"about"}></TextFabric>
            </Link>
            <Link
              href={"#reviews"}
              className="relative dark:hover:border-white hover:border-black/50 transition-all duration-200 border-b border-transparent"
            >
              <TextFabric id={2} text={"reviews"}></TextFabric>
            </Link>
            <Link
              href={"#features"}
              className="relative dark:hover:border-white hover:border-black/50 transition-all duration-200 border-b border-transparent"
            >
              <TextFabric id={2} text={"features"}></TextFabric>
            </Link>
          </nav>
        </div>

        <div className="flex flex-col gap-y-2 xl:flex-row items-center gap-x-4">
          <Link
            href="mailto:support@maestri.me"
            className="flex gap-x-1 items-center"
          >
            <Image
              src={Mail}
              alt={"Mail"}
              width={24}
              height={24}
              className="dark:invert xl:w-[2vw] md:w-[4vw]"
            />{" "}
            support@maestri.me
          </Link>
          <Link
            href={"https://t.me/maestri_app"}
            className="flex gap-x-1 items-center"
          >
            <Image
              src={Telegram}
              alt={"Telegram"}
              width={24}
              height={24}
              className="dark:invert xl:w-[2vw] md:w-[4vw]"
            />{" "}
            @maestri_app
          </Link>
          <Link
            href={"https://instagram.com/maestri.app"}
            className="flex gap-x-1 items-center"
          >
            <Image
              src={Instagram}
              alt={"Instagram"}
              width={24}
              height={24}
              className="dark:invert xl:w-[2vw] md:w-[4vw]"
            />{" "}
            @maestri.app
          </Link>
        </div>
      </div>

      <div className="w-full flex justify-between px-[3.5%] xl:text-[20px] font-thin my-[3vh]">
        <PrivacyButton></PrivacyButton>
        <LicenseButton></LicenseButton>
      </div>
    </footer>
  )
}

export default Footer
