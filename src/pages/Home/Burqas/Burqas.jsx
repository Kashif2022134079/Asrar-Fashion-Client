import BurqaCard from "../BurqaCard/BurqaCard";
import useBurqas from "../../../hooks/useburqas";

const Burqas = () =>{

    // const[burqas, setBurqas] = useState([]);
    // useEffect(()=>{
    //     fetch('https://asrar-fashion1.vercel.app/burqas')
    //     .then(res => res.json())
    //     .then(data => setBurqas(data))
    // },[])
    const [burqas] = useBurqas();

    return(
        <div className="grid grid-cols-2 gap-2 px-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
            {
                burqas.map(burqa =><BurqaCard key={burqa._id} burqa={burqa}></BurqaCard>)
            }
        </div>
    );
};
export default Burqas;