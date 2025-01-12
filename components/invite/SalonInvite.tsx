"use client"

import React, { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import TextFabric from "../TextFabric"

const InviteButton = () => {
  const searchParams = useSearchParams()
  const invite = searchParams.get("invite")
  const id = searchParams.get("id")
  const salonId = searchParams.get("salonId")

  const [url, setUrl] = useState<string>("")

  useEffect(() => {
    if (id && salonId) {
      setUrl(`/employees/invite?id=${id}&salonId=${salonId}`)
    }
  }, [invite])

  return (
    <Link
      href={url}
      className="w-[15vw] bg-dark-bg dark:bg-white text-white rounded-[5px] h-[39px] flex justify-center hover:scale-105 transition-all items-center"
    >
      <TextFabric text={"Follow the link"} id={5}></TextFabric>
    </Link>
  )
}

export default InviteButton
