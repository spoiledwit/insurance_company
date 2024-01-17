"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Navigation } from "swiper/modules";
import { PiArrowRightThin } from "react-icons/pi";
import { PiArrowLeftThin } from "react-icons/pi";

const faqs = [
  {
    question: "How do I file a claim with Veeels.com?",
    answer:
      "Filing a claim with Veeels.com is simple and efficient. Just log in to your account on our website, select the 'File a Claim' option, and follow the step-by-step instructions. Our team is ready to assist you throughout the process.",
    img: "https://assets-global.website-files.com/64feee5d05b1a0a2a3bc6f25/650317409072e4508ad6271f_stangel-2022-0602%207.png",
  },
  {
    question: "Can I change my car insurance policy details online?",
    answer:
      "Yes, you can easily update your policy details online. Log into your Veeels.com account, navigate to the 'My Policies' section, and you can make necessary changes to your personal information, vehicle details, and coverage options.",
    img: "https://assets-global.website-files.com/64feee5d05b1a0a2a3bc6f25/65031739db45eb306470fb4a_stangel-2022-0602%206.png",
  },
  {
    question: "What payment methods are accepted by Veeels.com?",
    answer:
      "Veeels.com accepts various payment methods for your convenience, including major credit cards, debit cards, and online bank transfers. We ensure secure transactions for all our payment processes.",
    img: "https://assets-global.website-files.com/64feee5d05b1a0a2a3bc6f25/64ff155bce1b57b6afcb9052_faq-illustration.png",
  },
  {
    question: "Is my personal information secure with Veeels.com?",
    answer:
      "Absolutely, your privacy and security are paramount to us. Veeels.com uses advanced encryption and security protocols to protect your personal information from unauthorized access.",
    img: "https://assets-global.website-files.com/64feee5d05b1a0a2a3bc6f25/65031728db45eb306470eee8_stangel-2022-0602%203.png",
  },
  {
    question: "How can I get assistance if I have questions about my policy?",
    answer:
      "Our customer support team is always ready to help you with any queries. You can contact us via the support section on our website, or call us directly using the contact information provided on Veeels.com.",
    img: "https://assets-global.website-files.com/64feee5d05b1a0a2a3bc6f25/65031732a36eda439895da45_stangel-2022-0602%204.png",
  },
];

const page = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>();
  return (
    <div className="my-10 px-8 md:px-16 overflow-hidden py-10">
      <h1 className="text-center font-bold text-red-700 text-4xl my-5">
        Frequently Asked Questions
      </h1>
      <Swiper
        effect={"cards"}
        onSwiper={(swiper: any) => {
          swiperRef.current = swiper;
        }}
        grabCursor={true}
        speed={1000}
        cardsEffect={{
          perSlideRotate: 0,
          perSlideOffset: 17,
        }}
        modules={[EffectCards, Navigation]}
        className="mySwiper h-[80vh] md:h-[50vh] w-full md:w-[80%] lg:w-[70%] my-10"
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        onActiveIndexChange={(e) => setActiveIndex(e.activeIndex)}
      >
        {faqs.map((faq, index) => (
          <SwiperSlide
            key={index}
            onClick={() => swiperRef.current?.slideTo(index)}
            className={`border border-white w-full rounded-3xl text-xl text-white ${
              index == activeIndex ? "bg-red-600" : "bg-red-700"
            }`}
          >
            <div className="hover:bg-red-500 transition duration-300 flex flex-col md:flex-row w-full h-full">
              <div className="border border-white relative bg-red-900 w-full md:w-[28%] h-[25vh] md:h-auto rounded-r-2xl overflow-hidden flex flex-col justify-end space-y-10">
                <img src={faq?.img} alt="" className="w-full h-full" />
                <div className="absolute w-full h-full bg-red-600/50 z-10"></div>
              </div>
              <div className="w-full md:w-[72%] text-secondary p-5 flex flex-col justify-between space-y-10">
                <p className="text-secondary text-3xl lg:text-4xl flex flex-col-reverse md:flex-row justify-between gap-5">
                  <span>{faq?.question}</span>
                  <span className="text-white text-4xl">0{index + 1}.</span>
                </p>

                <p className="text-sm">{faq?.answer}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="flex justify-center space-x-3 text-4xl text-white my-5">
          <button className="prev">
            <PiArrowLeftThin
              className={`p-1 bg-red-700 rounded-full ${
                activeIndex == 0 ? "hidden" : ""
              }`}
            />
          </button>

          <button className="next">
            <PiArrowRightThin
              className={`p-1 bg-red-700 rounded-full ${
                activeIndex == faqs?.length - 1 ? "hidden" : ""
              }`}
            />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default page;
