import { Link } from "react-router-dom";

const BurqaCard = ({ burqa }) => {
    const { name, photo, quantity, _id } = burqa;
    return (
        // <Link to={`/burqaDetails/${_id}`}>
        //     <div className="">
        //         <div className="w-full h-60 md:h-[500px] overflow-hidden">
        //         <figure>
        //             <img
        //                 className="object-cover w-full h-full"
        //                 src={photo}
        //                 alt="Burqa" />
        //         </figure>
        //         </div>
        //         <div className="card-body">
        //             <p className="text-2xl font-bold">Price :${quantity}</p>
        //         </div>
        //     </div>
        // </Link>

        <Link to={`/burqaDetails/${_id}`}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Image Container */}
                <div className="w-full h-60 md:h-96 overflow-hidden">
                    <figure>
                        <img
                            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                            src={photo}
                            alt={name}
                        />
                    </figure>
                </div>

                {/* Product Details */}
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
                    <p className="text-xl font-bold text-gray-900">Price: ${quantity}</p>
                </div>
            </div>
        </Link>
    );
};

export default BurqaCard;