import React from "react"
import BgImage from "@/components/BgImage"
import Image from "next/image"
import MainPhoneBlock from "@/public/images/MainPhoneBLock2.png"
import ScrollingImage from "@/components/SecondBlock/ScrollingImage"
import ScrollingText from "@/components/SecondBlock/ScrollingText"

import TextFabric from "@/components/TextFabric"
import Question from "@/components/FAQ/Question"
import Vitaliy from "@/components/FAQ/Vitaliy"
import ImageTextFabric from "@/components/ImageTextFabric"
import prefooter from "@/public/images/prefooterImage.svg"
import Feature from "@/components/features/Feature"
import Review from "@/components/reviews/ReviewFabric"
import AppleButton from "@/components/AppleButton"

import Head from "next/head"
import PrivacyPolicy from "@/components/Footer/PrivacyPolicy"
import LicensePolicy from "@/components/Footer/LicensePolicy"
import Header from "@/components/Header/Header"
import MobileHeader from "@/components/Header/MobileHeader"
import Footer from "@/components/Footer/Footer"

const LandingPage = () => {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Maetry",
              url: "https://maetry.com",
              logo: "https://maetry.com/images/tild3031-3665-4331-b066-353633643661__photo.svg",
              sameAs: [
                "https://www.instagram.com/maestri_app",
                "https://t.me/maestri_channel",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-818-877-8913",
                contactType: "Customer Service",
                areaServed: "US",
              },
            }),
          }}
        />

        <html lang="en"></html>
        <title>Maetry - Info Page</title>
        <meta
          name="description"
          content="Efficient Management of Your Beauty Salon and Business Download Maetry and take your beauty business to the next level!"
        />
        <meta
          name="keywords"
          content="maetry,beauty salon,booking,management,appointment,crm,automation,salon,service,nails,lashes,barber"
        />

        {/* main */}

        <meta property="og:title" content="Maetry" />
        <meta
          property="og:description"
          content="IT-service for beauty industry"
        />
        <meta
          property="og:image"
          content="https://maetry.com/_next/static/media/logo.30e07f0a.svg"
        />
        <meta property="og:url" content="https://maetry.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Maetry" />
        {/* OpenGraph */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maetry" />
        <meta
          name="twitter:description"
          content="IT-service for beauty industry"
        />
        <meta
          name="twitter:image"
          content="https://maetry.com/_next/static/media/logo.30e07f0a.svg"
        />

        {/* TwitterCards */}
      </Head>

      <PrivacyPolicy></PrivacyPolicy>
      <LicensePolicy></LicensePolicy>
      <Header />
      <MobileHeader />
      <main className="w-full pt-[10vh] flex flex-col items-center bg-white dark:bg-dark-bg gap-y-[9vh] xl:gap-y-[15vh]">
        <section className="w-full h-[75vh] lg:h-[90vh] items-center justify-center flex px-[3.5%] pb-[5vh]">
          <div className="w-full moving-background relative h-full rounded-[21px] shadow-lg">
            <BgImage></BgImage>
          </div>
          <div className="flex flex-col absolute  items-center xl:scale-105 2xl:scale-120">
            <div className="mb-[2%]">
              <TextFabric
                id={3}
                text="multiple tasks — one ecosystem"
              ></TextFabric>
            </div>

            <ImageTextFabric id={1}></ImageTextFabric>

            <div className="mt-[5%] w-[80%] text-center">
              <TextFabric
                id={2}
                text="Create your own ecosystem for record automation"
              ></TextFabric>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="w-full xl:h-[100vh] 2xl:h-screen flex flex-col justify-center xl:justify-center items-center scroll-mt-[100px]"
        >
          <div className="flex w-full flex-col items-center xl:text-start text-center xl:flex-row px-[3.5%]">
            <div className="w-[80%] xl:w-1/2 xl:h-full flex items-center justify-center relative">
              <Image
                src={MainPhoneBlock}
                alt={""}
                className="w-[40vw] xl:w-[16vw] z-[1000]"
              />
              <ScrollingImage></ScrollingImage>
            </div>
            <div className="xl:w-1/2 items-center xl:items-start  w-full flex flex-col gap-y-2 mt-[5vh] xl:px-0 px-[10%]">
              <TextFabric id={3} text={"our mission"}></TextFabric>

              <TextFabric
                id={1}
                text={
                  "free your time from routine and your business from mistakes"
                }
              ></TextFabric>

              <div className="mt-[5%]">
                <TextFabric
                  id={2}
                  text={
                    "maetry allows entrepreneurs to grow their business from anywhere in the world via a mobile app"
                  }
                ></TextFabric>
              </div>
            </div>
          </div>

          <div className="flex w-full overflow-x-hidden flex-col mt-[10%] lg:mt-[5vh]">
            <ScrollingText></ScrollingText>
          </div>
        </section>

        <section
          id="reviews"
          className="w-[93%] px-[3.5%] flex flex-col justify-center xl:justify-center items-center gap-y-[5vh] xl:gap-y-[8vh] scroll-mt-[100px]"
        >
          <div className="w-full flex flex-col">
            <TextFabric id={3} text={"why choose us"}></TextFabric>
            <TextFabric id={1} text={"make business easier"}></TextFabric>
          </div>
          <div className="flex xl:flex-row flex-col w-full gap-5 md:gap-10  xl:gap-5">
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

        <section
          id={"4thBlock"}
          className="w-full px-[3.5%] h-[40vh] md:h-[55vh] xl:h-[70vh] flex justify-center "
        >
          <div className="flex items-center justify-center w-full h-full relative rounded-[20px] shadow-lg">
            <div className="absolute w-full h-full">
              <BgImage></BgImage>
            </div>

            <ImageTextFabric id={2}></ImageTextFabric>
          </div>
        </section>

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

        <section id={"prefooter"} className="w-full px-[3.5%] h-[70vh] ">
          <div className="w-full h-full dark:bg-white rounded-[21px] flex items-center justify-center shadow-xl relative">
            <div className="z-[1000] flex text-invert items-center text-center flex flex-col w-[80%] xl:w-[40%] gap-y-3 xl:gap-y-0 dark:text-black text-[#fdfdfd]">
              <TextFabric id={7} text="free trial"></TextFabric>
              <div className="mt-[1%]">
                <TextFabric
                  id={1}
                  text="start growing your business today"
                ></TextFabric>
              </div>
              <div className="mt-[5%] mb-[5%]">
                <TextFabric
                  id={2}
                  text="fast implementation - we will help you transfer the necessary data and customize the service for your tasks"
                ></TextFabric>
              </div>
              <AppleButton></AppleButton>
            </div>

            <Image
              src={prefooter}
              alt={""}
              layout="fill"
              objectFit="cover"
              className="rounded-[20px] dark:hidden"
            ></Image>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  )
}

export default LandingPage
