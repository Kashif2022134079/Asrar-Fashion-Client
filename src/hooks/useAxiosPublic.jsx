import axios from "axios";

const axiosPublic = axios.create({
    baseURL : 'https://asrar-fashion1.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;