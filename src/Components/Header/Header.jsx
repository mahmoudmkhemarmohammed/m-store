import { Link } from "react-router-dom";
import { CiHeart, CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
const Header = () => {
  const [show, setShow] = useState(false);
  const handelNav = () => {
    setShow(!show);
  };
  return (
    <header className="bg-white border-b-2 sticky top-0 z-50">
      <div className="bg-black text-white">
        <div className="container p-4 flex justify-between items-center max-md:flex-col max-md:text-center max-md:text-xs">
          .
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery-OFF 50%!
            <strong className="underline ml-3 max-md:ml-0"> ShopNow</strong>
          </p>
          <select className="bg-transparent">
            <option className="text-black" value="English">
              English
            </option>
            <option className="text-black" value="Arabic">
              Arabic
            </option>
          </select>
        </div>
      </div>
      <div
        className={`container pt-10 pb-4 flex justify-between items-center max-md:p-4`}
      >
        <h2 className="logo text-3xl font-semibold max-md:text-2xl">
          Exclusive
        </h2>
        <ul className={`flex items-center gap-x-5 text-xl max-md:hidden`}>
          <li className="active border-b-2 border-gray-600">
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>Contact</Link>
          </li>
          <li>
            <Link to={"/"}>About</Link>
          </li>
          <li>
            <Link to={"/"}>Sign Up</Link>
          </li>
        </ul>
        <div className="flex justify-between gap-3 items-center max-md:hidden">
          <div className="search flex justify-between gap-x-3 items-center p-3 pl-5 bg-zinc-100 rounded-md max-lg:pl-3">
            <input
              className="border-none outline-none bg-transparent max-lg:hidden"
              type="text"
              placeholder="What are you looking for?"
            />
            <CiSearch className="text-3xl cursor-pointer" />
          </div>
          <CiHeart className="text-3xl cursor-pointer" />
          <BsCart3 className="text-3xl cursor-pointer" />
        </div>
        <div className="hidden max-md:block">
          {show === false ? (
            <HiBars3BottomRight onClick={handelNav} className="text-3xl" />
          ) : (
            <IoMdClose className="text-3xl text-red-600" onClick={handelNav} />
          )}
        </div>
      </div>
      <div
        className={`nav-mob fixed bg-white z-50 top-topNav -left-full w-full h-heightNav py-5 duration-300 ${
          show === true ? "left-0" : "-left-full"
        }`}
      >
        <div className="container w-full">
          <div className="search flex justify-between gap-x-3 items-center p-3 pl-5 bg-zinc-100 rounded-md max-lg:pl-3">
            <input
              className="border-none outline-none bg-transparent w-full"
              type="text"
              placeholder="What are you looking for?"
            />
            <CiSearch className="text-3xl cursor-pointer" />
          </div>
          <ul className={`flex flex-col gap-y-10 w-full mt-5`}>
            <li className="active">
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/"}>Contact</Link>
            </li>
            <li>
              <Link to={"/"}>About</Link>
            </li>
            <li>
              <Link to={"/"}>Sign Up</Link>
            </li>
          </ul>
          <div className="ico my-3 flex justify-between">
            <CiHeart className="text-3xl cursor-pointer" />
            <BsCart3 className="text-3xl cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;