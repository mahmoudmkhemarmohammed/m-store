import { FaCarSide } from "react-icons/fa";
import { CiHeadphones } from "react-icons/ci";
import { AiFillSafetyCertificate } from "react-icons/ai";
const Icons = () => {
  return (
    <div className="icons py-16">
        <div className="container flex justify-center gap-20 flex-wrap">
            <div className="col flex items-center gap-y-3 flex-col">
            <FaCarSide className="bg-black text-6xl text-white p-2 rounded-full border-bordIcon border-bordIconColor"/>
            <h2 className="text-2xl font-bold">FREE AND FAST DELIVERY</h2>
            <p>Free delivery for all orders over $140</p>
            </div>
            <div className="col flex items-center gap-y-3 flex-col">
            <CiHeadphones className="bg-black text-6xl text-white p-2 rounded-full border-bordIcon border-bordIconColor"/>
            <h2 className="text-2xl font-bold">24/7 CUSTOMER SERVICE</h2>
            <p>Friendly 24/7 customer support</p>
            </div>
            <div className="col flex items-center gap-y-3 flex-col">
            <AiFillSafetyCertificate className="bg-black text-6xl text-white p-2 rounded-full border-bordIcon border-bordIconColor"/>
            <h2 className="text-2xl font-bold">MONEY BACK GUARANTEE</h2>
            <p>We reurn money within 30 days</p>
            </div>
        </div>
    </div>
  )
}

export default Icons