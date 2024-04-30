import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="mb-12">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(https://i.ibb.co/CzQ5Z1Q/slider1.jpg)",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[#E6BAA3] opacity-20"></div>
            <div className="hero-content text-center text-white">
              <div className="lg:w-3/4">
                <h1 className="mb-5 text-3xl lg:text-5xl font-bold">
                  Discover Elegant Paintings for Your Space
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(https://i.ibb.co/WWXZQ2F/slider2.jpg)",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[#E6BAA3] opacity-20"></div>
            <div className="hero-content text-center text-white">
              <div className="lg:w-3/4">
                <h1 className="mb-5 text-3xl lg:text-5xl font-bold">
                  Unveil Timeless Beauty with Our Artworks
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(https://i.ibb.co/Vj4FChJ/slider3.jpg)",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[#E6BAA3] opacity-10"></div>
            <div className="hero-content text-center text-white">
              <div className="lg:w-3/4">
                <h1 className="mb-5 text-3xl lg:text-5xl font-bold">
                  Embrace Creativity Explore Our Elegant Art Gallery
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
