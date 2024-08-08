import { Navigation } from "swiper/modules";
import SpecialHeading from "../Special-Heading/SpecialHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosPhonePortrait, IoLogoGameControllerA } from "react-icons/io";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa6";
import "./Categories.css";
const Categories = () => {
  const icons = [
    { icon: <IoIosPhonePortrait />, title: "Phone" },
    { icon: <HiOutlineDesktopComputer />, title: "Computer" },
    { icon: <BsSmartwatch />, title: "Smart Watch" },
    { icon: <IoCameraOutline />, title: "Camera" },
    { icon: <FaHeadphones />, title: "HeadPhone" },
    { icon: <IoLogoGameControllerA />, title: "Gamming" },
    { icon: <IoIosPhonePortrait />, title: "Phone" },
    { icon: <HiOutlineDesktopComputer />, title: "Computer" },
    { icon: <BsSmartwatch />, title: "Smart Watch" },
    { icon: <IoCameraOutline />, title: "Camera" },
    { icon: <FaHeadphones />, title: "HeadPhone" },
    { icon: <IoLogoGameControllerA />, title: "Gamming" },
    { icon: <IoIosPhonePortrait />, title: "Phone" },
    { icon: <HiOutlineDesktopComputer />, title: "Computer" },
    { icon: <BsSmartwatch />, title: "Smart Watch" },
    { icon: <IoCameraOutline />, title: "Camera" },
    { icon: <FaHeadphones />, title: "HeadPhone" },
    { icon: <IoLogoGameControllerA />, title: "Gamming" },
  ];
  return (
    <div className="categories py-10">
      <div className="container">
        <SpecialHeading title="Categories" contentTit="Browse By Category" />
        <div className="content relative py-10 mt-6">
          <Swiper
            centeredSlides={true}
            grabCursor={true}
            loop={true}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 1,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 50,
              },
            }}
            navigation={{
              nextEl: ".swiper-button-next-icon",
              prevEl: ".swiper-button-prev-icon",
              clickable: true,
            }}
            modules={[Navigation]}
            className="swiper-icon"
          >
            {icons.map((ic, i) => (
              <SwiperSlide className="swiper-slide-active:bg-red-600" key={i + 1}>
                <div className="icon-card flex justify-center items-center flex-col gap-4 py-12">
                  <div className="icon text-6xl">{ic.icon}</div>
                  <h3>{ic.title}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="slide-controler absolute right-2 -top-14 flex gap-3 max-lg:-top-0">
            <FaArrowLeft
              style={{ color: "black" }}
              className="swiper-button-next-icon bg-gray-200 text-4xl p-2 rounded-full slider-arrow"
            />
            <FaArrowRight
              style={{ color: "black" }}
              className="swiper-button-prev-icon bg-gray-200 text-4xl p-2 rounded-full slider-arrow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Categories;
