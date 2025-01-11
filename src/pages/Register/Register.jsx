import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import asrar from '../../assets/Asrar Fashion.jpeg'
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../Components/SocialLogin";


const Register = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateUserProfile(name)
                    .then(() => {
                        const userInfo = {
                            name: name,
                            email: email,
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added')
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User Created SuccessFully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })

                    })
                // if (result.user) {
                //     // create user entry 

                // }
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <>
            <Helmet>
                <title>Asrar Fashion | Sign Up</title>
            </Helmet>
            <div className="grid md:grid-cols-2">
                <div className="p-16">
                    <img className=" md:h-[510px] w-full" src={asrar} alt="" />
                </div>
                <div className="lg:w-full lg:mx-auto p-10">

                    <div className=" flex-col lg:flex-row-reverse border">
                        <h3 className="text-3xl text-center font-bold my-3">Register to Asrar Fashion</h3>
                        <div className="card  w-full">
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Register" />
                                </div>
                            </form>
                            <Link to='/login'><p className="text-center mb-4">Already have an Account.. <span className="font-semibold text-blue-900">Login</span></p></Link>
                            <div className="text-center">
                                <SocialLogin></SocialLogin>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;