"use client"
import React, { useEffect } from "react"
import { useAppDispatch } from "@/lib/hooks"
import { setLicense } from "@/redux/Slices/LicenseSlice"
import TextFabric from "../TextFabric"
import Link from "next/link"

const LicenseButton = () => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(setLicense(true))
  }

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#license") {
        dispatch(setLicense(true))
      } else if (window.location.hash === "") {
        dispatch(setLicense(false))
      }
    }

    handleHashChange()

    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [dispatch])

  return (
    <Link href={"#license"} id={"license"} onClick={() => handleClick()}>
      <TextFabric id={2} text={"license agreement"} />
    </Link>
  )
}

export default LicenseButton
