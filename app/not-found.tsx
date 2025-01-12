import React from "react"
import styles from "@/styles/GradientAnimation.module.css"
import TextFabric from "@/components/TextFabric"
import Link from "next/link"
const NotFound = () => {
  return (
    <div className="h-[70vh] xl:h-[90vh] w-full flex flex-col gap-y-[2vh] items-center justify-center text-[20vw]">
      <p className={styles.gradient__text}>404</p>

      <div className="w-[80%] justify-center items-center flex flex-col xl:flex-row gap-[0.15em]">
        <Link
          href={"/"}
          className="border w-full xl:w-[20vw] py-[2.5vh] rounded-[21px] flex items-center justify-center"
        >
          <TextFabric id={2} text={"go to the main page"}></TextFabric>
        </Link>
        <Link
          href="https://apps.apple.com/ru/app/maestri/id6469101735"
          className="dark:text-white text-black border w-full xl:w-[20vw] py-[2.5vh] rounded-[21px] flex justify-center items-center"
        >
          <div className={styles.gradient__text}>
            <TextFabric id={2} text={"download on the App Store"}></TextFabric>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
