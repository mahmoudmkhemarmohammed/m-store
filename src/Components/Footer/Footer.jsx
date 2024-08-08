import { BiLogoTelegram } from "react-icons/bi";
import { FaFacebookF , FaLinkedinIn } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="pt-20 bg-black">
        <div className="container grid grid-cols-gridTemColsFot gap-7 text-zinc-400">
            <div className="col">
                <div className="title mb-4">
                <h2 className="text-3xl font-bold">Exclusive</h2>
                </div>
                <div className="box">
                <h3 className="text-2xl">Subscibe</h3>
                <p className="my-5">Get 10% off your first order</p>
                <div className="button flex justify-between items-center border-2 border-zinc-400 rounded-md">
                <input className="bg-transparent p-3" type="text" placeholder="Enter Your Email"/>
                <BiLogoTelegram className="text-4xl mr-5"/>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="title mb-4">
                <h2 className="text-3xl font-bold">Support</h2>
                </div>
                <div className="box">
                <h3 className="text-2xl">111 Bijoy sarani Dhada,<br/> DH 1515, Bangladesh.</h3>
                <h3 className="text-2xl my-5">exclusive@gmail.com</h3>
                <h3 className="text-2xl ">+88015-88888-9999</h3>
                </div>
            </div>
            <div className="col">
                <div className="title mb-4">
                <h2 className="text-3xl font-bold">Account</h2>
                </div>
                <ul className="flex flex-col gap-y-5 text-zinc-400 *:duration-300 *:cursor-pointer">
                    <li className="hover:text-red-600 hover:pl-3">My Account</li>
                    <li className="hover:text-red-600 hover:pl-3">Login / Register</li>
                    <li className="hover:text-red-600 hover:pl-3">Cart</li>
                    <li className="hover:text-red-600 hover:pl-3">Wishlist</li>
                    <li className="hover:text-red-600 hover:pl-3">Shop</li>
                </ul>
            </div>
            <div className="col">
                <div className="title mb-4">
                <h2 className="text-3xl font-bold">Quick Link</h2>
                </div>
                <ul className="flex flex-col gap-y-5 text-zinc-400 *:hover:*:pl-3 group *:duration-300 *:cursor-pointer">
                    <li className="hover:text-red-600 hover:pl-3">Privacy Policy</li>
                    <li className="hover:text-red-600 hover:pl-3">Terms Of Use</li>
                    <li className="hover:text-red-600 hover:pl-3">FAQ</li>
                    <li className="hover:text-red-600 hover:pl-3">Contact</li>
                </ul>
            </div>

            <div className="col">
                <div className="title mb-4">
                <h2 className="text-3xl font-bold">Download App</h2>
                </div>
                <p>Save $3 with App New User Only</p>
                <div className="mt-5">
                        <img className="bg-white" src={require("../../assets/images/store.png")} alt="" />
                </div>
                <div className="social flex gap-7 items-center mt-5 text-3xl">
                    <FaFacebookF />
                    <CiTwitter />
                    <IoLogoInstagram />
                    <FaLinkedinIn />
                </div>
            </div>

        </div>
        <div className="copyright text-zinc-400 text-center mt-16  border-t-bordFoot border-zinc-800 py-4">
            <p>@copyright Mahmoud 2024. All right reserved</p>
        </div>
    </footer>
  )
}

export default Footer