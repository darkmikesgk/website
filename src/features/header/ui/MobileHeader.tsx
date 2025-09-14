"use client"
import React from "react"

import Image from "next/image"
import Link from "next/link"

import { toggleHeader } from "@/entities/mobile-header"
import { useAppDispatch } from "@/lib/hooks"
import logo from "@/public/images/logo.svg"
import mobileMenu from "@/public/images/mobile_menu.svg"
import { ThemeSwitcher, LocalizedTextFabric, LanguageSelector } from "@/shared/ui"
import styles from "@/styles/GradientAnimation.module.css"

import LinksBar from "./SlideBarLinks"


const MobileHeader = () => {
  const dispatch = useAppDispatch()

  return (
    <header className="fixed xl:hidden bg-white dark:bg-dark-bg z-[3000] h-[7vh] w-full items-center gap-x-4 shadow-sm px-[3.5%]">
      <div className="flex w-full items-center h-full">
        <div className="flex h-full w-full md:w-auto  items-center">
          <Link href={"/"} className="flex-1 flex">
            <Image
              src={logo}
              alt={""}
              width={100}
              height={19}
              className="dark:invert w-[20vw] md:w-[12vw] lg:w-[13vw]"
            ></Image>
          </Link>

          <button
            onClick={() => dispatch(toggleHeader())}
            className="flex gap-x-2 h-full items-center ml-4"
          >
            <label className="text-[14px] md:text-[16px] lg:text-[22px] dark:text-dark-text flex">
              <LocalizedTextFabric translationKey="navigation.menu" id={2} fallback="menu" />
            </label>
            <Image
              src={mobileMenu}
              alt={"mobile menu"}
              width={13}
              height={13}
              className="md:w-[15px] dark:invert md:h-[15px]"
            ></Image>
          </button>
        </div>

        <div className="flex h-full items-center flex-1 justify-end text-[14px] md:text-[16px] lg:text-[22px] gap-x-2 md:gap-x-4">
          <button className="mr-[3%] hidden sm:block">
            <label className={styles.gradient__text}>free trial</label>
          </button>
          <LanguageSelector variant="mobile" />
          <ThemeSwitcher></ThemeSwitcher>
        </div>
      </div>
      <LinksBar />
    </header>
  )
}

export default MobileHeader
