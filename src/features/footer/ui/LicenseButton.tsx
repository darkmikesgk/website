"use client"
import React from "react"

import Link from "next/link"

import { TextFabric } from "@/shared/ui"

const LicenseButton = () => {
  // const handleClick = () => {
  //   // Открываем в новой вкладке
  //   window.open('/eula.html', '_blank')
  // }

  return (
    <Link href={"/eula.html"} id={"license"} target="_blank">
      <TextFabric id={2} text={"license agreement"} />
    </Link>
  )
}

export default LicenseButton
