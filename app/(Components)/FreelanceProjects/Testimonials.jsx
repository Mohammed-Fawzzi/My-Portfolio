import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { reviewsData } from "@/constants/index";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Testimonials() {
  const swiperRef = useRef(null);

  return (
    <section className="py-8 bg-primary text-white">
      <div className="container px-4 mx-auto text-center">
        <div className="flex justify-between items-center">
          <h2 className="text-lg sm:text-2xl lg:text-4xl font-bold mb-8">
            What <span className="text-accent">Clients Say</span>
          </h2>

          {/* Custom Arrows */}
          <div className="flex justify-center items-center gap-3 sm:gap-5 mb-8">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="text-primary bg-accent p-2 md:p-3 rounded-full hover:scale-110 transition"
            >
              <FaArrowLeft className="text-xs sm:text-base lg:text-lg" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="text-primary bg-accent p-2 md:p-3 rounded-full hover:scale-110 transition"
            >
              <FaArrowRight className="text-xs sm:text-base lg:text-lg" />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-14"
        >
          {reviewsData.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="border border-accent p-6 shadow-lg h-full flex flex-col text-center min-h-[250px] cursor-pointer">
                {/* Stars */}
                <div className="flex justify-start text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-neutral-200 text-sm leading-relaxed font-roboto font-semibold">
                  {review.text}
                </p>

                {/* User section */}
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-xl rounded-full">
                      {review.icon}
                    </div>
                  </div>
                  <div className="text-start">
                    <p className="font-bold text-accent">{review.name}</p>
                    <p className="text-xs text-gray-300">Client</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
