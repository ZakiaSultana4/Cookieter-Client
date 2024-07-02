import { useEffect, useState } from "react";
import Banner from "../Component/Banner/Banner";
import { axiosSecure } from "../hooks/useExiosSecure";
import { Link } from "react-router-dom";
import FoodItem from "../Component/FoodItem/FoodItem";
import About from "./home/About"
import Team from "./Team";
import Testimonials from "./Testimonials";
import { Helmet } from "react-helmet";
import Br from "../Page/home/Br";
import Team2 from "./Team2";
import Sale from "./home/Sale";
import Serv from "./home/Serv";
import Visit from "./home/Visit";

const Home = () => {
  const [foods, setFoods] = useState([]);
  console.log(foods);
  
  const [seeMoreFoods, setSeeMoreFoods] = useState(false);

  useEffect(() => {
    axiosSecure
      .get("/find-foods")
      .then((res) => {
        if (res.data.length > 6) {
          const foodsArr = res.data.slice(0, 6);
          setFoods(foodsArr);
          setSeeMoreFoods(true);
          return;
        }
        setFoods(res.data);
        setSeeMoreFoods(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cookieter| Home</title>
      </Helmet>

      <Banner></Banner>
      <Br />
      <div className="">
        <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3 py-10">
          <h1 className="md:text-7xl text-4xl font-extrabold title-text text-center">
            Featured Foods
          </h1>
          <p className="text-center lg:w-[70%] md:w-[80%] w-full mx-auto my-5 md:text-base text-sm md:leading-7 leading-relaxed">
            If you need food then Choose your covetable food from here.
          </p>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 md:mt-16 mt-10">
            {foods?.map((food) => (
              <FoodItem key={food._id} food={food}></FoodItem>
            ))}
          </div>

          <div className="text-center mt-5 flex justify-center items-center mx-4">
            {seeMoreFoods ? (
              <Link
                to="/available-foods"
                className="  drop-shadow-xl btn bg-[#85B72C] text-white w-full  "
              >
                Show All Foods
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div>
  
      </div>

      <div className="max-w-7xl mx-auto">
        <Team></Team>
      </div>
<About/>
<Sale/>
<Serv/>
<Team2/>
<Visit/>
      <div>

        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
