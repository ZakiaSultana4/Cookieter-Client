import "./style.css";
import bannerVideo from "../../assets/images/FOOD GOOD.mp4";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const Banner = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-80px)] overflow-y-hidden relative flex justify-center items-center bg-[#85B72C]">
        <video
          src={bannerVideo}
          width="100%"
          className="absolute z-0"
          height="100%"
          autoPlay
          loop
          muted
        ></video>
        <span className="overlay text-white"></span>

        <div className="z-40 absolute w-full overflow-x-hidden">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
           
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className=" mt-12">
                <ScrollAnimation>
                  <h1 className="title-text text-white md:text-7xl font-bold text-4xl">
                    <span className="text-[#85B72C] title-text">
                      Nourishing connections
                    </span>{" "}
                    <br />
                    One plate at a time.
                  </h1>
                  <p className="text-white md:my-8 my-5 md:text-base text-sm">
                    Food is the universal language that brings us together.{" "}
                    <br /> Share a meal, share a moment, and share the love
                  </p>
                  <div>
                    <button className=" px-5  py-2  rounded-md bg-[#85B72C] text-white border-none">
                      View All Foods
                    </button>
                  </div>
                </ScrollAnimation>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-12">
                <ScrollAnimation>
                  <h1 className="title-text text-white md:text-7xl font-bold text-4xl">
                    <span className="text-[#85B72C] title-text">
                      Sharing not only food{" "}
                    </span>{" "}
                    <br />
                    but also the joy of giving.
                  </h1>
                  <p className="text-white md:my-8 my-5 md:text-base text-sm">
                    Food is the universal language that brings us together.{" "}
                    <br /> Share a meal, share a moment, and share the love
                  </p>
                  <div>
                    <button className=" px-5  py-2  rounded-md bg-[#85B72C] text-white border-none">
                      View All Foods
                    </button>
                  </div>
                </ScrollAnimation>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-12">
                <ScrollAnimation>
                  <h1 className="title-text text-white md:text-7xl font-bold text-4xl">
                    <span className="text-[#85B72C] title-text">
                      Passionately prepared,{" "}
                    </span>{" "}
                    <br />
                    generously shared.
                  </h1>
                  <p className="text-white md:my-8 my-5 md:text-base text-sm">
                    Food is the universal language that brings us together.{" "}
                    <br /> Share a meal, share a moment, and share the love
                  </p>
                  <div>
                    <button className=" px-5  py-2  rounded-md bg-[#85B72C] text-white border-none">
                      View All Foods
                    </button>
                  </div>
                </ScrollAnimation>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" mt-12">
                <ScrollAnimation>
                  <h1 className="title-text text-white md:text-7xl font-bold text-4xl">
                    <span className="text-[#85B72C] title-text">
                      Savor the moments,
                    </span>{" "}
                    <br />
                    share the flavors.
                  </h1>
                  <p className="text-white md:my-8 my-5 md:text-base text-sm">
                    Food is the universal language that brings us together.{" "}
                    <br /> Share a meal, share a moment, and share the love
                  </p>
                  <div>
                    <button className=" px-5  py-2  rounded-md bg-[#85B72C] text-white border-none">
                      View All Foods
                    </button>
                  </div>
                </ScrollAnimation>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Banner;
