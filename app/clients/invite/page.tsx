"use client"
import Link from "next/link"
import React, { Suspense } from "react"
import Image from "next/image"
import logo from "@/public/images/logo.svg"
import TextFabric from "@/components/TextFabric"
import ThemeSwitcher from "@/components/ThemeSwitcher"
import InviteButton from "@/components/invite/InviteButton"
import appstore from "@/public/images/appstore.svg"
import { useRouter } from "next/navigation"

import phones from "@/public/images/phones_customer.png"
const ClientInvite = () => {
  const router = useRouter()

  return (
    <div>
      <header
        id="logo"
        className="h-[7vh] fixed z-[3000] bg-white w-full justify-between px-[3.5%] flex items-center dark:bg-dark-bg"
      >
        <Link href={"/"}>
          <Image
            src={logo}
            alt={"logo"}
            className="w-[20vw] xl:w-[7vw] dark:invert"
          />
        </Link>
        <ThemeSwitcher></ThemeSwitcher>
      </header>
      <main className="flex h-[100vh] pt-[7vh] xl:flex-row flex-col items-center flex px-[7%]">
        <div className="xl:w-1/2 h-full py-[13%] flex flex-col justify-between gap-y-[6vh]">
          <div className="w-full flex flex-col text-center xl:text-start gap-2">
            <TextFabric
              text={"you have been invited to join the salon as a client"}
              id={1}
            ></TextFabric>
            <TextFabric
              text={"*choose masters, sign up online"}
              id={2}
            ></TextFabric>
          </div>

          <div className="xl:w-[80%] flex xl:hidden xl:w-1/2 xl:h-full  items-center justify-center relative">
            <Image
              alt="phones"
              src={phones}
              width={419}
              height={389}
              layout="responsive"
            ></Image>
          </div>

          <div className="flex flex-col gap-2 pb-[5vh] xl:pb-0 items-center text-center xl:items-start xl:text-start ">
            <TextFabric
              text={
                "To continue, download the application and follow the link again"
              }
              id={2}
            ></TextFabric>

            <div className="mt-[5vh] xl:mt-[1vh]">
              <Suspense fallback={<div>Loading...</div>}>
                <InviteButton />
              </Suspense>
            </div>

            <button
              onClick={() =>
                router.push(
                  "https://apps.apple.com/ru/app/maestri/id6469101735"
                )
              }
              className="mt-[1vh]"
            >
              <Image
                src={appstore}
                alt={""}
                className="w-[35vw] md:w-[25vw] xl:w-[10vw] hover:scale-105 transition-all"
              ></Image>
            </button>
          </div>
        </div>

        <div className="w-[80%] hidden xl:flex xl:w-1/2 xl:h-full items-center justify-center relative">
          <div className="w-[90%]">
            <Image
              alt="phones"
              src={phones}
              width={419}
              height={389}
              layout="responsive"
            ></Image>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ClientInvite
