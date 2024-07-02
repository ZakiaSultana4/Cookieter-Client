import moment from "moment";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { axiosSecure } from "../hooks/useExiosSecure";
import { Helmet } from "react-helmet";


const UpdateFood = () => {

    const foodData = useLoaderData();
    var date = moment(foodData.expiredDate).format('YYYY-MM-DD HH:mm');

    const handleUpdateFood = (e) => {   
        const addProductId = toast.loading("Product adding...");
        e.preventDefault();

        const form = e.target;
        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const foodQuantity = parseInt(form.foodQuantity.value);
        const date = form.expiredDate.value;
        const pickUpLocation = form.pickUpLocation.value;
        const category = form.category.value;
        const additionalNotes = form.additionalNotes.value;
        const expiredDate = moment(date).format("lll");

        const foodInfo = {foodName, foodImage, foodQuantity, expiredDate, pickUpLocation, category, additionalNotes,};

        axiosSecure.patch(`/api/v1/update-food/${foodData._id}`, {...foodInfo})
        .then(res => {
            console.log(res);
            if(res.data.modifiedCount > 0) {
                toast.success("Product added successfully!!", { id: addProductId });
            }
        }).catch(err => {
            console.log(err);
            toast.error(err.message, {id: addProductId});
        })
    }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Cookiteer | Update Food</title>
            </Helmet>
            <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3">
                <div
                    style={{
                        background: "url('https://images.pexels.com/photos/4871119/pexels-photo-4871119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') no-repeat center",
                        backgroundSize: "cover"
                    }}
                    className="md:text-5xl text-3xl w-full font-bold py-28 text-center overflow-hidden relative rounded-xl border-8 border-lime-400">
                    <span className="overlayz z-0"></span>
                    <h1 className="z-40 relative text-white">Update Food</h1>

                    <p className="text-base text-white z-30 relative py-5 font-medium">
                        We believe that every morsel matters and that food is best when shared. <br /> Your kitchen surplus could be a hearty meal for a neighbor.
                    </p>
                </div>

                <div className="mt-10 mb-24">
                    <form onSubmit={handleUpdateFood} className="grid md:grid-cols-2 grid-cols-1 gap-7">
                        <div className="grid grid-cols-1 gap-5">
                            <label htmlFor="foodName"> Food Name
                                <input type="text" name="foodName" defaultValue={foodData?.foodName} className="w-full md:py-5 py-2 md:text-base border text-sm mt-3 rounded-lg px-5" placeholder="Food Name" required />
                            </label>

                            <label htmlFor="foodImage"> Food Image
                                <input type="text" defaultValue={foodData?.foodImage} name="foodImage" className="w-full md:py-5 py-2 md:text-base border text-sm mt-3 rounded-lg px-5" placeholder="Food Image" required />
                            </label>

                            <label htmlFor="foodQuantity"> Food Quantity(no. of person to be served)
                                <input type="number" defaultValue={foodData?.foodQuantity} name="foodQuantity" className="w-full md:py-5 py-2 md:text-base border text-sm mt-3 rounded-lg px-5" placeholder="Food Quantity" min="1" max="100" required />
                            </label>

                            <label htmlFor="expiredDate"> Expired Date/Time
                                <input type="datetime-local" defaultValue={date} name="expiredDate" className="w-full md:py-5 py-2 md:text-base border text-sm mt-3 rounded-lg px-5" placeholder="Expired Date" required />
                            </label>

                            <label htmlFor="pickUpLocation"> Pickup Location
                                <input type="text" name="pickUpLocation" defaultValue={foodData?.pickUpLocation} className="w-full md:py-5 py-2 md:text-base border text-sm mt-3 rounded-lg px-5" placeholder="Pickup Location" required />
                            </label>
                        </div>

                        <div className="grid grid-cols-1 gap-5">
                            <label htmlFor="category"> Category
                                <select defaultValue={foodData?.category} name="category" id="" className="w-full md:py-5 py-2 md:text-base border text-sm rounded-lg px-5 mt-3" required>
                                    <option selected disabled>Select Category</option>
                                    <option value="Fresh Produce">Fresh Produce</option>
                                    <option value="Rice Items">Rice Items</option>
                                    <option value="Dairy & Eggs">Dairy & Eggs</option>
                                    <option value="Meat & Seafood">Meat & Seafood</option>
                                    <option value="Fries & Crispy">Fries & Crispy</option>
                                    <option value="Snacks & Sweets">Snacks & Sweets</option>
                                    <option value="Others">Others</option>
                                </select>
                            </label>

                            <label htmlFor="additionalNotes"> Additional Notes
                                <textarea defaultValue={foodData?.additionalNotes} name="additionalNotes" className="w-full md:py-5 py-2 md:text-base border text-sm mt-3 rounded-lg px-5" id="" placeholder="Additional Notes" required cols="30" rows="10"></textarea>
                            </label>

                            <input type="submit" className="w-full block py-5 md:text-lg text-base font-bold bg-lime-500 text-white rounded-lg cursor-pointer" value="Submit Update" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateFood;