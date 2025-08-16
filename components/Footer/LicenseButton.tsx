"use client"
import React from "react"
import TextFabric from "../TextFabric"
import Link from "next/link"

const LicenseButton = () => {
  const handleClick = () => {
    // Открываем в новой вкладке
    window.open('/eula.html', '_blank')
  }

  return (
    <Link href={"/eula.html"} id={"license"} onClick={() => handleClick()}>
      <TextFabric id={2} text={"license agreement"} />
    </Link>
  )
}

export default LicenseButton
