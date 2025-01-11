import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Payments = () => {
    const {user} = useAuth();
    const axiosSecure= useAxiosSecure();
    const navigate = useNavigate();
    // console.log(user.email);
    const [cart, refecth] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        const payment = {
            email : user.email,
            name : data.name,
            phoneNumber : parseFloat(data.phoneNumber),
            address : data.address,
            totalPrice : totalPrice,
            date : new Date(),
            cartIds : cart.map(item=> item._id),
            burqaIds: cart.map(item=>item.burqaId),
            status : 'pending'
        };
        const res = await axiosSecure.post('/payments',payment);
        console.log('payment saved',res.data);
        refecth();
        if(res.data?.paymentResult?.insertedId){
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Thank you for your Order",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/dashboard/paymentHistory')
        }

    }
    return (
        <div>
            <SectionTitle heading="Payment" subheading="Pay to Wear"></SectionTitle>
            <div>
                <div className="ml-4 p-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Your Name*</span>
                                </div>
                                <input
                                    {...register("name")}
                                    type="text" placeholder="Name" className="input input-bordered w-full" required/>
                            </label>
                        </div>
                        <div>
                            <div>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Phone Number</span>
                                    </div>
                                    <input
                                        {...register("phoneNumber")}
                                        type="text" placeholder="01*********" className="input input-bordered w-full" required/>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Address where your parcel will delivered</span>
                                </div>
                                <textarea
                                    {...register('address')}
                                    className="textarea textarea-bordered h-24" placeholder="Give your exact location , including district,upazilla, House Number" required></textarea>
                            </label>
                        </div>
                        <div className="border rounded-lg my-2 p-2">
                            <h3 
                            {...register("totalPrice")}
                            className="text-2xl">Total Price : {totalPrice}</h3>
                        </div>
                        <div className="form-control border rounded-lg mt-2">
                            <label className="label cursor-pointer">
                                <span className="label-text font-semibold ml-3">Cash on Delivary</span>
                                <input
                                    {...register('method')}
                                    type="checkbox" defaultChecked className="checkbox" required />
                            </label>
                        </div>
                        <div>
                            <button  className="btn btn-sm mt-2">
                                Confirm Your Order 
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Payments;