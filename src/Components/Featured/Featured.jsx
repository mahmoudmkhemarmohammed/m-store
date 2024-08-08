import SpecialHeading from "../Special-Heading/SpecialHeading"

const Featured = () => {
  return (
    <div className="featured">
        <div className="container">
            <SpecialHeading title="Featured" contentTit="New Arrival" />
            <div className="content py-9 flex gap-14 justify-between max-lg:flex-col">
                <div className="col flex-grow relative w-2/5 h-heightSlider max-lg:w-full">
                    <img className="w-full h-full" src={require("../../assets/images/ps1.webp")} alt="" />
                    <div className="text absolute bottom-5 left-5 text-white">
                    <h3 className="text-4xl">PlayStation 5</h3>
                    <p className="my-5 max-w-72 text-xl">Black and white version of the PS5 coming out Sale.</p>
                    <button className="text-3xl underline">Shop Now</button>
                    </div>
                </div>
                <div className="col flex-grow flex justify-between gap-5 flex-wrap relative w-2/5 h-heightSlider max-lg:w-full">
                <div className="col-1 w-full h-80 relative">
                <img className="w-full h-full" src={require("../../assets/images/playstation.jpg")} alt="" />
                    <div className="text absolute bottom-5 left-5 text-white">
                    <h3 className="text-4xl">Speakers</h3>
                    <p className="my-5 max-w-72 text-xl">Black and white version of the PS5 coming out Sale.</p>
                    <button className="text-3xl underline">Shop Now</button>
                    </div>
                </div>

                <div className="col-2 relative w-2/5 flex-grow h-52">
                <img className="w-full h-full" src={require("../../assets/images/PS5.jpg")} alt="" />
                    <div className="text absolute bottom-5 left-5 text-white">
                    <h3 className="text-2xl">Speakers</h3>
                    <p className="my-2 max-w-72 text-xs">Black and white version of the PS5 coming out Sale.</p>
                    <button className="text-xl underline">Shop Now</button>
                    </div>
                </div>


                <div className="col-2 relative w-2/5 flex-grow h-52">
                <img className="w-full h-full" src={require("../../assets/images/ps.jpg")} alt="" />
                    <div className="text absolute bottom-5 left-5 text-white">
                    <h3 className="text-2xl">Speakers</h3>
                    <p className="my-2 max-w-72 text-xs">Black and white version of the PS5 coming out Sale.</p>
                    <button className="text-xl underline">Shop Now</button>
                    </div>
                </div>

                </div>
            </div>
        </div>
    </div>
  )
}
export default Featured