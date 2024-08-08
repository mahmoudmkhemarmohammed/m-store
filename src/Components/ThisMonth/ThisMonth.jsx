import { useContext } from "react";
import SpecialHeading from "../Special-Heading/SpecialHeading"
import { data } from "../Context/Context";
import { CiHeart } from "react-icons/ci";
import { BiShowAlt } from "react-icons/bi";
const ThisMonth = () => {
    const porducts = useContext(data);
    return (
        <div className="this-month py-10 max-lg:py-5">
            <div className="container">
                <SpecialHeading title="This Month" contentTit="Best Selling Products" button="true" space="between"/>
                <div className="box-product grid grid-cols-gridTemCols gap-10">
                    {porducts.slice( 10 , 14).map( card => (
              <div className="card group cursor-pointer" key={card.id}>
              <div className="img overflow-hidden relative" >
                <img src={require(`../../${card.images[0]}`)} alt={card.title} className="image w-full rounded-md hover:"/>
                <button className="block border-none outline-none bg-black text-white p-4 w-full absolute left-0 rounded-md -bottom-full duration-300 group-hover:bottom-0">Add To Cart</button>
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
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ThisMonth;