import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle";
import useBurqas from "../../../hooks/useburqas";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItem = () => {
    const [burqas, , refetch] = useBurqas();
    const axiosSecure = useAxiosSecure();
    const handleDeleteItem = (burqa) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/burqas/${burqa._id}`)
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${burqa.name} deleted SuccessFully`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            }
        });
    }
    return (
        <div>
            <SectionTitle heading='Manage Item' subheading="Hurry Up"></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                burqas.map((burqa, index) => <tr key={burqa._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={burqa.photo}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {
                                            burqa.name
                                        }
                                    </td>
                                    <td>{burqa.price}</td>
                                    <th>
                                        <Link to={`/dashboard/updateItem/${burqa._id}`}>
                                        <button
                                            className="btn btn-square btn-outline">
                                            <FaEdit className="text-red-600"></FaEdit>
                                        </button>
                                        </Link>
                                    </th>
                                    <th>
                                        <button
                                            onClick={() => handleDeleteItem(burqa)}
                                            className="btn btn-square btn-outline">
                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                        </button>
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;