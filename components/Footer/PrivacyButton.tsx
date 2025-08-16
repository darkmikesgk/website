"use client"
import React from "react"
import TextFabric from "../TextFabric"
import Link from "next/link"

const PrivacyButton = () => {
  const handleClick = () => {
    // Открываем в новой вкладке
    window.open('/privacy.html', '_blank')
  }

  return (
    <Link id={"privacy"} onClick={() => handleClick()} href={"/privacy.html"}>
      <TextFabric id={2} text={"privacy policy"}></TextFabric>
    </Link>
  )
}

export default PrivacyButton
