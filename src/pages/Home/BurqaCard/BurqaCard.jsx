import { Link } from "react-router-dom";

const BurqaCard = ({ burqa }) => {
    const { name, photo, quantity, _id } = burqa;
    return (
        <Link to={`/burqaDetails/${_id}`}>
            <div className="">
                <div className="w-full h-60 md:h-[500px] overflow-hidden">
                <figure>
                    <img
                        className="object-cover w-full h-full"
                        src={photo}
                        alt="Burqa" />
                </figure>
                </div>
                <div className="card-body">
                    <p className="text-2xl font-bold">Price :${quantity}</p>
                </div>
            </div>
        </Link>
    );
};

export default BurqaCard;