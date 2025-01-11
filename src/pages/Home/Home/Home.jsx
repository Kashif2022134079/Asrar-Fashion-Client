import Footer from "../../../Shared/Footer/Footer";
import Navbar from "../../../Shared/Navbar/Navbar";
import Burqas from "../Burqas/Burqas";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Asrar Fashion | Home</title>
            </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <Burqas></Burqas>
            <Footer></Footer>
        </div>
    );
};

export default Home;