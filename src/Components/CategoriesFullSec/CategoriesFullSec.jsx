const CategoriesFullSec = () => {
  return (
    <div className="category-full-sec py-10 max-lg:py-5">
      <div className="container relative">
        <img className="w-full h-heightSlider max-[400px]:h-96" src={require("../../assets/images/music.jpg")} alt="" />
        <div className="text absolute top-10 left-10 text-white">
        <h3 className="text-green-500">Categories</h3>
        <h2 className="text-6xl my-7 font-bold max-w-lg max-[599px]:text-3xl">Enhance Your Music Experience</h2>
        <div className="bullets flex gap-5 text-center text-black max-[599px]:gap-2">
            <div className="Hours bg-white p-5 rounded-full max-[599px]:p-3 max-[400px]:text-fontSmBuleets">
                <h2>23</h2>
                <h3>Hours</h3>
            </div>
            <div className="Dayes bg-white p-5 rounded-full max-[599px]:p-3 max-[400px]:text-fontSmBuleets">
                <h2>05</h2>
                <h3>Dayes</h3>
            </div>
            <div className="Minutes bg-white p-5 rounded-full max-[599px]:p-3 max-[400px]:text-fontSmBuleets">
                <h2>59</h2>
                <h3>Minutes</h3>
            </div>
            <div className="Seconds bg-white p-5 rounded-full max-[599px]:p-3 max-[400px]:text-fontSmBuleets">
                <h2>35</h2>
                <h3>Seconds</h3>
            </div>
        </div>
        <button className="bg-green-500 p-3 mt-16 px-12 rounded-md">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
export default CategoriesFullSec;
