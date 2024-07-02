const Visit = () => {
  return (
    <div className="max-w-7xl mx-auto my-8 px-4 container">
      <p className=" mt-5 text-center font-bold text-2xl">AMENITIES</p>
      <h1
        className="   capitalize lg:text-3xl my-2
first-letter md:text-7xl text-4xl font-extrabold title-text text-center"
      >
        Make Plans To Visit Us
      </h1>
      <div className=" grid md:grid-cols-3 grid-cols-1  pt-5 px-6 gap-5 ">
        <div className=" relative  text-center shadow-md lg:w-[350px] rounded-md">
          <img
            src="https://pixner.net/zooshi/main/assets/images/amenities/ic1.png"
            className=" px-10 py-10"
          />
          <p className=" font-semibold py-5 text-3xl text-[#85B72C]">
            Parking Available
          </p>
        </div>
        <div className=" relative  text-center shadow-md lg:w-[350px] rounded-md">
          <img
            src="https://pixner.net/zooshi/main/assets/images/amenities/ic2.png"
            className=" px-10 py-10"
          />
          <p className=" font-semibold py-5 text-3xl text-[#85B72C]">
          Kids Play Area
          </p>
        </div>
        <div className=" relative  text-center shadow-md lg:w-[350px] rounded-md">
          <img
            src="https://pixner.net/zooshi/main/assets/images/amenities/ic3.png"
            className=" px-10 py-10"
          />
          <p className=" font-semibold py-5 text-3xl text-[#85B72C]">
          Menu à la Carte
          </p>
        </div>
      </div>
    </div>
  );
};

export default Visit;
