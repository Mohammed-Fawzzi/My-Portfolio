"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { reviewsData } from "@/constants";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Testimonials() {
  const swiperRef = useRef(null);
  const [activeReview, setActiveReview] = useState(null);

  return (
    <section className="py-8 bg-primary text-white">
      <div className="container px-4 mx-auto text-center">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg sm:text-2xl lg:text-4xl font-bold mb-8">
            What <span className="text-accent">Clients Say</span>
          </h2>

          {/* Custom Arrows */}
          <div className="flex gap-3 sm:gap-5 mb-8">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="text-primary bg-accent p-2 md:p-3 rounded-full transition hover:bg-accent-HOVER"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="text-primary bg-accent p-2 md:p-3 rounded-full transition hover:bg-accent-HOVER"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Pagination , Autoplay]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          loop
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
          {reviewsData.map((review, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => setActiveReview(review)}
                className="
                  group relative
                  border border-neutral-700/60
                  p-6
                  shadow-lg
                  rounded-xl
                  h-full
                  flex flex-col text-left
                  min-h-[250px]
                  cursor-pointer
                  transition-colors duration-300
                  hover:border-accent
                "
              >
                {/* Hover background */}
                <div className="absolute inset-0 rounded-xl bg-accent/10 opacity-0 group-hover:opacity-100 transition" />

                {/* Stars */}
                <div className="relative z-10 flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Review text */}
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
                  {review.text}
                </p>

                {/* User */}
                <div className="relative z-10 flex items-center gap-3 mt-6">
                  <div className="w-12 h-12 flex items-center justify-center text-xl">
                    {review.icon}
                  </div>
                  <div>
                    <p className="font-bold text-accent">{review.name}</p>
                    <p className="text-xs text-gray-300">Client</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {activeReview && (
        <div
          onClick={() => setActiveReview(null)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-primary border border-accent rounded-xl p-6 max-w-lg w-[90%] text-left relative"
          >
            {/* Close */}
            <button
              onClick={() => setActiveReview(null)}
              className="absolute top-3 right-3 text-neutral-300 hover:text-accent"
            >
              ✕
            </button>

            {/* Stars */}
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Full text */}
            <p className="text-neutral-200 leading-relaxed mb-6">
              {activeReview.text}
            </p>

            {/* User */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center text-xl">
                {activeReview.icon}
              </div>
              <div>
                <p className="font-bold text-accent">{activeReview.name}</p>
                <p className="text-xs text-gray-300">Client</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
