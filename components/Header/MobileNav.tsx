import Link from "next/link"
import Image from "next/image"

import Mail from "@/public/images/Mail.svg"
import Telegram from "@/public/images/Telegram.svg"
import Instagram from "@/public/images/Instagram.svg"
import TextFabric from "../TextFabric"
import FreeTrial from "./FreeTrial"

export const MobileNav = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[95%] px-[5%]">
      <nav className="flex flex-col gap-y-4 items-center font-light  justify-center w-full h-full flex-1">
        <Link href={"#about"}>
          <TextFabric text="about" id={2} />
        </Link>
        <Link href={"#reviews"}>
          <TextFabric text="reviews" id={2} />
        </Link>
        <Link href={"#features"}>
          <TextFabric text="features" id={2} />
        </Link>

        <div className="flex gap-x-4 mt-[10%]">
          <Link href="mailto:support@maetry.com">
            <Image
              src={Mail}
              alt={""}
              width={24}
              height={24}
              className="dark:invert"
            />
          </Link>
          <Link href={"https://t.me/maestri_app"}>
            <Image
              src={Telegram}
              alt={""}
              width={24}
              height={24}
              className="dark:invert"
            />
          </Link>
          <Link href={"https://instagram.com/maestri.app"}>
            <Image
              src={Instagram}
              alt={""}
              width={24}
              height={24}
              className="dark:invert"
            />
          </Link>
        </div>
      </nav>
      <FreeTrial type="mobile"></FreeTrial>
    </div>
  )
}
