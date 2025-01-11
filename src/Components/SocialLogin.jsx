import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    
    const handleGoogleLogIn = () =>{
        googleLogin()
        .then(result=>{
            console.log(result.user);
            const userInfo = {
                email : result.user?.email,
                name : result.user?.displayName
            };
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/')
            })
        })
    }
    return (
        <div>
            <div className="mb-3">
                <button onClick={handleGoogleLogIn} className="btn">
                    Continue With Google
                    <FaGoogle className="ml-3 text-xl font-semibold"></FaGoogle>
                </button>
            </div>
        </div>
    );
};
export default SocialLogin;