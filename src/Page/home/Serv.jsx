const Serv = () => {
  return (
    <div className="max-w-7xl mx-auto my-8 px-4 container">
        <p className=" pt-10 text-center font-bold text-2xl">SERVICES</p>
      <h1
        className="   capitalize lg:text-3xl my-2
   first-letter md:text-7xl text-4xl font-extrabold title-text text-center"
      >
What We Can Do For You
      </h1>
      <div className=" grid md:grid-cols-3 grid-cols-1  pt-5 px-6 gap-5 ">
        <div className=" relative bg-[#F7F4EE] text-center shadow-md lg:w-[300px] rounded-md">
          <img src="https://pixner.net/zooshi/main/assets/images/service2.jpg" />
          <p
            className="  absolute mt-3  text-white text-center bg-[#85B72C] font-semibold text-md 
         top-[218px] right-20 rounded-full px-4 py-2   "
          >
            <p>Food Delivery</p>

          </p>
          <p className=" py-8 px-3">If you request any food then our team members will attain with your requested food in your location.</p>
        </div>
        <div className=" relative bg-[#F7F4EE] text-center shadow-md lg:w-[300px] rounded-md">
          <img src="https://pixner.net/zooshi/main/assets/images/service3.jpg" />
          <p
            className="  absolute mt-3  text-white text-center bg-[#85B72C] font-semibold text-md 
            top-[215px] right-[100px] rounded-full px-4 py-2  "
          >
            <p>Cafeteria</p>

          </p>
          <p className=" py-8 px-3">If you request any food then come to our location and give your requested food .</p>
        </div>
        <div className=" relative bg-[#F7F4EE] text-center shadow-md lg:w-[300px] rounded-md">
          <img className="h-[260px]" src="data:image/jpeg;base64,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" />
          <p
            className="  absolute mt-3  text-white text-center bg-[#85B72C] font-semibold text-md 
            top-[235px] right-20 rounded-full px-4 py-2  "
          >
            <p>Buffet Service</p>

          </p>
          <p className=" py-8 px-3">If you request any food then come to our location and eat food as much as you want .</p>
        </div>
  
      </div>
    </div>
  );
};

export default Serv;
