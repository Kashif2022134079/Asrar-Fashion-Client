import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import asrar from '../../assets/Asrar Fashion.jpeg'
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../Components/SocialLogin";

const Login = () => {

    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = e => {

        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logged In SuccessFully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);

            })
    }
    return (
        <>
            <Helmet>
                <title>Asrar Fashion | Login</title>
            </Helmet>
            <div className="grid md:grid-cols-2">
                <div className="p-16">
                    <img className="lg:h-[500px] w-full" src={asrar} alt="" />
                </div>
                <div className="lg:w-full lg:mx-auto p-10 mt-8">
                    <div className=" flex-col lg:flex-row-reverse border">
                        <div className="card  w-full">
                            <h3 className="text-2xl font-bold text-center my-6">Login to Asrar Fashion</h3>
                            <form onSubmit={handleLogin} className="card-body">

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
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>
                            <Link to='/register'><p className="text-center mb-4">Do not have an Account? <span className="font-semibold text-blue-900">Register</span></p></Link>
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

export default Login;