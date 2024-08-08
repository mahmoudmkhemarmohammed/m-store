const SpecialHeading = (props) => {
  return (
    <div className="special-heading">
      <div className="title flex gap-x-3 items-center">
        <div className="w-5 h-10 bg-red-600 rounded-md"></div>
        <h3 className="text-red-600 font-bold">{props.title}</h3>
      </div>
      <div className={`title-content text-4xl font-bold mt-6 flex gap-x-24 gap-y-3 justify-${props.space} max-md:flex-col max-md:text-2xl`}>
        <h2>{props.contentTit}</h2>
        {props.countDown === "true" ? (
          <div className="count-down flex justify-between items-end gap-x-5 text-center">
            <div className="days">
              <p className="text-xl font-medium mb-2 max-md:text-xs">Days</p>
              <h3 className="font-bold">03</h3>
            </div>
            <span className="text-red-600 mb-2">:</span>
            <div className="hours">
              <p className="text-xl font-medium mb-2 max-md:text-xs">Hours</p>
              <h3 className="font-bold">23</h3>
            </div>
            <span className="text-red-600 mb-2">:</span>
            <div className="minutes">
              <p className="text-xl font-medium mb-2 max-md:text-xs">Minutes</p>
              <h3 className="font-bold">19</h3>
            </div>
            <span className="text-red-600 mb-2">:</span>
            <div className="second">
              <p className="text-xl font-medium mb-2 max-md:text-xs">Seconds</p>
              <h3 className="font-bold">56</h3>
            </div>
          </div>
        ) : (
          false
        )}
        {props.button === "true" ? (
          <div className="btn text-center p-2">
            <button className="bg-red-600 py-4 px-7 text-xl text-white rounded">
              View All Products
            </button>
          </div>
        ) : (
          false
        )}
      </div>
    </div>
  );
};
export default SpecialHeading;
