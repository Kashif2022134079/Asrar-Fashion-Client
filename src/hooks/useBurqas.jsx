import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useBurqas = () => {
    const axiosPublic = useAxiosPublic();
    // const [burqas, setBurqas] = useState([]);
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     fetch('https://asrar-fashion1.vercel.app/burqas')
    //         .then(res => res.json())
    //         .then(data => {
    //             setBurqas(data)
    //             setLoading(false)
    //         })
    // }, []);

    const {data : burqas=[], isPending: loading, refetch} = useQuery({
        queryKey : ['burqas'],
        queryFn : async ()=>{
            const res = await axiosPublic.get('/burqas')
            return res.data;
        }
    })
    return [burqas, loading, refetch]
};

export default useBurqas;