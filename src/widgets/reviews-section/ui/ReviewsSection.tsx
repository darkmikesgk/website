import React from "react"

import { Review } from "@/features/reviews"
import { TextFabric } from "@/shared/ui"

const ReviewsSection = () => {
  return (
    <section
      id="reviews"
      className="w-[93%] px-[3.5%] flex flex-col justify-center xl:justify-center items-center gap-y-[5vh] xl:gap-y-[8vh] scroll-mt-[100px]"
    >
      <div className="w-full flex flex-col">
        <TextFabric id={3} text={"why choose us"}></TextFabric>
        <TextFabric id={1} text={"make business easier"}></TextFabric>
      </div>
      <div className="flex xl:flex-row flex-col w-full gap-5 md:gap-10 xl:gap-5">
        <Review
          id={2}
          title={"Julia"}
          role={"Owner of a chain PROmanicure"}
          description={
            "Maetry helps me plan every day in the salon. I understand how many clients are registered and for which services, who is new and who is regular. The client base is formed without my participation"
          }
        ></Review>
        <Review
          id={1}
          title={"Nikita"}
          role={"founder  Lui Philipp"}
          description={
            "I know a lot of beauty salons that don't use online enrollment. We need to look at what mistakes our competitors are making and do better. Our main flow of clients comes through maetry"
          }
        ></Review>

        <Review
          id={3}
          title={"Sofia"}
          role={"Manager of Bonny beauty salon"}
          description={
            "The app is constantly being improved together with our network of salons. At maetry, we follow analytics and monitor feedback. This helps us to work on the quality of service and improve the level of service"
          }
        ></Review>
        <Review
          id={4}
          title={"Irina"}
          role={"Eyelash extension specialist"}
          description={
            "I started spending less time analyzing the salon's financial performance. This option allows me to determine which services are generating more profit and which ones need to be adjusted or improved"
          }
        ></Review>
      </div>
    </section>
  )
}

export default ReviewsSection
