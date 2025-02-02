import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../../Shared/Navbar/Navbar";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";


const BurqaDetails = () => {
  const item = useLoaderData();
  const { name, category, details, price, fabrics, photo, _id } = item;
  console.log(item);
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();



  const handleAddToCart = () => {
    if (user && user?.email) {
      // send item to the database
      const cartItem = {
        burqaId: _id,
        email: user.email,
        name,
        photo,
        price,
      };
      axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${item.name} added successfully`,
              showConfirmButton: false,
              timer: 1500
            });
            refetch();
          }
        })
    }
    else {
      Swal.fire({
        title: "Your Are Not Logged In",
        text: "Plese login first for add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Log in"
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page
          navigate('/login', { state: { from: location } })
        }
      });
    }
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-2 mt-4">
        {/* <div>
          <img className="w-full h-[600px] p-4" src={photo} alt="" />
        </div> */}

        <div className="bg-white rounded-lg shadow-lg ">
          <img
            className="w-full h-[550px] p-5 object-cover transform hover:scale-105 transition-transform duration-300"
            src={photo}
            alt={name}
          />
        </div>

        <div className="p-10">
          <div className="p-4">
            <h3 className="text-2xl font-semibold">{name}</h3>
            <p className="text-2xl font-medium"> Price : ${price}</p>
          </div>

          <div>
            <div className="collapse collapse-arrow border-b">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">Product Details</div>
              <div className="collapse-content">
                <p className="text-xl font-semibold">Description : <span className="font-thin">{details}</span></p>
                <p className="text-xl font-semibold">Fabrics : {fabrics}</p>
                <p className="text-xl font-semibold">Category : {category}</p>
              </div>
            </div>
            <div className="collapse collapse-arrow border-b">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">Additional Information</div>
              <div className="collapse-content">
                <p>Size : Free size</p>
              </div>
            </div>
            <div className="collapse collapse-arrow border-b">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">Reviews</div>
              <div className="collapse-content">
                <p>There is no review yet</p>
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              className="btn btn-outline border-b-4 m-4">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurqaDetails;