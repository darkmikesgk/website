"use client"
import { useAppDispatch } from "@/lib/hooks"
import React, { useEffect } from "react"
import { setPrivacy } from "@/redux/Slices/PrivacySlice"
import TextFabric from "../TextFabric"
import Link from "next/link"

const PrivacyButton = () => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(setPrivacy(true))
  }

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#privacy") {
        dispatch(setPrivacy(true))
      } else if (window.location.hash === "") {
        dispatch(setPrivacy(false))
      }
    }

    handleHashChange()

    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [dispatch])

  return (
    <Link id={"privacy"} onClick={() => handleClick()} href={"#privacy"}>
      <TextFabric id={2} text={"privacy policy"}></TextFabric>
    </Link>
  )
}

export default PrivacyButton
