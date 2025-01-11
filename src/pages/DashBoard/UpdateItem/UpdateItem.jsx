import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { FaPersonDress } from "react-icons/fa6";

const UpdateItem = () => {
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    // const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
    const {name, category, price, fabrics, details,_id} = useLoaderData();
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();


    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.photo[0] };
        // const res = await axiosPublic.post(image_hosting_api, imageFile, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // });
        const res = await axiosPublic.post( image_hosting_api, imageFile, {
            headers:{
                'Content-Type' : 'multipart/form-data'
            }
        })

        if (res.data.success) {
            const burqaItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                details: data.details,
                fabrics : data.fabrics,
                photo : res.data.data.display_url
            }
            const itemRes = await axiosSecure.patch(`/burqas/${_id}`, burqaItem)
            console.log(itemRes.data)
            if(itemRes.data.modifiedCount > 0){
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} updated SuccessFully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        };
    }
    return (
        <div>
            <SectionTitle subheading="add something new" heading="Update item"></SectionTitle>
            <div className="ml-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="form-control w-full m-3">
                            <div className="label">
                                <span className="label-text">Burqa Name*</span>
                            </div>
                            <input
                            defaultValue={name}
                                {...register("name")}
                                type="text" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-2 ml-2">
                        {/* category */}
                        <div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Category*</span>
                                </div>
                                <select
                                    defaultValue={category}
                                    {...register('category')}
                                    className="select select-bordered w-full">
                                    <option disabled value="default">Select a category</option>
                                    <option value="dubai cherry">Dubai Cherry</option>
                                    <option value="dubai cherry">Dubai Cherry</option>
                                    <option value="dubai cherry">Dubai Cherry</option>
                                    <option value="dubai cherry">Dubai Cherry</option>
                                </select>
                            </label>
                        </div>
                        {/* price */}
                        <div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Price*</span>
                                </div>
                                <input
                                defaultValue={price}
                                    {...register("price")}
                                    type="text" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Fabrics</span>
                            </div>
                            <input
                            defaultValue={fabrics}
                                {...register("fabrics")}
                                type="text" placeholder="fabrics" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Details</span>
                            </div>
                            <textarea
                            defaultValue={details}
                                {...register('details')}
                                className="textarea textarea-bordered h-24" placeholder="details"></textarea>
                        </label>
                    </div>

                    <div className="mt-3">
                        <input
                            {...register('photo')}
                            type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="btn btn-sm mt-2">
                        Update items <FaPersonDress></FaPersonDress>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;