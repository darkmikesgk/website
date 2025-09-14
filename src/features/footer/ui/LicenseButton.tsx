"use client"
import React from "react"

import Link from "next/link"

import { LocalizedTextFabric } from "@/shared/ui"

const LicenseButton = () => {
  // const handleClick = () => {
  //   // Открываем в новой вкладке
  //   window.open('/eula.html', '_blank')
  // }

  return (
    <Link href={"/eula.html"} id={"license"} target="_blank">
      <LocalizedTextFabric 
        id={2} 
        translationKey="footer.licenseAgreement" 
        fallback="license agreement" 
      />
    </Link>
  )
}

export default LicenseButton
