import React from "react"

import Image from "next/image"

import { toggleHeader } from "@/entities/mobile-header"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import closeImage from "@/public/images/closeImage.svg"
import { ThemeSwitcher } from "@/shared/ui"
import styles from "@/styles/GradientAnimation.module.css"

import { MobileNav } from "./MobileNav"

const SlideBarLinks = () => {
  const showLinks = useAppSelector((state) => state.mobileHeader.showLinks)
  const dispatch = useAppDispatch()

  const Theme = useAppSelector((state) => state.blackTheme.blackTheme)

  return (
    <div
      className={`absolute left-0 ${
        showLinks ? "z-[1000] opacity-1" : "translate-x-[100%] opacity-0"
      } bg-white dark:bg-dark-bg dark:text-dark-text h-[100dvh] py-6 bg-white w-full flex flex-col px-6 items-start transition-all duration-300 top-0`}
    >
      <div className="flex justify-between items-center md:justify-end w-full pb-4 ">
        <div className="md:hidden">
          <ThemeSwitcher />
        </div>
        <button onClick={() => dispatch(toggleHeader())}>
          <Image
            src={closeImage}
            alt={""}
            className="dark:invert md:w-[30px] md:h-[30px] lg:scale-150"
          ></Image>
        </button>
      </div>

      {Theme ? (
        <div className={styles.darkAnimatedGradient}>
          <MobileNav />
        </div>
      ) : (
        <div className={styles.animatedGradient}>
          <MobileNav />
        </div>
      )}
    </div>
  )
}

export default SlideBarLinks
