import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useExiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import { Link} from "react-router-dom";
import bgImage from "../assets/images/hand-giving-food-bowl-needy-person.jpg";
import animationData from "../../public/Animation - 1699287520981.json";
import "./style.css";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet";

const ManageFood = () => {
  const { user} = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [myFoods, setMyFoods] = useState([]);
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    axiosSecure
      .get(`/manage-food?email=${user.email}`)
      .then((res) => setMyFoods(res.data))
  }, [axiosSecure, user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/manage-food/${id}`)
          .then((res) => {
            const filterFoods = myFoods.filter((food) => food._id !== id);
            setMyFoods(filterFoods);

            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: err.message,
              footer: '<a href="#">Why do I have this issue?</a>',
            });
          });
      }
    });
  };

  return (
    <div className="bg-[#fafafa] py-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cookiteer | Manage Food</title>
      </Helmet>
      <div className="max-w-7xl mx-auto lg:p-0 md:px-5 px-3">
        <div
          style={{
            background: `url('${bgImage}') no-repeat center center`,
            backgroundSize: "cover",
          }}
          className="relative overflow-hidden rounded-2xl border-8 border-lime-500 shadow-xl"
        >
          <div className="py-32">
            <h1 className="md:text-5xl text-3xl font-bold text-white z-30 relative text-center">
              Manage My Food
            </h1>

            <p className="text-center text-white relative z-30 md:w-[70%] w-[95%] mx-auto mt-5 leading-loose">
              Embark on a seamless culinary adventure with our website&apos;s
              food management section. Designed with our food connoisseurs in
              mind, this space provides an intuitive and efficient way to
              browse, select, and purchase your favorite ingredients.
            </p>
          </div>
          <span className="overlayz"></span>
        </div>

        <div>
          <h2 className="md:text-3xl text-xl font-bold mt-10">
            Your total food count : {myFoods.length}
          </h2>
        </div>

        <div className="space-y-10 mt-12">
          <div className="overflow-x-hidden relative">
            <table className="table relative">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Expired Date</th>
                  <th>Action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}

                {myFoods.length > 0 ? (
                  <>
                    {myFoods?.map((food) => (
                      <>
                        <tr>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <img
                                    src={food?.foodImage}
                                    alt="Avatar Tailwind CSS Component"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="font-bold">
                                  {food?.foodName}
                                </div>
                                <div className="text-sm badge bg-lime-500 text-white">
                                  {food?.pickUpLocation}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="md:text-sm text-xs font-medium bg-lime-500 p-1 rounded-lg text-white">
                              {food?.expiredDate}
                            </span>
                          </td>
                          <td>
                            <div className="flex h-full gap-4">
                              <Link
                                to={`/ufood/${food._id}`}
                                className="btn btn-xs bg-lime-500 text-white rounded-lg"
                              >
                                Update
                              </Link>
                              <button
                                onClick={() => handleDelete(food?._id)}
                                className="btn btn-xs bg-red-500 text-white rounded-lg"
                              >
                                Delate
                              </button>
                            </div>
                          </td>
                          <th>
                            <Link
                              to={`/manage-food-request/${food._id}`}
                              className="btn btn-ghost btn-xs border border-lime-500"
                            >
                              Manage this food request
                            </Link>
                          </th>
                        </tr>
                      </>
                    ))}{" "}
                  </>
                ) : (
                  <div className="md:col-span-2">
                    <Lottie
                      className="md:w-[30%] w-[80%] mx-auto"
                      options={defaultOptions}
                      animationData={animationData}
                      height={200}
                      width={200}
                    ></Lottie>
                    <h2 className="md:text-4xl text-2xl font-bold text-center text-green-500">
                      There is no product Request!
                    </h2>
                  </div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageFood;
