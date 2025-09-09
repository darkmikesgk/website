"use client"
import React from "react"

import Link from "next/link"

import { TextFabric } from "@/shared/ui"

const PrivacyButton = () => {
  // const handleClick = () => {
  //   // Открываем в новой вкладке
  //   window.open('/privacy.html', '_blank')
  // }

  return (
    <Link id={"privacy"} href={"/privacy.html"} target="_blank">
      <TextFabric id={2} text={"privacy policy"}></TextFabric>
    </Link>
  )
}

export default PrivacyButton
