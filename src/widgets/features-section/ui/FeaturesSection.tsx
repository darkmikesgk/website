import React from "react"

import { Feature } from "@/features/features"
import { TextFabric } from "@/shared/ui"

const FeaturesSection = () => {
  return (
    <section
      id={"features"}
      className="w-[93%] px-[3.5%] flex justify-center flex flex-col gap-y-[5vh] xl:gap-y-[8vh] scroll-mt-[100px]"
    >
      <div className="flex flex-col w-full">
        <TextFabric text={"maetry features"} id={3}></TextFabric>
        <TextFabric
          text={"we adapt to any size business"}
          id={1}
        ></TextFabric>
      </div>

      <div className="flex xl:flex-row flex-col gap-10 xl:gap-5 w-full">
        <Feature
          title={"management schedule"}
          description={
            "Add new employees and make flexible work schedules without overlap"
          }
        ></Feature>
        <Feature
          title={"notices of record"}
          description={
            "Automated appointment reminders to customers will help retain contact and increase profitability"
          }
        ></Feature>
        <Feature
          title={"online appointment for clients"}
          description={
            "recording without a call will allow you to process more requests and not waste time on confirming visits"
          }
        ></Feature>
      </div>
    </section>
  )
}

export default FeaturesSection
