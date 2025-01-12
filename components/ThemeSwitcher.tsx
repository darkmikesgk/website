"use client"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { themeToggle, setTheme } from "@/redux/Slices/ThemeSlice"
import Image from "next/image"
import sun from "@/public/images/sun.svg"
import moon from "@/public/images/moon.svg"
import styles from "@/styles/GradientAnimation.module.css"

const ThemeSwitcher: React.FC = () => {
  const dispatch = useAppDispatch()
  const isDarkMode = useAppSelector((state) => state.blackTheme.blackTheme)

  useEffect(() => {
    const savedTheme = localStorage.getItem("Theme") === "dark"
    dispatch(setTheme(savedTheme))
    if (savedTheme) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [dispatch])

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark"
    localStorage.setItem("Theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
    dispatch(themeToggle())
  }

  return (
    <button onClick={toggleTheme} className="flex items-center relative">
      <div
        className={`w-[48px] h-[7px] xl:scale-100 2xl:scale-110 ${
          isDarkMode ? "bg-white" : styles.gradient
        } rounded-[3.5px] border`}
      ></div>
      <div
        className={`w-[28px] h-[28px] p-1 2xl:scale-110 xl:scale-90 rounded-[50%] right-[-5px] ${
          isDarkMode ? "right-[60%] bg-white" : styles.gradient
        } absolute border transition-all duration-400`}
      >
        <Image
          src={isDarkMode ? moon : sun}
          alt={""}
          className="rotate-[-20deg]"
          layout="responsive"
        ></Image>
      </div>
    </button>
  )
}

export default ThemeSwitcher
