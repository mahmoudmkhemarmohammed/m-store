import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container flex justify-between gap-3 max-[1279px]:flex-col-reverse">
          <div className="sidebar py-10 pr-4 border-r-2 w-80 max-[1279px]:w-full max-[1279px]:border-r-0">
            <ul className="flex flex-col gap-y-4 text-xl font-medium max-sm:text-fontSm">
              <li className="flex justify-between cursor-pointer">
                <Link className="duration-300 hover:pl-2">Woman's Fashion</Link>
                <MdOutlineKeyboardArrowRight className="text-3xl" />
              </li>
              <li className="flex justify-between">
                <Link className="duration-300 hover:pl-2">Men's Fashion</Link>
                <MdOutlineKeyboardArrowRight className="text-3xl" />
              </li>
              <li>
                <Link className="duration-300 hover:pl-2">Electronics</Link>
              </li>
              <li>
                <Link className="duration-300 hover:pl-2">
                  Home & Lifestyle
                </Link>
              </li>
              <li>
                <Link className="duration-300 hover:pl-2">Medicine</Link>
              </li>
              <li>
                <Link className="duration-300 hover:pl-2">
                  Sports & Outdoor
                </Link>
              </li>
              <li>
                <Link className="duration-300 hover:pl-2">Baby's & Toys</Link>
              </li>
              <li>
                <Link className="duration-300 hover:pl-2">
                  Groceries & Pets
                </Link>
              </li>
              <li>
                <Link className="duration-300 hover:pl-2">Health & Beauty</Link>
              </li>
            </ul>
          </div>
          <Swiper className="w-4/5 py-3 max-[1279px]:w-full">
            <SwiperSlide className="w-full h-heightSlider max-[1279px]:h-fit">
              <video
                className="w-full"
                autoPlay
                muted
                loop
                src={require("../../assets/videos/iPhone 15 Ultra _ Apple.mp4")}
              ></video>
            </SwiperSlide>
            <SwiperSlide className="w-full h-heightSlider max-[1279px]:h-fit">
              <video
                className="w-full"
                autoPlay
                muted
                loop
                src={require("../../assets/videos/iphone.mp4")}
              ></video>
            </SwiperSlide>
            <SwiperSlide className="w-full h-heightSlider max-[1279px]:h-fit">
              <video className="w-full" autoPlay muted src={require("../../assets/videos/Introducing iPhone 15 Pro Max _ Apple.mp4")}></video>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default Home;
