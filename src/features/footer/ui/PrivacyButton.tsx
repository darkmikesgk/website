"use client"
import React from "react"

import Link from "next/link"

import { LocalizedTextFabric } from "@/shared/ui"

const PrivacyButton = () => {
  // const handleClick = () => {
  //   // Открываем в новой вкладке
  //   window.open('/privacy.html', '_blank')
  // }

  return (
    <Link id={"privacy"} href={"/privacy.html"} target="_blank">
      <LocalizedTextFabric 
        id={2} 
        translationKey="footer.privacyPolicy" 
        fallback="privacy policy" 
      />
    </Link>
  )
}

export default PrivacyButton
