"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { reviewsData } from "@/app/constants";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const swiperRef = useRef(null);
  const [activeReview, setActiveReview] = useState(null);

  const PrevIcon = isRtl ? FaArrowRight : FaArrowLeft;
  const NextIcon = isRtl ? FaArrowLeft : FaArrowRight;

  return (
    <section className="py-8 bg-primary text-white overflow-x-hidden">
      <div className="container px-4 mx-auto text-center">
        <div className="flex justify-between items-center">
          <h2 className="text-lg sm:text-2xl lg:text-4xl font-bold mb-8">
            {t("title")}{" "}
            <span className="text-accent">{t("titleAccent")}</span>
          </h2>

          <div className="flex gap-3 sm:gap-5 mb-8">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="text-on-accent bg-accent p-2 md:p-3 rounded-full transition hover:bg-accent-HOVER"
            >
              <PrevIcon />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="text-on-accent bg-accent p-2 md:p-3 rounded-full transition hover:bg-accent-HOVER"
            >
              <NextIcon />
            </button>
          </div>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          loop
          dir={isRtl ? "rtl" : "ltr"}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-14"
        >
          {reviewsData.map((review) => (
            <SwiperSlide key={review.id}>
              <div
                onClick={() =>
                  setActiveReview({
                    ...review,
                    name: t(`items.${review.id}.name`),
                    text: t(`items.${review.id}.text`),
                  })
                }
                className="
                  group relative
                  border border-neutral-700/60
                  p-6
                  shadow-lg
                  rounded-xl
                  h-full
                  flex flex-col text-start
                  min-h-[250px]
                  cursor-pointer
                  transition-colors duration-300
                  hover:border-accent
                "
              >
                <div className="absolute inset-0 rounded-xl bg-accent/10 opacity-0 group-hover:opacity-100 transition" />

                <div className="relative z-10 flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p
                  className="
                    relative z-10
                    text-neutral-200
                    text-sm
                    leading-relaxed
                    font-semibold
                    flex-1
                    overflow-hidden
                  "
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {t(`items.${review.id}.text`)}
                </p>

                <div className="relative z-10 flex items-center gap-3 mt-6">
                  <div className="w-12 h-12 flex items-center justify-center text-xl">
                    {review.icon}
                  </div>
                  <div>
                    <p className="font-bold text-accent">
                      {t(`items.${review.id}.name`)}
                    </p>
                    <p className="text-xs text-gray-300">{t("client")}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {activeReview && (
        <div
          onClick={() => setActiveReview(null)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-primary border border-accent rounded-xl p-6 max-w-lg w-[90%] text-start relative"
          >
            <button
              onClick={() => setActiveReview(null)}
              className="absolute top-3 end-3 text-neutral-300 hover:text-accent"
            >
              ✕
            </button>

            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p className="text-neutral-200 leading-relaxed mb-6">
              {activeReview.text}
            </p>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center text-xl">
                {activeReview.icon}
              </div>
              <div>
                <p className="font-bold text-accent">{activeReview.name}</p>
                <p className="text-xs text-gray-300">{t("client")}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
