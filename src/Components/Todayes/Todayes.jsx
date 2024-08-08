import { CiHeart } from "react-icons/ci";
import { BiShowAlt } from "react-icons/bi";
import { FaArrowRight , FaArrowLeft } from "react-icons/fa";
import { useContext } from "react";
import SpecialHeading from "../Special-Heading/SpecialHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { data } from "../Context/Context";
import { Navigation } from "swiper/modules";
const Todayes = () => {
  const products = useContext(data);
  return (
    <div className="todayes py-10 max-[1279px]:pt-4 border-b-2">
      <div className="container">
        <SpecialHeading
          title="Today's"
          contentTit="Flash Sales"
          countDown="true"
        />
        <div className="content relative py-10 mt-6">
          <Swiper
          loop={true}
          grabCursor={true}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween : 1
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50
            }
          }}
          navigation={{
            nextEl: ".swiper-button-next-product",
            prevEl: ".swiper-button-prev-product",
            clickable: true,
          }}
          modules={[Navigation]}
          >
            {products.map( card => <SwiperSlide key={card.id}>
              <div className="card cursor-pointer group" key={card.id}>
                <div className="img overflow-hidden relative" >
                  <img src={require(`../../${card.images[0]}`)} alt={card.title} className="image w-full rounded-md hover:"/>
                  <button className="block border-none outline-none bg-black text-white p-4 w-full absolute left-0 rounded-md -bottom-full duration-300 group-hover:bottom-0">Add To Cart</button>
                  <div className="dis-pers bg-red-600 w-fit text-white px-5 py-2 rounded-md absolute top-3 left-2">-{Math.floor((card.price - card.disprice) / card.price * 100)}%</div>
                  <div className="icon text-3xl absolute top-4 right-7 flex flex-col gap-y-3">
                  <CiHeart className="bg-white p-1 rounded-3xl"/>
                  <BiShowAlt className="bg-white p-1 rounded-3xl"/>
                  </div>
                </div>
                <div className="text py-3">
                  <div className="title">
                    <h2 className="font-medium text-xl">{card.title}</h2>
                  </div>
                  <div className="price flex items-center gap-x-4">
                    <h3 className="text-red-600 text-xl mt-1">${card.disprice}</h3>
                    <del className="text-xl mt-1">${card.price}</del>
                  </div>
                </div>
              </div>
            </SwiperSlide>)}
          </Swiper>
          <div className="slide-controler absolute right-2 -top-14 flex gap-3 max-lg:-top-0">
              <FaArrowLeft style={{color: "black"}} className="swiper-button-next-product bg-gray-200 text-4xl p-2 rounded-full slider-arrow"/>
              <FaArrowRight style={{color: "black"}} className="swiper-button-prev-product bg-gray-200 text-4xl p-2 rounded-full slider-arrow"/>
          </div>
        </div>
        <div className="btn text-center p-2">
          <button className="bg-red-600 py-4 px-7 text-xl text-white rounded">View All Products</button>
        </div>
      </div>
    </div>
  );
};
export default Todayes;
