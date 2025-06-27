import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { reviewsData } from "@/constants/index";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  return (
    <section className="py-8 bg-primary text-white">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">
          What <span className="text-accent">Clients Say</span>
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
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
              <div className="border border-accent p-6 rounded-xl shadow-lg h-full flex flex-col text-center min-h-[250px] cursor-pointer">
                {/* Stars */}
                <div className="flex justify-start text-yellow-400 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-gray-800 dark:text-neutral-200 text-sm leading-relaxed">
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
                    <p className="font-bold text-white">{review.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Client
                    </p>
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
