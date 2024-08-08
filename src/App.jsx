import { useEffect, useRef } from "react";
import Categories from "./Components/Categories/Categories";
import CategoriesFullSec from "./Components/CategoriesFullSec/CategoriesFullSec";
import Featured from "./Components/Featured/Featured";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Icons from "./Components/Icons/Icons";
import OurProducts from "./Components/OurProducts/OurProducts";
import ThisMonth from "./Components/ThisMonth/ThisMonth";
import Todayes from "./Components/Todayes/Todayes";
import { FaArrowUp } from "react-icons/fa";
const App = () => {
  const myRef = useRef();
  const scrollToTop = () => {
    setTimeout(() => {
      myRef.current.style.scale = ".5";
      setTimeout(() => {
        myRef.current.style.scale = "1";
        setTimeout(() => {
          window.scroll({ top: 0, behavior: "smooth" });
        }, 50);
      }, 50);
    }, 50);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 800
        ? (myRef.current.style.display = "block")
        : (myRef.current.style.display = "none");
    });
  }, []);
  return (
    <>
      <Header />
      <Home />
      <Todayes />
      <Categories />
      <ThisMonth />
      <CategoriesFullSec />
      <OurProducts />
      <Featured />
      <Icons />
      <Footer />
      <div
        className="btn-scroller fixed right-5 bottom-5 bg-red-600 text-2xl p-4 rounded-full cursor-pointer text-white duration-300 hidden"
        ref={myRef}
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </div>
    </>
  );
};
export default App;
