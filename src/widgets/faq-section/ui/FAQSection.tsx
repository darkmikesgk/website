import React from "react"

import { Question, Vitaliy } from "@/features/faq"
import { TextFabric } from "@/shared/ui"

const FAQSection = () => {
  return (
    <section
      id={"faq"}
      className="w-[93%] px-[3.5%] flex flex-col gap-y-[5vh] xl:gap-y-[8vh] justify-center"
    >
      <div className="w-full flex flex-col">
        <TextFabric id={3} text={"faq"}></TextFabric>
        <TextFabric id={1} text={"frequent questions"}></TextFabric>
      </div>

      <div className="flex xl:flex-row gap-y-6 flex-col items-start gap-x-6 ">
        <div className="flex flex-1 flex-col gap-y-4 xl:gap-y-2">
          <Question
            id={1}
            title="What features does the app provide?"
            answer="To optimize the work of beauty salons maetry offers the following features: online appointment, automatic sending of notifications, formation of client base, analysis of financial indicators and integration with other services"
          ></Question>
          <Question
            id={2}
            title="Will I be able to work in someone else's salon and own my own at the same time?"
            answer="Yes, you can"
          ></Question>
          <Question
            id={3}
            title="Will I be able to bring an employee into my salon?"
            answer="Yes, you can. To do this, you will need to go to the salon and create an invitation, then send the link to a staff member"
          ></Question>
          <Question
            id={4}
            title="Will I be able to create an entry for a client that doesn't have the application?"
            answer="Yes, you can. To do this, dont select a client right away. After you create the record, you will have a link that you can send to them"
          ></Question>
          <Question
            id={5}
            title="Will I be able to add a link to a social media post via maetry?"
            answer="Yes, you can"
          ></Question>
        </div>

        <div
          id={"Vitaliy"}
          className="relative flex w-full mt-[7%] xl:mt-0 xl:w-[31%] rounded-[21px] shadow-lg"
        >
          <Vitaliy></Vitaliy>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
