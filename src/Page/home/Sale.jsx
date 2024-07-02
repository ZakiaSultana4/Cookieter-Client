

const Sale = () => {
  return (
    <div className="max-w-7xl mx-auto my-8 px-4 container">
    <h1
      className="   capitalize lg:text-3xl my-2
   first-letter md:text-7xl text-4xl font-extrabold title-text text-center"
    >
     Mostlt Donated foods in last month
    </h1>
    <div className=" grid md:grid-cols-3 grid-cols-1  pt-5 px-6 gap-5 ">
      <div className=" relative bg-[#F7F4EE] py-8 px-8 text-center shadow-md  rounded-full w-[300px]">
        <img src="https://pixner.net/zooshi/main/assets/images/statistics/stat01.png" />
        <p className="  absolute mt-3  text-white text-center bg-[#85B72C] font-semibold text-md 
         md:-top-2 md:right-6 rounded-full px-4 py-5 -top-4 -right-3 ">
            <p>10K</p>
            PIZZAS
        </p>
      </div>
      <div className=" relative bg-[#F7F4EE] py-8 px-8 text-center shadow-md  rounded-full w-[300px]">
        <img src="https://pixner.net/zooshi/main/assets/images/statistics/stat02.png" />
        <p className="  absolute mt-3  text-white text-center bg-[#85B72C] font-semibold text-md 
         md:-top-4 md:right-6 rounded-full px-4 py-5 -top-4 -right-3 ">
            <p>20K</p>
            DESERTS
        </p>
      </div>
      <div className=" relative bg-[#F7F4EE] py-8 px-8 text-center shadow-md  rounded-full w-[300px]">
        <img src="https://pixner.net/zooshi/main/assets/images/statistics/stat04.png" />
        <p className="  absolute mt-3  text-white text-center bg-[#85B72C] font-semibold text-md 
         md:-top-4 md:right-6 rounded-full px-4 py-5 -top-4 -right-3 ">
            <p>30K</p>
          Noddles
        </p>
      </div>
   
      <div className="  relative">
        <img className="" src="https://kits.pixel-show.com/kit-2/wp-content/uploads/sites/5/2020/03/image_4-min.png" />
        <p className="  absolute mt-3  text-white text-center bg-[#85B72C] font-semibold text-md 
         md:top-4 md:right-6 rounded-full px-4 py-5 top-4 right-0 ">
            <p>25K</p>
            SHAKES
        </p>
      </div>
      <div className="  relative">
        <img src="https://kits.pixel-show.com/kit-2/wp-content/uploads/sites/5/2020/03/image_5-min.png" />
        <p className="  absolute mt-3  text-white text-center bg-[#85B72C] font-semibold text-md 
         md:top-4 md:right-6 rounded-full px-4 py-5 top-0 -right-8 ">
            <p>20K</p>
            SOFT DRINKS
        </p>
      </div>
      <div className="  relative">
        <img src="https://kits.pixel-show.com/kit-2/wp-content/uploads/sites/5/2020/03/image_6-min.png" />
        <p className="  absolute mt-3  text-white text-center bg-[#85B72C] font-semibold text-md 
  md:top-4 md:right-6 rounded-full px-4 py-5 top-0 -right-8 ">
            <p>50K</p>
            APPLE JUICE
        </p>
      </div>
    
      
    </div>
  </div>
  )
}

export default Sale